import React, { useEffect, useState } from 'react';
import logo1 from '../assets/logos/company1.png';
import logo2 from '../assets/logos/company2.png';
import logo3 from '../assets/logos/company3.png';
import logo4 from '../assets/logos/company4.png';
import logo5 from '../assets/logos/company5.png';
import logo6 from '../assets/logos/company6.png';
import logo7 from '../assets/logos/company7.png';
import logo8 from '../assets/logos/company8.png';
import logo9 from '../assets/logos/company9.png';
import logo10 from '../assets/logos/company10.png';
import logo11 from '../assets/logos/company11.png';
import logo12 from '../assets/logos/company12.png';
import logo13 from '../assets/logos/company13.png';
import logo14 from '../assets/logos/company14.png';
import logo15 from '../assets/logos/company15.png';
import logo16 from '../assets/logos/company16.png';
import logo17 from '../assets/logos/company17.png';
import logo18 from '../assets/logos/company18.png';
import logo19 from '../assets/logos/company19.png';

const allLogos = [
  logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,
  logo11,logo12,logo13,logo14,logo15,logo16,logo17,logo18,logo19,
];

const bgStyle = {
  background: "#ecf8f2",
  padding: "1rem 0 0.5rem 0",
  margin: "0 auto"
};
const containerStyle = {
  maxWidth: "1280px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
const headingStyle = {
  fontWeight: 800,
  fontSize: "2.2rem",
  textAlign: "center",
  color: "#212",
  margin: "0 0 0.6rem 0",
  letterSpacing: "0.01em"
};
const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0.3rem 0',
  gap: "0px",
  width: "100%"
};
const logoImgStyle = {
  height: "84px",
  width: "auto",
  maxWidth: "180px",
  objectFit: "contain",
  filter: "drop-shadow(0 2px 7px rgba(50,60,120,0.09))",
  flex: "1 1 0",
  margin: "0 8px"
};

export default function LogoCarousel() {
  const [offset, setOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const timer = setInterval(() => setOffset(o => (o + 1) % allLogos.length), 2000);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Adjust number of logos per row responsively
  let logosPerRow;
  if (windowWidth <= 500) logosPerRow = 2;
  else if (windowWidth <= 700) logosPerRow = 3;
  else if (windowWidth <= 1050) logosPerRow = 4;
  else logosPerRow = 6;

  const rowsCount = windowWidth <= 700 ? 2 : 2; // always two rows for consistency
  const rowLogos = [];
  for (let row = 0; row < rowsCount; ++row) {
    rowLogos.push(
      Array.from(
        { length: logosPerRow },
        (_, i) => allLogos[(offset + row * logosPerRow + i) % allLogos.length]
      )
    );
  }

  return (
    <div style={bgStyle}>
      <div style={containerStyle}>
        <div className="logo-carousel-heading" style={headingStyle}>
          10k+ Companies are looking for New hires.
        </div>
        {rowLogos.map((row, idx) => (
          <div key={idx} className="logo-row-responsive" style={rowStyle}>
            {row.map((logo, i) => (
              <img key={i} src={logo} className="logo-carousel-img" alt="" style={logoImgStyle} />
            ))}
          </div>
        ))}
      </div>
      <style>
        {`
          @media (max-width: 1050px) {
            .logo-carousel-img {
              height: 64px !important;
              margin: 0 5px !important;
              max-width: 110px !important;
            }
            .logo-row-responsive {
              gap: 0 !important;
            }
          }
          @media (max-width: 700px) {
            .logo-carousel-heading {
              font-size: 2rem !important;
              padding: 0.1rem 0 !important;
            }
            .logo-carousel-img {
              height: 54px !important;
              max-width: 96vw !important;
              min-width: 0 !important;
              margin: 0 3px !important;
            }
            .logo-row-responsive {
              gap: 0px !important;
            }
          }
          @media (max-width: 500px) {
            .logo-carousel-heading {
              font-size: 1.5rem !important;
              line-height: 1.1 !important;
              padding: 0 !important;
            }
            .logo-carousel-img {
              height: 50px !important;
              max-width: 50vw !important;
              margin: 0 1px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
