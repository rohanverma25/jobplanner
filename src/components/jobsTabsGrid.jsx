import React, { useState } from 'react';

const locations = [
  { name: "Kolkata", icon: "🏰" }, 
  { name: "Hyderabad", icon: "🕌" },
  { name: "Delhi", icon: "🏛️" },
  { name: "Mumbai", icon: "🏙️" }
];
const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "Python", icon: "🐍" },
  { name: "Excel", icon: "📈" }
];
const roles = [
  { name: "Front-End Dev", icon: "🌐" },
  { name: "HR Manager", icon: "🤝" }
];

const gridContainer = {
  maxWidth: "1280px",
  width: "96%",
  margin: "2.5rem auto",
};

const tabRow = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "30px",
  marginBottom: "0px",
  background: "none"
};

const btnTab = selected => ({
  flex: 1,
  fontFamily: "Tahoma, Arial, sans-serif",
  fontWeight: 700,
  fontSize: "1.28rem",
  letterSpacing: "0.03em",
  padding: "1.35rem 0",
  borderRadius: "10px 10px 0 0",
  background: selected ? "#0070f3" : "#eaeefa",
  color: selected ? "#fff" : "#222",
  border: selected ? "2px solid #0070f3" : "2px solid #eaeefa",
  borderBottom: selected ? "none" : "2px solid #eaeefa",
  marginBottom: "0",
  textAlign: "center",
  cursor: "pointer",
  transition: "background .18s, color .15s",
  boxSizing: "border-box"
});

const theGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(235px, 1fr))",
  gap: "2.2rem",
  justifyItems: "center",
  alignItems: "center",
  paddingTop: "2.5rem",
  fontFamily: "Tahoma, Arial, sans-serif"
};

const tabBox = {
  background: "#f5f9fc",
  borderRadius: "11px",
  padding: "1.7rem 0.9rem",
  minWidth: "200px",
  minHeight: "120px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  fontSize: "1.14rem"
};

export default function JobsTabsGrid({ onTabClick }) {
  const [tab, setTab] = useState(0);
  const data = [locations, skills, roles];
  const tabNames = ["Jobs by Location", "Jobs by Skills", "Jobs by Roles"];

  return (
    <div style={gridContainer}>
      <div className="jp-jobs-tabrow" style={tabRow}>
        {tabNames.map((name, idx) =>
          <button
            key={name}
            className="jp-job-tab-btn"
            style={btnTab(tab === idx)}
            onClick={() => setTab(idx)}
          >
            {name}
          </button>
        )}
      </div>
      <div className="jp-jobs-tabgrid" style={theGrid}>
        {data[tab].map(item =>
          <div className="jp-job-tab-box" style={tabBox} key={item.name} onClick={() => onTabClick && onTabClick(item.name)}>
            <span style={{ fontSize: "2.3rem", marginBottom: ".8rem" }}>{item.icon}</span>
            <div style={{ fontWeight: 600, fontSize: "1.18rem" }}>{item.name}</div>
          </div>
        )}
      </div>
      <style>
        {`
        @media (max-width: 800px) {
          .jp-jobs-tabrow {
            flex-direction: column !important;
            gap: 9px !important;
            align-items: stretch !important;
          }
          .jp-job-tab-btn {
            font-size: 1.02rem !important;
            border-radius: 9px 9px 0 0 !important;
            padding: 0.7rem 0 !important;
            min-width: 0 !important;
          }
          .jp-jobs-tabgrid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.7rem !important;
            padding: 1.1rem 0 0 0 !important;
          }
          .jp-job-tab-box {
            font-size: 0.96rem !important;
            padding: 1.08rem 0.25rem !important;
            width: 98vw !important;
            min-width: 0 !important;
          }
          .jp-job-tab-box span {
            font-size: 1.51rem !important;
            margin-bottom: .44rem !important;
          }
        }
        @media (max-width: 490px) {
          .jp-job-tab-btn { font-size: 0.95rem !important; }
          .jp-jobs-tabgrid { grid-template-columns: 1fr !important; }
          .jp-job-tab-box { width: 98vw !important; }
        }
        `}
      </style>
    </div>
  );
}
