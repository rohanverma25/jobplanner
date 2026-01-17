import React, { useState } from 'react';

const jobsContainer = {
  maxWidth: "1100px",
  width: "96%",
  margin: "0 auto",
  padding: "2rem 1.5rem",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
const headerStyle = {
  fontWeight: 700,
  fontSize: '2rem',
  marginBottom: '1.4rem',
  textAlign: 'center'
};
const formRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.1rem",
  width: "100%",
  marginBottom: "1rem"
};
const inputStyle = {
  padding: "0.75rem 1rem",
  borderRadius: "6px",
  border: "1.5px solid #ccc",
  fontSize: "1rem",
  minWidth: "140px"
};
const buttonStyle = {
  background: '#0070f3',
  color: '#fff',
  fontWeight: 700,
  border: 'none',
  borderRadius: '5px',
  padding: '0.85rem 1.7rem',
  fontSize: '1rem',
  cursor: 'pointer'
};

export default function JobSearchBox({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [exp, setExp] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    if (!keyword || !location || !exp) return alert('You must fill all fields.');
    if (onSearch) onSearch({ keyword, location, exp });
  };

  return (
    <div style={jobsContainer}>
      <h2 style={headerStyle}>Look for your Job here:</h2>
      <form className="jp-job-search-form" style={formRow} onSubmit={handleSearch}>
        <input
          type="text"
          style={inputStyle}
          placeholder="Keyword (e.g., Developer)"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <select style={inputStyle} value={location} onChange={e => setLocation(e.target.value)}>
          <option value="">Location</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
          <option>Kolkata</option>
          <option>Chennai</option>
          <option>Hyderabad</option>
          <option>Pune</option>
          <option>Others in India</option>
          <option>Global</option>
          <option>Remote</option>
        </select>
        <select style={inputStyle} value={exp} onChange={e => setExp(e.target.value)}>
          <option value="">Experience</option>
          <option>Fresher</option>
          <option>1-2</option>
          <option>3-5</option>
          <option>6-10</option>
          <option>10+</option>
        </select>
        <button style={buttonStyle} type="submit">Search</button>
      </form>
      <style>
        {`
        @media (max-width: 700px) {
          .jp-job-search-form {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.9rem !important;
            width: 99vw !important;
          }
          .jp-job-search-form > * {
            width: 99% !important;
            min-width: 0 !important;
            max-width: 440px !important;
            text-align: center !important;
            font-size: 1rem !important;
          }
          .jp-job-search-form button {
            min-width: 0 !important;
            width: 80% !important;
            margin: 0.6rem auto 0 auto !important;
            font-size: 1rem !important;
          }
        }
        `}
      </style>
    </div>
  );
}
