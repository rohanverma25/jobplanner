import bgImg from '../assets/images/page-bottom.jpg';

const bgSection = {
  width: "100%",
  minHeight: "210px",
  position: "relative",
  background: "#fff",
  margin: "0",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const bgImgStyle = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
  opacity: 0.5,
  pointerEvents: "none"
};

// For desktop (flex row), for mobile (flex column, center-aligned)
const ctaContainer = {
  position: "relative",
  zIndex: 2,
  maxWidth: "1280px",
  width: "90%",
  margin: "0 auto",
  display: "flex",
  gap: "2.5rem",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem 0",
  flexDirection: "row",
};

const colStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 0
};

const headingStyle = {
  fontSize: '1.25rem',
  fontWeight: 700,
  marginBottom: '0.6rem',
  color: "#222",
  background: "none",
  textAlign: "center"
};

const btnStyle = { 
  background: '#0070f3',
  color: '#fff',
  fontWeight: 700,
  border: 'none',
  borderRadius: '5px',
  padding: '0.92rem 2.1rem',
  fontSize: '1.08rem',
  cursor: 'pointer',
  marginTop: '0.5rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  alignSelf: "center",
  minHeight: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const contactBtnStyle = {
  ...btnStyle,
  background: "#ffd700",
  color: "#222"
};

export default function HomeBottomCTA({ onUploadCV, onContactClick }) {
  return (
    <div className="jp-bottom-cta-bg" style={bgSection}>
      <img src={bgImg} className="jp-bottom-cta-img" style={bgImgStyle} alt="CV BG" />
      <div
        className="jp-home-bottomcta"
        style={ctaContainer}
      >
        {/* <div className="jp-home-bottomcta-left" style={colStyle}>
          <h2 className="jp-home-bottomcta-heading" style={headingStyle}>
            Upload Your CV &amp; connect Top Employers
          </h2>
          <button style={btnStyle} onClick={onUploadCV}>Upload your CV</button>
        </div> */}
        <div className="jp-home-bottomcta-right" style={colStyle}>
          <h2 className="jp-home-bottomcta-heading" style={headingStyle}>
            Still Not sure? Talk to us
          </h2>
          <button style={contactBtnStyle} onClick={onContactClick}>
            Contact Us
          </button>
        </div>
      </div>
      <style>
        {`
          .jp-bottom-cta-bg {
            box-sizing: border-box;
          }
          
          .jp-bottom-cta-img {
            display: block;
          }

          /* Tablet and below: stack columns vertically */
          @media (max-width: 768px) {
            .jp-home-bottomcta {
              flex-direction: column;
              gap: 1.5rem;
              padding: 1.5rem 1rem;
            }
            .jp-home-bottomcta-heading {
              font-size: 1.1rem;
              margin-bottom: 0.5rem;
            }
            button {
              font-size: 0.95rem;
              padding: 0.8rem 1.8rem;
            }
            .jp-bottom-cta-bg {
              min-height: auto;
              padding: 1rem 0;
            }
          }

          /* Mobile: additional tightening */
          @media (max-width: 480px) {
            .jp-home-bottomcta {
              gap: 1rem;
              padding: 1rem 0.5rem;
              width: 95%;
            }
            .jp-home-bottomcta-left,
            .jp-home-bottomcta-right {
              width: 100%;
            }
            .jp-home-bottomcta-heading {
              font-size: 1rem;
              margin-bottom: 0.4rem;
            }
            button {
              font-size: 0.9rem;
              padding: 0.75rem 1.5rem;
              min-height: 44px;
            }
            .jp-bottom-cta-bg {
              min-height: 150px;
            }
          }
        `}
      </style>
    </div>
  );
}
