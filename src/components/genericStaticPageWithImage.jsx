import React from 'react';
import Layout from './layout';

const fullImageWrapper = {
  width: '100vw',
  display: 'flex',
  margin: '0',
  padding: '0',
  overflow: 'hidden',
  position: "relative",
  background: '#fff'
};

const fullImageStyle = {
  width: '100vw',
  height: '300px',
  objectFit: 'cover',
  display: 'block',
  margin: '0',
  border: 'none',
};

const contentContainer = {
  margin: '0 auto',
  maxWidth: '1280px',
  width: '96%',
  boxSizing: 'border-box',
};

const columns = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '2.5rem',
  alignItems: 'flex-start',
  margin: '0 0',
};

const leftCol = {
  flex: '0 0 50%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const rightCol = {
  flex: '0 0 50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '340px',
  paddingTop: '10rem',
};

const rightImageStyle = {
  width: '100%',
  maxWidth: '680px',
  height: 'auto',
  borderRadius: '12px',
  boxShadow: '0 4px 18px rgba(10,10,30,0.11)',
  objectFit: 'cover',
  display: 'block',
};

const h1Style = {
  fontSize: '2.3rem',
  marginBottom: '1rem',
  fontWeight: 700,
  color: '#222',
};

const descStyle = {
  fontSize: '1.12rem',
  color: '#333',
  lineHeight: '1.5',
  textAlign: 'justify',
};

const bottomCTAWrapper = {
  width: '100vw',
  height: '140px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  background: "#fff"
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
  width: '100%',
  maxWidth: '700px',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const bottomTextStyle = {
  color: '#1a1a1a',
  fontSize: '1.25rem',
  fontWeight: 600,
  paddingBottom: "0.8rem",
  background: "none",
  textAlign: "center"
};

const bottomBtnStyle = {
  background: '#ffd700',
  color: '#222',
  fontWeight: 700,
  border: 'none',
  borderRadius: '5px',
  padding: '0.87rem 2rem',
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '0.5rem',
  boxShadow: 'none',
  alignSelf: "center",
};

export default function GenericStaticPageWithImage({
  topImage,
  pageTitle,
  pageDesc,
  rightImage,
  rightImageAlt,
  bottomImage,
  bottomCtaText,
  bottomCtaBtn,
  onBottomCta,
}) {
  return (
    <>
      <div style={fullImageWrapper}>
        <img src={topImage} style={fullImageStyle} alt="Main" />
      </div>
      <Layout>
        <div style={contentContainer}>
          <div className="jp-columns-responsive-img" style={columns}>
            <div style={leftCol}>
              <h1 style={h1Style}>{pageTitle}</h1>
              {Array.isArray(pageDesc)
                ? pageDesc.map((p, idx) => <p style={descStyle} key={idx}>{p}</p>)
                : <p style={descStyle}>{pageDesc}</p>
              }
            </div>
            <div style={rightCol}>
              {rightImage &&
                <img src={rightImage} style={rightImageStyle} alt={rightImageAlt || "Content"} />
              }
            </div>
          </div>
        </div>
      </Layout>
      <div style={bottomCTAWrapper}>
        <img src={bottomImage} style={bottomImageStyle} alt="CTA" />
        <div style={bottomContentBox}>
          <span style={bottomTextStyle}>
            {bottomCtaText || 'Still not sure? Talk to us'}
          </span>
          <button
            style={bottomBtnStyle}
            onClick={onBottomCta}
          >
            {bottomCtaBtn || 'Contact Us'}
          </button>
        </div>
      </div>
      <style>
      {`
        @media (max-width: 800px) {
          .jp-columns-responsive-img {
            flex-direction: column !important;
            gap: 2.2rem !important;
          }
          .jp-columns-responsive-img > div {
            padding: 0 !important;
            min-width: 0 !important;
            width: 100% !important;
            max-width: 100vw !important;
          }
        }
        @media (max-width: 650px) {
          .jp-columns-responsive-img {
            gap: 1.2rem !important;
          }
        }
      `}
      </style>
    </>
  );
}
