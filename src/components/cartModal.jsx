import React from 'react';
import { useCart } from '../cartContext';
import { useNavigate } from 'react-router-dom';

// Responsive overlay for modal and darkening background
const modalOverlayStyle = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(34,38,50,0.15)",
  zIndex: 2599
};

// Main Cart drawer/modal styles
const modalStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "40vw", // Desktop default
  maxWidth: 480,
  minWidth: 320,
  height: "100vh",
  background: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.14) 0px 8px 38px",
  zIndex: 2600,
  transition: "all 0.3s cubic-bezier(.71,.16,.29,.93)",
  display: "flex", flexDirection: "column",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
};

const closeBtnStyles = {
  position: "absolute", top: 12, right: 12, fontSize: "1.7rem",
  background: "none", border: "none", color: "#555", cursor: "pointer",
  fontWeight: 800, zIndex: 2700
};
const headerStyles = {
  padding: "1.5rem 2rem", fontSize: "1.3rem",
  fontWeight: 700, borderBottom: "1px solid #eee", color: "#1a73e8"
};
const listStyles = { padding: "1.1rem 1.2rem", flex: 1, overflowY: 'auto' };
const itemStyles = {
  display: "flex", justifyContent: "space-between",
  alignItems: "center", paddingBottom: "0.9rem", borderBottom: "1px solid #f3f3f3"
};
const summaryStyles = {
  padding: "1.8rem 2rem",
  background: "#f9fafb", borderTop: "1px solid #ddd",
  boxShadow: "inset 0 2px 3px rgba(0,0,0,0.05)",
  fontWeight: 700,
  fontSize: "1.15rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function CartModal({ open, onClose }) {
  const { items, removeItem, updateQty, total } = useCart();
  const navigate = useNavigate();

  if (!open) return null;

  function handleOverlayClick(e) {
    // Only close if click is on overlay, not the modal itself
    if (e.target.classList.contains("jp-cart-modal-overlay")) onClose();
  }

  function handleProceed() {
    onClose();
    navigate("/cart-summary");
  }

  return (
    <>
      <div className="jp-cart-modal-overlay" style={modalOverlayStyle} onClick={handleOverlayClick}>
        <div
          className="jp-cart-modal-drawer"
          style={modalStyle}
          onClick={e => e.stopPropagation()}
        >
          <button style={closeBtnStyles} onClick={onClose} aria-label="Close">×</button>
          <div style={headerStyles}>My Cart</div>
          <div style={listStyles}>
            {items.length === 0 && <div>No items in cart.</div>}
            {items.map(item => (
              <div key={item.id} style={itemStyles}>
                <div>
                  <div style={{ fontWeight: "600", color: "#1888be" }}>{item.name}</div>
                  <div style={{ fontSize: "0.97rem", color: "#555" }}>₹{item.price} × {item.qty}</div>
                </div>
                <div>
                  <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ margin: "0 2px" }}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ margin: "0 2px" }}>+</button>
                  <button onClick={() => removeItem(item.id)} style={{ marginLeft: "10px", color: "#b80000", border: "none", background: "none", fontWeight: 600 }}>✕</button>
                </div>
              </div>
            ))}
          </div>
          <div style={summaryStyles}>
            <div>Total: ₹{total}</div>
            <button
              onClick={handleProceed}
              style={{
                padding: "0.8rem 1.6rem",
                background: "#176c17",
                color: "#fff",
                border: "none",
                borderRadius: "7px",
                fontWeight: 700,
                fontSize: "1rem"
              }}
              disabled={items.length === 0}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
      {/* Responsive Style for mobile */}
      <style>
        {`
          @media (max-width: 800px) {
            .jp-cart-modal-drawer {
              width: 60vw !important;
              max-width: 99vw !important;
              min-width: 220px !important;
            }
          }
          @media (max-width: 520px) {
            .jp-cart-modal-drawer {
              width: 96vw !important;
              min-width: 120px !important;
              right: 0 !important;
              left: auto !important;
            }
          }
        `}
      </style>
    </>
  );
}
