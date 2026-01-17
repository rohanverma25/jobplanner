import React, { useState, useRef } from 'react';

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(64,71,75,0.44)",
  zIndex: 2000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Tahoma, Arial, sans-serif"
};

const modalStyle = {
  background: "#fff",
  borderRadius: "13px",
  padding: "3rem 2.8rem 2.8rem 3rem",
  boxShadow: "0 8px 44px rgba(20,50,90,0.18)",
  minWidth: "265px",
  maxWidth: "340px",
  width: "100%",
  fontFamily: "Tahoma, Arial, sans-serif",
  position: "relative"
};

const headerStyle = {
  textAlign: "center",
  fontWeight: 700,
  fontSize: "1.38rem",
  fontFamily: "Tahoma, Arial, sans-serif",
  marginTop: ".15rem",
  marginBottom: "1.0rem"
};

const xBtnStyle = {
  position: "absolute",
  top: "11px",
  right: "15px",
  background: "none",
  border: "none",
  fontSize: "1.37rem",
  color: "#878",
  cursor: "pointer",
  fontFamily: "Tahoma, Arial, sans-serif"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  margin: "0 auto",
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
  marginTop: ".4rem"
};

const successStyle = {
  textAlign: "center",
  margin: "1.1rem 0 0 0",
  color: "#0070f3",
  fontWeight: 600,
  fontSize: "1.12rem",
  fontFamily: "Tahoma, Arial, sans-serif"
};

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", issueType: "", issue: "" });
  const [success, setSuccess] = useState(false);
  const overlayRef = useRef(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => { setSuccess(false); onClose(); }, 1600);
  }
  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) {
      onClose && onClose();
    }
  }
  if (!open) return null;

  return (
    <div style={overlayStyle} ref={overlayRef} onClick={handleOverlayClick}>
      <div style={modalStyle}>
        <button style={xBtnStyle} onClick={onClose} aria-label="Close">&times;</button>
        <div style={headerStyle}>Contact Us</div>
        <form style={formStyle} onSubmit={handleSubmit}>
          <input type="text" name="name" required placeholder="Name" style={inputStyle} value={form.name} onChange={handleChange} />
          <input type="tel" name="mobile" required placeholder="Mobile Number" style={inputStyle} value={form.mobile} onChange={handleChange} />
          <input type="email" name="email" required placeholder="Email" style={inputStyle} value={form.email} onChange={handleChange} />
          <select name="issueType" required style={inputStyle} value={form.issueType} onChange={handleChange}>
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
            <span style={{ fontSize: "2rem", marginRight: ".5rem" }}>✔️</span>
            Request received! We'll get in touch soon.
          </div>
        )}
      </div>
    </div>
  );
}
