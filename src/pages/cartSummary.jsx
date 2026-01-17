import React from 'react';
import { useCart } from '../cartContext';

export default function CartSummary({ onProceedToPay }) {
  const { items, total, clearCart } = useCart();

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", background: "#fff", borderRadius: 10, boxShadow: "0 4px 18px rgba(44,50,90,0.06)", padding: "1.8rem 2.6rem" }}>
      <h2 style={{ marginBottom: "1.4rem", color: "#176c17", fontWeight: 700 }}>Order Summary</h2>
      {items.length === 0
        ? <div>Your cart is empty.</div>
        : (
          <>
            <ul style={{ padding: 0, marginBottom: "1.4rem" }}>
              {items.map(item => (
                <li key={item.id} style={{ listStyle: "none", paddingBottom: "1.2rem", borderBottom: "1px solid #f8f8f9" }}>
                  <div style={{ fontWeight: 500, color: "#1888be" }}>{item.name}</div>
                  <div style={{ fontSize: "0.98rem", color: "#555" }}>₹{item.price} × {item.qty}</div>
                </li>
              ))}
            </ul>
            <div style={{ fontSize: "1.11rem", fontWeight: 700, color: "#176c17", marginBottom: "1.1rem" }}>
              Total: ₹{total}
            </div>
            <button style={{
              background: "#2196f3", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, fontSize: "1.04rem",
              padding: "0.9rem 2.1rem"
            }}
              onClick={onProceedToPay}
            >
              Proceed to Pay
            </button>
            <button style={{
              background: "#eee", color: "#333", border: "none", borderRadius: 8, marginLeft: "23px",
              fontWeight: 500, fontSize: "1.01rem", padding: "0.7rem 1.9rem"
            }} onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )
      }
    </div>
  );
}
