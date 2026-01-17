import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// Data
const expertisePages = [
  { label: "Technology", to: "/technology" },
  { label: "Education", to: "/education" },
  { label: "Development", to: "/development" },
  { label: "Healthcare", to: "/healthcare" },
  { label: "Internet", to: "/internet" },
  { label: "Real Estate", to: "/real-estate" },
  { label: "Infrastructure", to: "/infrastructure" },
];
const usefulLinks = [
  { label: "About Us", to: "/about" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Profile completion", to: "/profile-completion" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Refund Policy", to: "/refund-policy" },
  // { label: "Disclaimer", to: "/disclaimer" },
  
  { label: "Contact Us", to: "/contact" },
];

const styles = {
  wrapper: {
    width: '100vw',
    background: '#222a33',
    color: '#fff',
    marginTop: '0',
    fontFamily: 'Tahoma, Arial, sans-serif',
    boxSizing: 'border-box',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '2rem 0 1rem 0',
    maxWidth: '1280px',
    width: '96%',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minWidth: '210px',
    marginBottom: '1.1rem',
  },
  rightCols: {
    display: 'flex',
    flexDirection: 'row',
    gap: '7rem',
    justifyContent: 'flex-end',
    width: '60%',
    flexWrap: 'wrap',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.3rem',
    minWidth: '150px',
    marginBottom: '1.1rem',
  },
  header: {
    fontWeight: '700',
    marginBottom: '0.5rem',
    fontSize: '1.2rem',
    color: '#ffd700',
    alignSelf: 'flex-end',
  },
  logo: {
    fontWeight: '900',
    fontSize: '1.5rem',
    color: '#fca311',
    letterSpacing: '0.07em',
    marginBottom: '0.15rem',
  },
  tagline: {
    fontWeight: '400',
    fontSize: '1rem',
    color: '#e2e8f0',
    marginBottom: '0.25rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    margin: '0.15rem 0',
    fontWeight: '400',
    transition: 'color 0.15s',
    alignSelf: 'flex-end',
  },
  linkActive: {
    color: '#fca311'
  },
  bottom: {
    width: '100%',
    padding: '1rem 0',
    background: '#1a1f29',
    textAlign: 'center',
    fontSize: '1rem',
    color: '#fff',
    letterSpacing: '0.02em',
  }
};

export default function Footer() {
  return (
    <footer style={styles.wrapper}>
      <div className="footer-top" style={styles.top}>
        <div className="footer-leftCol" style={styles.leftCol}>
          <span className="footer-logo-box" style={{ display: 'flex', alignItems: 'center', gap: '0.42rem' }}>
            <img src={logo} alt="JobPlanner Logo" className="footer-logo-img" style={{ height: 80, width: 75, objectFit: 'contain' }} />
            <span style={styles.logo}>JobPlanner</span>
          </span>
          <span className="footer-tagline" style={styles.tagline}>Accelerate your career, simplify your hiring</span>
        </div>
        <div className="footer-rightCols" style={styles.rightCols}>
          <div className="footer-col" style={styles.col}>
            <span className="footer-header" style={styles.header}>Our Expertise</span>
            {expertisePages.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                style={styles.link}
                className="footer-link"
                onMouseOver={e => (e.currentTarget.style.color = '#fca311')}
                onMouseOut={e => (e.currentTarget.style.color = '#fff')}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="footer-col" style={styles.col}>
            <span className="footer-header" style={styles.header}>Useful Links</span>
            {usefulLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                style={styles.link}
                className="footer-link"
                onMouseOver={e => (e.currentTarget.style.color = '#fca311')}
                onMouseOut={e => (e.currentTarget.style.color = '#fff')}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div style={styles.bottom}>
        © 2025 JobPlanner.co.in | All Rights Reserved.
      </div>
      <style>
        {`
        @media (max-width: 900px) {
          .footer-top {
            flex-direction: column;
            align-items: center !important;
            gap: 2.2rem;
          }
        }
        @media (max-width: 800px) {
          .footer-top {
            flex-direction: column !important;
            align-items: center !important;
            gap: 2.6rem !important;
            justify-content: center !important;
            text-align: center !important;
            padding: 1.7rem 0 0.7rem 0 !important;
          }
          .footer-leftCol,
          .footer-logo-box,
          .footer-rightCols,
          .footer-col,
          .footer-tagline,
          .footer-header,
          .footer-link {
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            min-width: 0 !important;
            width: 100% !important;
            margin: 0 auto 1rem auto !important;
            gap: 0.45rem !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .footer-logo-img {
            margin-left: auto; margin-right: auto;
            display: block !important;
          }
        }
        @media (max-width: 600px) {
          .footer-top { gap: 2.9rem !important; padding: 1.3rem 0 0.5rem 0 !important;}
          .footer-col { gap: 0.39rem !important; }
          .footer-logo-img {
            height: 62px !important; width: 56px !important;
          }
        }
        `}
      </style>
    </footer>
  );
}
