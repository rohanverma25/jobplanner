import React from 'react';

const layoutStyles = {
  wrapper: {
    width: '100vw',
    minHeight: 'calc(100vh - 134px)', // header + footer
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',    // <- set to white by default
  },
  container: {
    margin: '0 auto',
    maxWidth: '1280px',
    width: '96%',
    padding: '2rem 0',
    boxSizing: 'border-box',
  },
};

export default function Layout({ children, bgColor }) {
  return (
    <main style={{ ...layoutStyles.wrapper, backgroundColor: bgColor || layoutStyles.wrapper.backgroundColor }}>
      <div style={layoutStyles.container}>{children}</div>
    </main>
  );
}
