const categories = [
  { name: "Accounting", open: 142, icon: "📊" },
  { name: "Finance", open: 189, icon: "💰" },
  { name: "Marketing", open: 112, icon: "📣" },
  { name: "Engineering", open: 251, icon: "🛠" },
  { name: "Design", open: 99, icon: "🎨" },
  { name: "Sales", open: 204, icon: "📞" },
  { name: "IT/Software", open: 317, icon: "💻" },
  { name: "Human Resources", open: 81, icon: "🧑‍💼" },
  { name: "Executive", open: 71, icon: "🧑‍💼" }
];

const gridContainer = {
  maxWidth: "1280px",
  width: "96%",
  margin: "3rem auto",
  background: "#fff",
  paddingBottom: "2rem"
};
const headerStyle = {
  textAlign: "center",
  fontWeight: 700,
  fontSize: "2rem",
  marginBottom: "1.1rem"
};
const subHeaderStyle = {
  textAlign: "center",
  fontSize: "1.07rem",
  color: "#269873",
  fontWeight: 500,
  marginBottom: "1.8rem"
};
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "2.1rem",
  justifyItems: "center",
  alignItems: "center"
};
const card = {
  background: "#f1f7fa",
  borderRadius: "13px",
  padding: "2rem 1.2rem",
  boxShadow: "0 2px 10px rgba(20,24,40,.09)",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "240px",
  minHeight: "132px",
  border: "2px solid transparent",
  transition: "border-color .14s"
};

export default function JobCategoryGrid({ onCategoryClick }) {
  // For 3x3 grid, pad for last row (2 boxes centered)
  const cats = categories.length === 8
    ? [...categories, { name: "", open: "", icon: "" }]
    : categories;
  return (
    <div style={gridContainer}>
      <h2 style={headerStyle} className="jp-categories-heading">Popular Job Categories</h2>
      <div style={subHeaderStyle}>3087 jobs available&nbsp;&nbsp;|&nbsp;&nbsp;324 added today</div>
      <div className="jp-category-grid" style={grid}>
        {cats.map((cat, idx) =>
          cat.name ? (
            <div
              style={card}
              key={cat.name}
              className="jp-category-card"
              onClick={() => onCategoryClick && onCategoryClick(cat.name)}
              onMouseOver={e => e.currentTarget.style.borderColor = "#0070f3"}
              onMouseOut={e => e.currentTarget.style.borderColor = "transparent"}
            >
              <span style={{ fontSize: "2.15rem", marginBottom: ".9rem" }}>{cat.icon}</span>
              <div style={{ fontWeight: 600, fontSize: "1.15rem" }}>{cat.name}</div>
              <div style={{ color: "#555", fontSize: "1rem" }}>{cat.open} Open Positions</div>
            </div>
          ) : (
            <div key={`empty-${idx}`} style={{ ...card, background: "none", boxShadow: "none", border: "none" }} />
          )
        )}
      </div>
      <style>
      {`
        @media (max-width: 1100px) {
          .jp-category-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.3rem !important;
          }
          .jp-category-card {
            min-width: 0 !important;
            width: 95% !important;
            max-width: 450px !important;
          }
        }
        @media (max-width: 800px) {
          .jp-category-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.85rem !important;
          }
          .jp-category-card {
            min-width: 0 !important;
            width: 96vw !important;
            margin: 0 auto !important;
            padding: 1.2rem 0.45rem !important;
          }
          .jp-categories-heading {
            font-size: 1.24rem !important;
          }
        }
        @media (max-width: 540px) {
          .jp-categories-heading { font-size: 1.03rem !important; }
          .jp-category-card { padding: 1rem 0.25rem !important; }
        }
      `}
      </style>
    </div>
  );
}
