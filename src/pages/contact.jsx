import React, { useState } from 'react';
import bannerImg from '../assets/images/contact-us.jpg';

const pageStyle = {
  fontFamily: "Tahoma, Arial, sans-serif",
  background: "#f8fbfc",
  minHeight: "100vh"
};
const imageStyle = {
  width: "100vw",
  height: "210px",
  objectFit: "cover",
  marginBottom: 0
};
const container = {
  maxWidth: "1280px",
  width: "96%",
  margin: "0 auto",
  display: "flex",
  gap: "2.4rem",
  alignItems: "flex-start",
  padding: "2.7rem 0"
};
const leftCol = {
  flex: 1,
  background: "#fff",
  borderRadius: "13px",
  boxShadow: "0 2px 14px rgba(20,40,140,0.09)",
  padding: "2.2rem 1.2rem",
  minWidth: "320px"
};
const rightCol = {
  flex: 1,
  background: "#f6fafc",
  borderRadius: "13px",
  boxShadow: "0 2px 12px rgba(20,40,140,0.07)",
  padding: "2.2rem 1.2rem",
  minWidth: "320px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
};
const headerStyle = {
  textAlign: "center",
  fontWeight: 700,
  fontSize: "1.38rem",
  fontFamily: "Tahoma, Arial, sans-serif",
  margin: "0 0 1.4rem 0"
};
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  fontFamily: "Tahoma, Arial, sans-serif"
};
const inputStyle = {
  height: "36px",
  borderRadius: "6px",
  border: "1.3px solid #cfd8dc",
  fontSize: "1rem",
  padding: "0 0.73rem",
  width: "97%",
  fontFamily: "Tahoma, Arial, sans-serif",
  background: "#f6fafc"
};
const selectStyle = {
  height: "36px",
  borderRadius: "6px",
  border: "1.3px solid #cfd8dc",
  fontSize: "1rem",
  padding: "0 0.73rem",
  width: "97%",
  fontFamily: "Tahoma, Arial, sans-serif",
  background: "#f6fafc",
  appearance: "none",
  color: "#222"
};
const textareaStyle = {
  borderRadius: "6px",
  border: "1.3px solid #cfd8dc",
  fontSize: "1rem",
  padding: "0.73rem",
  width: "97%",
  fontFamily: "Tahoma, Arial, sans-serif",
  background: "#f6fafc",
  minHeight: "48px"
};
const btnSubmit = {
  width: "100%",
  margin: "0 auto",
  background: "#0070f3",
  color: "#fff",
  fontWeight: 700,
  fontSize: "1.04rem",
  fontFamily: "Tahoma, Arial, sans-serif",
  border: "none",
  borderRadius: "22px",
  padding: "0.73rem 0",
  letterSpacing: "0.03em",
  cursor: "pointer",
  display: "block",
  marginTop: ".5rem"
};
const successStyle = {
  textAlign: "center",
  margin: "1rem 0 0 0",
  color: "#0070f3",
  fontWeight: 600,
  fontSize: "1.07rem",
  fontFamily: "Tahoma, Arial, sans-serif"
};

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", issueType: "", issue: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2600);
  }

  return (
    <div style={pageStyle}>
      <img src={bannerImg} style={imageStyle} alt="Contact Banner" />
      <div className="jp-contact-container" style={container}>
        <div style={leftCol}>
          <div style={headerStyle}>Contact Us</div>
          <form style={formStyle} onSubmit={handleSubmit}>
            <input type="text" name="name" required placeholder="Name" style={inputStyle} value={form.name} onChange={handleChange} />
            <input type="tel" name="mobile" required placeholder="Mobile Number" style={inputStyle} value={form.mobile} onChange={handleChange} />
            <input type="email" name="email" required placeholder="Email" style={inputStyle} value={form.email} onChange={handleChange} />
            <select name="issueType" required style={selectStyle} value={form.issueType} onChange={handleChange}>
              <option value="">Select Issue</option>
              <option>Login Issue</option>
              <option>Job Application Problem</option>
              <option>Resume Upload</option>
              <option>Payment/Refund</option>
              <option>Product Information</option>
              <option>Other</option>
            </select>
            <textarea name="issue" required placeholder="Describe your issue" style={textareaStyle} value={form.issue} onChange={handleChange} />
            <button type="submit" style={btnSubmit}>Submit</button>
          </form>
          {success && (
            <div style={successStyle}>
              <span style={{ fontSize: "1.4rem", marginRight: ".3rem" }}>✔️</span>
              Request received! We'll get in touch soon.
            </div>
          )}
        </div>
        <div className="jp-contact-rightcol" style={rightCol}>
          <div style={headerStyle}>How to Reach Us?</div>
          <p style={{ lineHeight: "1.65", fontSize: "1rem", marginBottom: "1.1rem" }}>
            <b>JobPlanner Private Ltd.</b><br />
            123 Main Road, Connaught Place, Delhi - 110001
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "1.1rem" }}>
            <b>Tel:</b> +91-87505-27008 <br />
            <b>Email:</b> <a href="mailto:support@jobplanner.co.in">support@jobplanner.co.in</a>
          </p>
          <div style={{ width: "100%", height: "150px", borderRadius: "9px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,.10)", background: "#fcfcfc" }}>
            <iframe
              title="location"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://maps.google.com/maps?q=connaught%20place%20delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: "none" }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <style>
{`
  @media (max-width: 800px) {
    .jp-contact-container {
      flex-direction: column !important;
      gap: 1.7rem !important;
      align-items: center !important;
      justify-content: center !important;
    }
    .jp-contact-rightcol, .jp-contact-container > div {
      margin-top: 1.3rem !important;
      width: 98vw !important;
      min-width: 0 !important;
      max-width: 480px !important;
      box-sizing: border-box;
      align-items: center !important;
      display: flex !important;
      flex-direction: column !important;
    }
    .jp-contact-rightcol:before {
      content: "";
      display: block;
      margin: 0 auto 1.1rem auto;
      width: 60%;
      height: 2px;
      background: #e2e8f0;
      border-radius: 2px;
    }
    .jp-contact-rightcol > * {
      text-align: center !important;
      width: 100% !important;
      align-items: center !important;
      justify-content: center !important;
    }
    form {
      width: 100% !important;
      max-width: 420px !important;
      align-items: center !important;
    }
    input, select, textarea {
      margin: 0 auto !important;
      width: 97% !important;
      display: block !important;
    }
  }
`}
</style>

    </div>
  );
}
