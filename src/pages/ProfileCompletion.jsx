import React, { useState } from "react";

const ProfileCompletion = () => {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    phone: "",
    price: "",
  });

  // const REDIRECT_URL = import.meta.env.VITE_CART_LIST_URL;
  // console
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
async function initiatePayment() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}pay.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.user,
            email: formData.email,
            phone: formData.phone,
            amount: formData.price,
          }),
        }
      );
      const data = await response.json();
      if (data.success) {
        // Redirect to payment gateway
        window.location.href = data.payment_url;
      } else {
        alert(data.message || "Payment failed");
      }
    } catch (err) {
      console.log(err);
      alert("Network error");
    }
  }

  return (
    <div style={containerStyle}>
      <h3>Profile Completion</h3>

      <form style={formStyle} method="POST" target="_blank">
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
        <button type="button" onClick={initiatePayment} style={buttonStyle}>
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
