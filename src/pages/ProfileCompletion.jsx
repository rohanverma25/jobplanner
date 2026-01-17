import React, { useState } from "react";

const ProfileCompletion = () => {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    phone: "",
    price: "",
  });

  const REDIRECT_URL = import.meta.env.VITE_CART_LIST_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("Form Data:", formData);

  //   if (!REDIRECT_URL) {
  //     alert("Redirect URL not configured");
  //     return;
  //   }

  //   window.location.href = REDIRECT_URL;
  // };

  return (
    <div style={containerStyle}>
      <h3>Profile Completion</h3>

      <form action={import.meta.env.VITE_CART_URL} style={formStyle} method="POST" target="_blank">
        <input
          type="text"
          name="user"
          placeholder="Full Name"
          value={formData.user}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="number"
          name="price"
          placeholder="Amount"
          value={formData.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input type="hidden" name="from" value="job" />
        <input type="hidden" name="quantity" value="1" />
        <input type="hidden" name="pname" value="Profile Completion" />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileCompletion;

/* Inline Styles */
const containerStyle = {
  maxWidth: "400px",
  margin: "40px auto",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px",
  background: "#0d6efd",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
