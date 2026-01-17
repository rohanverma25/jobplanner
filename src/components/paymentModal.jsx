import React, { useState } from 'react';
import { useCart } from '../cartContext';
import { useAuth } from '../authContext';
import { useNavigate } from 'react-router-dom';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
// SES removed — using Netlify serverless function instead

const REGION = 'ap-south-1';

const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: 'AKIA4I7NMZFEAAKGEU55',
    secretAccessKey: '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',
  },
});

const ddbClient = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: 'AKIA4I7NMZFEAAKGEU55',
    secretAccessKey: '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',
  },
});
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// Helper to send email via Netlify serverless function
async function sendOrderConfirmationEmail({ to, subject, body }) {
  try {
    const res = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, subject, text: body }),
    });
    if (!res.ok) throw new Error('Email function returned ' + res.status);
    return await res.text();
  } catch (err) {
    console.error('Email send failed:', err);
    throw err;
  }
}

const S3_BUCKET = 'jobplanner-user-resumes'; // Your bucket name
const DDB_ORDERS_TABLE = 'orders';
const MAIL_FROM = 'info@jobplanner.co.in'; // Updated to use Hostinger SMTP sender

const PASSWORDS = {
  gateway1: 'secretpass1',
  gateway2: 'secretpass2',
};

// Import your QR code images
import qr1 from '../assets/qr1.png';
import qr2 from '../assets/qr2.png';

const overlayStyle = {
  position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
  background: 'rgba(64,71,75,0.47)', zIndex: 3000,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontFamily: 'Tahoma, Arial, sans-serif',
};
const modalStyle = {
  background: '#fff',
  borderRadius: '13px',
  padding: '2rem 3rem 2.5rem 3rem',
  boxShadow: '0 8px 44px rgba(20,50,90,0.18)',
  minWidth: '320px', maxWidth: '390px',
  fontFamily: 'Tahoma, Arial, sans-serif',
  position: 'relative'
};
const xBtnStyle = {
  position: 'absolute', top: '13px', right: '18px',
  background: 'none', border: 'none',
  fontSize: '1.5rem', color: '#777',
  cursor: 'pointer',
};
const labelStyle = {
  fontWeight: 600,
  marginBottom: '8px',
  display: 'block'
};
const selectStyle = {
  width: '100%',
  padding: '0.55rem 0.9rem',
  fontSize: '1.03rem',
  marginBottom: '1rem',
  borderRadius: 6,
  border: '1.1px solid #ccc'
};
const inputStyle = {
  width: '100%',
  padding: '0.5rem 0.9rem',
  fontSize: '1rem',
  marginBottom: '1.3rem',
  borderRadius: 6,
  border: '1px solid #ccc'
};
const btnStyle = {
  width: '100%',
  background: '#176c17',
  color: '#fff',
  fontWeight: 700,
  padding: '0.75rem 0',
  border: 'none',
  borderRadius: 22,
  fontSize: '1.1rem',
  cursor: 'pointer'
};
const imgStyle = {
  width: '230px',
  height: '230px',
  objectFit: 'contain',
  margin: '0 auto 1.3rem auto',
  display: 'block',
  borderRadius: '12px',
  border: '1px solid #a9d2a8'
};
const errorStyle = { color: '#b80000', fontWeight: '600', marginBottom: '1rem' };
const successStyle = { color: '#176c17', fontWeight: '600', marginBottom: '1rem' };

export default function PaymentModal({ open, onClose, onOrderSuccess }) {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [gateway, setGateway] = useState('gateway1');
  const [password, setPassword] = useState('');
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [utr, setUtr] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!open) return null;

  function resetModal() {
    setGateway('gateway1');
    setPassword('');
    setIsPwdValid(false);
    setUtr('');
    setFile(null);
    setError('');
    setSuccess('');
    setSubmitting(false);
    setOrderPlaced(false);
  }

  function closeModal() {
    resetModal();
    onClose && onClose();
  }

  const QR_IMAGES = { gateway1: qr1, gateway2: qr2 };

  function checkPassword(pwd, gw) {
    if (pwd === PASSWORDS[gw]) {
      setIsPwdValid(true);
      setError('');
    } else {
      setIsPwdValid(false);
      setError('Incorrect Password for selected gateway.');
    }
  }

  async function handlePasswordChange(e) {
    const val = e.target.value;
    setPassword(val);
    checkPassword(val, gateway);
  }

  function handleGatewayChange(e) {
    const val = e.target.value;
    setGateway(val);
    checkPassword(password, val);
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
  e.preventDefault();
  if (!utr.trim() || !file || !isPwdValid) {
    setError('All fields are required and password must be valid.');
    return;
  }
  setSubmitting(true);
  setError('');
  try {
    console.log("Uploading screenshot to S3...");
    const s3Key = `payment-proofs/${user.email}_${Date.now()}_${file.name}`;
    const arrayBuffer = await file.arrayBuffer();
    await s3Client.send(new PutObjectCommand({
      Bucket: S3_BUCKET,
      Key: s3Key,
      Body: arrayBuffer,
      ContentType: file.type,
     // ACL: 'public-read',
    }));
    console.log("Upload to S3 successful");
    const screenshotUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${s3Key}`;

    console.log("Creating order object...");
    const order = {
      orderID: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      userName: user.name,
      userEmail: user.email,
      userMobile: user.mobile,
      gateway,
      utr,
      screenshotUrl,
      items,
      total,
      status: 'Processing',
      createdAt: new Date().toISOString(),
    };

    console.log("Saving order to DynamoDB...");
    await ddbDocClient.send(new PutCommand({
      TableName: DDB_ORDERS_TABLE,
      Item: order,
    }));
    console.log("Order saved in DynamoDB.");

    const itemsList = items.map(i => `${i.name} x${i.qty} @ ₹${i.price}`).join('\n');
    const emailBody = `
Hello ${order.userName || 'Customer'},

Thank you for your order ${order.orderID} placed on ${order.createdAt}.

Order Details:
${itemsList}

Total Amount: ₹${order.total}
Payment Gateway: ${order.gateway}
UTR Number: ${order.utr}

We have received your payment proof and your order is now in process.

Regards,
JobPlanner Team
    `;
    console.log("Sending confirmation email...");
    await sendOrderConfirmationEmail({
      to: order.userEmail,
      subject: `Order Confirmation - ${order.orderID}`,
      body: emailBody
    });
    console.log("Confirmation email sent!");

    setSuccess('Order placed successfully! You will receive a confirmation email shortly.');
    clearCart();
    setOrderPlaced(true);
  } catch (err) {
    console.error("Error at step:", err);
    setError('Network or AWS error, please try again.');
    setSubmitting(false);
  }
}


  function goToProfile() {
    onClose && onClose();
    navigate('/profile');
  }

  return (
    <div style={overlayStyle} onClick={e => { if (e.target === e.currentTarget) closeModal(); }}>
      <div style={modalStyle}>
        <button style={xBtnStyle} onClick={closeModal} aria-label="Close">×</button>

        {!orderPlaced ? (
          <>
            <h2 style={{ marginBottom: '1.3rem', color: '#176c17' }}>Select Payment Gateway</h2>
            <form onSubmit={handleSubmit}>
              <label style={labelStyle} htmlFor="gateway">Payment Gateway</label>
              <select
                id="gateway"
                value={gateway}
                onChange={handleGatewayChange}
                style={selectStyle}
                disabled={submitting}
                required
              >
                <option value="gateway1">Payment Gateway 1</option>
                <option value="gateway2">Payment Gateway 2</option>
              </select>

              <label style={labelStyle} htmlFor="password">Enter Gateway Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                style={inputStyle}
                disabled={submitting}
                required
              />

              {error && <div style={errorStyle}>{error}</div>}
              {success && <div style={successStyle}>{success}</div>}

              {isPwdValid && (
                <>
                  <img src={QR_IMAGES[gateway]} alt="Payment QR Code" style={imgStyle} />
                  <label style={labelStyle} htmlFor="utr">Enter UTR Number</label>
                  <input
                    id="utr"
                    type="text"
                    value={utr}
                    onChange={e => setUtr(e.target.value)}
                    style={inputStyle}
                    disabled={submitting}
                    required
                  />
                  <label style={labelStyle} htmlFor="screenshot">Upload Payment Screenshot</label>
                  <input
                    id="screenshot"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={submitting}
                    required
                  />
                  <button type="submit" style={btnStyle} disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Payment'}
                  </button>
                </>
              )}
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h2 style={{ color: '#176c17' }}>Your order is now processing.</h2>
            <p>Thank you for your payment. You will receive a confirmation email shortly.</p>
            <button
              style={{ ...btnStyle, marginTop: '1.5rem', width: 'auto', padding: '0.75rem 2.5rem', fontSize: '1.05rem' }}
              onClick={goToProfile}
            >
              Go to Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
