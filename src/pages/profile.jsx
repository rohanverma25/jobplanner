// src/pages/Profile.jsx
import React, { useState } from 'react';
import { useAuth } from '../authContext';

const API = import.meta.env.VITE_API_URL;

export default function Profile() {
  const { user, logout, login } = useAuth();
  const [fields, setFields] = useState({ name: user?.name || "", mobile: user?.mobile || "" });
  const [updating, setUpdating] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [resumeUrl, setResumeUrl] = useState(user?.resumeUrl || "");
  const [resumeFile, setResumeFile] = useState(null);
  const [pwFields, setPwFields] = useState({ current: "", new: "", confirm: "" });
  const [pwUpdating, setPwUpdating] = useState(false);
  const [pwSuccess, setPwSuccess] = useState("");
  const [pwError, setPwError] = useState("");

  if (!user) return null;

  async function handleProfileUpdate(e) {
    e.preventDefault();
    setUpdating(true); setError(""); setSuccess("");
    // Make PATCH call to backend if you create a /api/profile endpoint
    // For now, we'll just update local user
    login({ ...user, name: fields.name, mobile: fields.mobile });
    setSuccess("Profile updated successfully.");
    setUpdating(false);
  }

  // async function handleResumeUpload(e) {
  //   e.preventDefault();
  //   setError(""); setSuccess("");
  //   if (!resumeFile) return setError("No resume file selected.");
  //   const formData = new FormData();
  //   formData.append("resume", resumeFile);
  //   formData.append("email", user.email);
    
  //   try {
  //     const res = await fetch(API + "/upload-resume", {
  //       method: "POST",
  //       body: formData
  //     });
  //     const data = await res.json();
      
  //     if (!res.ok) return setError(data.error || "Upload failed.");
  //     setResumeUrl(data.url);
  //     login({ ...user, resumeUrl: data.url });
  //     setSuccess("Resume uploaded!");
  //   } catch {
  //     setError("Network error.");
  //   }
  // }

  async function handleChangePw(e) {
    e.preventDefault();
    setPwUpdating(true); setPwError(""); setPwSuccess("");
    if (!pwFields.new || !pwFields.confirm || pwFields.new !== pwFields.confirm) {
      setPwError("Passwords must match."); setPwUpdating(false); return;
    }
    // TODO: Implement change password endpoint in backend (e.g. /api/change-password)
    setTimeout(() => {
      setPwSuccess("Password changed."); setPwUpdating(false);
      setPwFields({ current: "", new: "", confirm: "" });
    }, 800);
  }

  return (
    <div style={{ maxWidth: 550, margin: "2.5rem auto", padding: "2rem 2.5rem", boxShadow: "0 8px 44px rgba(20,50,90,0.09)", borderRadius: 16, background: "#fff" }}>
      <h2 style={{ marginBottom: "2rem", color: "#176c17", fontWeight: 700 }}>My Profile</h2>
      <form onSubmit={handleProfileUpdate}>
        <div style={{ marginBottom: "1.3rem" }}>
          <label style={{ fontWeight: 500, marginBottom: 8 }}>Email</label><br />
          <input disabled value={user.email} style={{ width: "100%", padding: "0.7rem", background: "#f7f7f7", borderRadius: 6, border: "1px solid #eee" }} />
        </div>
        <div style={{ marginBottom: "1.1rem" }}>
          <label style={{ fontWeight: 500 }}>Name</label><br />
          <input required value={fields.name} onChange={e => setFields(f => ({ ...f, name: e.target.value }))} style={{ width: "100%", padding: "0.7rem", borderRadius: 6, border: "1px solid #eee" }} />
        </div>
        <div style={{ marginBottom: "1.1rem" }}>
          <label style={{ fontWeight: 500 }}>Mobile</label><br />
          <input required value={fields.mobile} onChange={e => setFields(f => ({ ...f, mobile: e.target.value }))} style={{ width: "100%", padding: "0.7rem", borderRadius: 6, border: "1px solid #eee" }} />
        </div>
        {success && <div style={{ color: "#176c17", margin: "0.5rem 0" }}>{success}</div>}
        {error && <div style={{ color: "#b80000", margin: "0.5rem 0" }}>{error}</div>}
        <button type="submit" style={{ padding: "0.75rem 2.5rem", background: "#176c17", color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, fontSize: "1rem" }} disabled={updating}>Update</button>
        <button type="button" style={{ marginLeft: "18px", padding: "0.75rem 1.3rem", background: "#eee", color: "#333", border: "none", borderRadius: 6, fontWeight: 400, fontSize: "1rem" }} onClick={logout}>Logout</button>
      </form>

      <hr style={{ margin: "2.5rem 0 1.6rem 0", border: 0, borderTop: "1px solid #eaeaea" }} />

      {/* <form onSubmit={handleResumeUpload} style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#1888be" }}>Resume Upload</h3>
        {resumeUrl && <div style={{ marginBottom: "0.7rem" }}>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#2196f3", fontWeight: 500 }}>View Resume</a>
        </div>}
        <input type="file" accept=".pdf,.doc,.docx" onChange={e => setResumeFile(e.target.files[0])} style={{ marginBottom: "1rem" }} />
        <button type="submit" style={{ padding: "0.55rem 1.8rem", background: "#1888be", color: "#fff", border: "none", borderRadius: 6, fontWeight: 600 }}>Upload Resume</button>
      </form> */}

      {/* <hr style={{ margin: "2rem 0 1.4rem 0", border: 0, borderTop: "1px solid #eaeaea" }} /> */}

      <form onSubmit={handleChangePw}>
        <h3 style={{ color: "#176c17" }}>Change Password</h3>
        <input type="password" required placeholder="Current Password" value={pwFields.current} onChange={e => setPwFields(f => ({ ...f, current: e.target.value }))} style={{ width: "100%", marginBottom: "0.8rem", padding: "0.62rem", borderRadius: 6, border: "1px solid #eee" }} />
        <input type="password" required placeholder="New Password" value={pwFields.new} onChange={e => setPwFields(f => ({ ...f, new: e.target.value }))} style={{ width: "100%", marginBottom: "0.8rem", padding: "0.62rem", borderRadius: 6, border: "1px solid #eee" }} />
        <input type="password" required placeholder="Confirm New Password" value={pwFields.confirm} onChange={e => setPwFields(f => ({ ...f, confirm: e.target.value }))} style={{ width: "100%", marginBottom: "0.8rem", padding: "0.62rem", borderRadius: 6, border: "1px solid #eee" }} />
        {pwSuccess && <div style={{ color: "#176c17", margin: "0.5rem 0" }}>{pwSuccess}</div>}
        {pwError && <div style={{ color: "#b80000", margin: "0.5rem 0" }}>{pwError}</div>}
        <button type="submit" style={{ padding: "0.55rem 1.8rem", background: "#176c17", color: "#fff", border: "none", borderRadius: 6, fontWeight: 600 }} disabled={pwUpdating}>Change Password</button>
      </form>
    </div>
  );
}
