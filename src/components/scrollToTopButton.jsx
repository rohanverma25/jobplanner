import React, { useState, useEffect } from 'react';

const btnStyle = {
  position: "fixed",
  right: "30px",
  bottom: "28px",
  background: "#0070f3",
  color: "#fff",
  borderRadius: "50%",
  border: "none",
  width: "52px",
  height: "52px",
  fontWeight: 700,
  fontSize: "1.4rem",
  cursor: "pointer",
  boxShadow: "0 2px 10px rgba(20,40,120,0.16)",
  zIndex: 1900,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 160);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button style={btnStyle} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
      ↑
    </button>
  );
}
