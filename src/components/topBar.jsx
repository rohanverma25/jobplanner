const topBarStyle = {
  width: '100vw',
  boxSizing: 'border-box',
  backgroundColor: '#0070f3',
  color: '#fff',
  fontWeight: '600',
  fontFamily: 'Tahoma, Arial, sans-serif',
  fontSize: '0.85rem',
  padding: '0.65rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  letterSpacing: '0.01em',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1300,
  minHeight: '40px'
};

export default function TopBar() {
  return (
    <>
      <div className="top-bar-main" style={topBarStyle}>
        Contact us now:&nbsp;
        <span style={{ fontWeight: '500', letterSpacing: '0.02em' }}>+91-87505-27008 | support@jobplanner.co.in</span>
       {/* <span style={{ fontWeight: '700', letterSpacing: '0.02em' }}>support@jobplanner.co.in</span> */}
      </div>
      <style>
        {`
        @media (max-width: 600px) {
          .top-bar-main {
            flex-direction: column;
            font-size: 0.93rem !important;
            padding: 0.67rem 0.5rem;
            text-align: center;
            min-height: 43px;
            gap: 0.25rem;
          }
        }
        `}
      </style>
    </>
  );
}
