const container = {
  maxWidth: "1280px",
  width: "100%",
  margin: "2.5rem auto 0 auto",
  overflow: "hidden",
  background: "#fff",
  position: "relative",
  borderRadius: "8px",
  boxShadow: "0 2px 12px rgba(15,30,66,0.07)",
  minHeight: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 24px"
};
const text = {
  whiteSpace: "nowrap",
  fontSize: "1rem",
  color: "#13253e",
  fontWeight: 500,
  animation: "marquee 90s linear infinite"
};

export default function MovingDisclaimer() {
  return (
    <div style={container} className="jp-marquee-container">
      <span style={text} className="jp-marquee-text">
        jobplanner.co.in does not guarantee any interview/meeting/discussion with any employer basis any amount of initial monetary payment by the JobPlanner. JobPlanner.co.in is not responsible for any frivolous email, sms or phone call by any fraudulent person pretending to be part of JobPlanner.co.in. Any communication from official domain of JobPlanner.co.in shall only be considered as genuine. Jobseekers are advised not to indulge in any monetary engagement with any source in the name of guaranteed interviews with employers.
      </span>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          @media (max-width: 800px) {
            .jp-marquee-container {
              min-height: 36px !important;
              padding: 0 4vw !important;
              border-radius: 6px !important;
              margin: 1.2rem 0 0 0 !important;
            }
            .jp-marquee-text {
              font-size: 0.85rem !important;
              font-weight: 500 !important;
              animation-duration: 55s !important;
            }
          }
          @media (max-width: 480px) {
            .jp-marquee-container {
              min-height: 30px !important;
              padding: 0 2vw !important;
              border-radius: 5px !important;
              margin: 1rem 0 0 0 !important;
            }
            .jp-marquee-text {
              font-size: 0.75rem !important;
              animation-duration: 40s !important;
            }
          }
        `}
      </style>
    </div>
  );
}
