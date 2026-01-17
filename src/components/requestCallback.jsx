const callbackBtnStyle = {
  position: "fixed",
  right: "-70px", // Adjust this value (try -32px to -40px) until it hugs the edge perfectly
  top: "50%",
  transform: "translateY(-50%) rotate(270deg)",
  background: "#ffc200",
  color: "#1a1a1a",
  borderRadius: "26px",
  border: "none",
  fontWeight: 700,
  fontSize: "1.03rem",
  cursor: "pointer",
  boxShadow: "0 2px 10px rgba(90,60,20,0.13)",
  zIndex: 1890,
  padding: "0.77rem 1.5rem",
  fontFamily: "Tahoma, Arial, sans-serif",
  transition: "right 0.2s"
};

export default function RequestCallbackButton({ onClick }) {
  return (
    <>
      <button
        style={callbackBtnStyle}
        className="jp-callback-btn"
        onClick={onClick}
        aria-label="Request Callback"
      >
        Request Callback
      </button>
      <style>
        {`
          @media (max-width: 600px) {
            .jp-callback-btn {
              font-size: 0.7rem !important;
              padding: 0.67rem 0.95rem !important;
              right: -45px !important; /* Tuck closer on mobile */
            }
          }
        `}
      </style>
    </>
  );
}
