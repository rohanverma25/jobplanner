import React from 'react';

// Responsive styles as JS objects (can use CSS if preferred)
const styles = {
  topImgWrapper: {
    width: '100vw',
    display: 'flex',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    position: "relative",
    background: '#fff'
  },
  topImg: {
    width: '100vw',
    height: '230px',
    objectFit: 'cover',
    display: 'block',
    margin: 0,
    border: 'none',
  },
  container: {
    maxWidth: '1280px',
    width: '96%',
    margin: '0 auto',
    background: "#fff",
    padding: '2rem 0',
    boxSizing: "border-box",
  },
  pageTitle: {
    fontSize: '2rem',
    marginBottom: '1.2rem',
    fontWeight: 800,
    color: '#222',
    textAlign: "center",
    letterSpacing: "0.01em"
  },
  section: {
    fontSize: '1.07rem',
    lineHeight: '1.7',
    color: '#222',
    margin: '1.1rem 0',
    textAlign: "justify"
  },
  bold: {
    fontWeight: 700,
    color: "#0070f3"
  }
};

export default function PolicyPage({ topImage, pageTitle, sections }) {
  return (
    <>
      <div style={styles.topImgWrapper}>
        <img src={topImage} style={styles.topImg} alt="Policy banner" />
      </div>
      <div style={styles.container}>
        <div style={styles.pageTitle}>{pageTitle}</div>
        {sections.map((section, i) =>
          <div style={styles.section} key={i}>
            {section}
          </div>
        )}
      </div>
    </>
  );
}
