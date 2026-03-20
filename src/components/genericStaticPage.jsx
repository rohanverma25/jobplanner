import React from "react";
import Layout from "./layout";
import { useCart } from "../cartContext";
import { useAuth } from "../authContext";

const fullImageWrapper = {
  width: "100vw",
  display: "flex",
  margin: "0",
  padding: "0",
  overflow: "hidden",
  position: "relative",
  background: "#fff",
};
const fullImageStyle = {
  width: "100vw",
  height: "300px",
  objectFit: "cover",
  display: "block",
  margin: "0",
  border: "none",
};
const contentContainer = {
  margin: "0 auto",
  maxWidth: "1280px",
  width: "96%",
  boxSizing: "border-box",
};
const columns = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "2.5rem",
  alignItems: "flex-start",
  margin: "0 0",
};
const leftCol = {
  flex: "0 0 70%",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};
const rightCol = {
  flex: "0 0 30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "340px",
};
const productBox = {
  border: "1px solid #222",
  borderRadius: "9px",
  padding: "2rem 1.5rem",
  background: "#fff",
  boxShadow: "0 4px 18px rgba(20,20,30,0.11)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "240px",
  width: "100%",
  maxWidth: "320px",
};
const productHeading = {
  fontWeight: 700,
  fontSize: "1.15rem",
  marginBottom: "1.2rem",
  color: "#222",
  textAlign: "center",
};
const priceStyle = {
  background: "#aad6a4",
  color: "#134e07",
  fontWeight: 700,
  fontSize: "1.18rem",
  borderRadius: "16px",
  padding: "0.8rem 2.1rem",
  marginBottom: "1.5rem",
  boxShadow: "0 2px 6px rgba(60,130,70,0.08)",
  border: "2px solid #6ac16f",
  textAlign: "center",
};
const ctaBtnStyle = {
  background: "#0070f3",
  color: "#fff",
  fontWeight: 700,
  border: "none",
  borderRadius: "5px",
  padding: "0.92rem 2.1rem",
  fontSize: "1.08rem",
  cursor: "pointer",
  marginTop: "0.5rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  alignSelf: "center",
};
const h1Style = {
  fontSize: "2.3rem",
  marginBottom: "1rem",
  fontWeight: 700,
  color: "#222",
};
const descStyle = {
  fontSize: "1.12rem",
  color: "#333",
  lineHeight: "1.5",
  textAlign: "justify",
};
const bottomCTAWrapper = {
  width: "100vw",
  height: "140px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  background: "#fff",
};
const bottomImageStyle = {
  position: "absolute",
  zIndex: 0,
  left: 0,
  top: 0,
  width: "100vw",
  height: "140px",
  objectFit: "cover",
  opacity: 0.6,
};
const bottomContentBox = {
  position: "relative",
  zIndex: 2,
  width: "100%",
  maxWidth: "700px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const bottomTextStyle = {
  color: "#1a1a1a",
  fontSize: "1.25rem",
  fontWeight: 600,
  paddingBottom: "0.8rem",
  background: "none",
  textAlign: "center",
};
const bottomBtnStyle = {
  ...ctaBtnStyle,
  background: "#ffd700",
  color: "#222",
  fontWeight: 700,
  boxShadow: "none",
  fontSize: "1rem",
  marginTop: 0,
};

export default function GenericStaticPage({
  topImage,
  pageTitle,
  pageDesc,
  productHeadingText,
  priceText,
  priceValue,
  rightCtaBtn,
  bottomImage,
  bottomCtaText,
  bottomCtaBtn,
  onRightCta,
  onBottomCta,
  onAuthClick,
}) {
  const { addItem } = useCart();
  const { user } = useAuth();
  // Parse price from string if priceValue not provided
  const price =
    typeof priceValue === "number"
      ? priceValue
      : parseInt((priceText || "0").replace(/[^\d]/g, ""), 10);

  function handleAddCart() {
    if (!user) {
      if (onAuthClick) {
        onAuthClick();
      } else {
        alert("You must login/signup first!");
      }
      return;
    }
    addItem({
      id: productHeadingText || pageTitle,
      name: productHeadingText || pageTitle,
      price: price || 0,
    });
  }

  return (
    <>
      <div style={fullImageWrapper}>
        <img src={topImage} style={fullImageStyle} alt="Main" />
      </div>
      <Layout>
        <div style={contentContainer}>
          <div className="jp-columns-responsive" style={columns}>
            <div style={leftCol}>
              <h1 style={h1Style}>{pageTitle}</h1>
              {Array.isArray(pageDesc) ? (
                pageDesc.map((p, idx) => (
                  <p style={descStyle} key={idx}>
                    {p}
                  </p>
                ))
              ) : (
                <p style={descStyle}>{pageDesc}</p>
              )}
            </div>
            <div className="jp-product-rightcol" style={rightCol}>
              <div className="jp-product-box" style={productBox}>
                <div style={productHeading}>
                  {productHeadingText || "Product Title"}
                </div>
                <div style={priceStyle}>{priceText || "₹ 0.00"}</div>
                {/* <button
                  style={ctaBtnStyle}
                  onClick={onRightCta || handleAddCart}
                >
                  {rightCtaBtn+'1' || 'Add to Cart'}
                </button> */}
                {user ? (
                  <form
                    action={import.meta.env.VITE_CART_URL}
                    method="POST"
                    target="_blank"
                  >
                    <input type="hidden" name="from" value="job" />
                    <input type="hidden" name="pname" value={pageTitle} />
                    <input type="hidden" name="quantity" value="1" />
                    <input type="hidden" name="price" value={priceValue} />
                    <input type="hidden" name="user" value={user?.name} />
                    <input type="hidden" name="email" value={user?.email} />
                    <input type="hidden" name="phone" value={user?.mobile} />
                    <button type="submit" style={ctaBtnStyle}>
                      {rightCtaBtn || "Add to Cart"}
                    </button>
                  </form>
                ) : (
                  <button className="jp-login-btn" onClick={onAuthClick}>
                    Login / Register
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div style={bottomCTAWrapper}>
        <img src={bottomImage} style={bottomImageStyle} alt="CTA" />
        <div style={bottomContentBox}>
          <span style={bottomTextStyle}>
            {bottomCtaText || "Still not sure? Talk to us"}
          </span>
          <button style={bottomBtnStyle} onClick={onBottomCta}>
            {bottomCtaBtn || "Contact Us"}
          </button>
        </div>
      </div>
      <style>
        {`
        @media (max-width: 800px) {
          .jp-columns-responsive {
            flex-direction: column !important;
            gap: 2.2rem !important;
            align-items: center !important;
          }
          .jp-product-rightcol {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            padding: 0 !important;
            align-items: center !important;
          }
          .jp-product-box {
            min-width: 0 !important;
            max-width: 70% !important;
            width: 70% !important;
            box-sizing: border-box !important;
            margin: 0 auto !important;
            border-radius: 12px !important;
            padding: 1.3rem 0.9rem !important;
            font-size: 1rem !important;
          }
        }
        @media (max-width: 600px) {
          .jp-product-box {
            max-width: 70% !important;
            width: 70% !important;
            padding: 1rem 0.8rem !important;
            font-size: 0.95rem !important;
          }
        }
        @media (max-width: 480px) {
          .jp-product-box {
            max-width: 75% !important;
            width: 75% !important;
            padding: 0.9rem 0.6rem !important;
            font-size: 0.9rem !important;
          }
        }
        `}
      </style>
    </>
  );
}
