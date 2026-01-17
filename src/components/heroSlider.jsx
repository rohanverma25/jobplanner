import React, { useEffect, useState } from 'react';

import slider1 from '../assets/images/slider1.jpg';
//import slider2 from '../assets/images/slider2.jpg';
//import slider3 from '../assets/images/slider3.jpg';
import slider1inner from '../assets/images/slider1-inner.jpg';
import slider2inner from '../assets/images/slider2-inner.jpg';
import slider3inner from '../assets/images/slider3-inner.jpg';

const slides = [
  {
    bg: slider1,
    heading: "Digital Solutions for Modern Careers",
    sub: "Accelerate your professional success with our expert-driven platform.",
    rightImage: slider1inner
  },
  {
    bg: slider1,
    heading: "Connect with Top Employers",
    sub: "Thousands of companies are actively hiring now.",
    rightImage: slider2inner
  },
  {
    bg: slider1,
    heading: "Smart Job Search & Up-skilling",
    sub: "Find jobs, learn new skills and get hired faster.",
    rightImage: slider3inner
  }
];

const sliderStyle = {
  position: 'relative',
  width: '100vw',
  height: '430px',
  overflow: 'hidden'
};
const slideBgStyle = bg => ({
  position: 'absolute', left: 0, top: 0, width: '100vw', height: '100%',
  objectFit: 'cover', zIndex: 1, filter: 'blur(8px) brightness(0.7)', opacity: 0.8
});
const overlayStyle = {
  position: "absolute", left: 0, top: 0, width: "100vw", height: "100%",
  background: "rgba(20,30,40,0.33)", zIndex: 2
};
const contentContainer = {
  position: "relative",
  zIndex: 3,
  maxWidth: "1280px",
  width: "96%",
  margin: "0 auto",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
const leftCol = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1.5rem",
  color: "#fff",
  zIndex: 5
};
const headingStyle = {
  fontWeight: 800,
  fontSize: "2.3rem",
  marginBottom: "0.9rem"
};
const subStyle = {
  fontWeight: 400,
  fontSize: "1.25rem"
};
const rightCol = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const rightImgStyle = {
  width: "320px",
  height: "280px",
  objectFit: "cover",
  borderRadius: "30px",
  boxShadow: "0 8px 40px rgba(0,0,0,0.17)"
};
const dotsStyle = {
  position: "absolute",
  bottom: "25px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "13px",
  zIndex: 10
};
const dotStyle = selected => ({
  width: "13px",
  height: "13px",
  borderRadius: "50%",
  background: selected ? "#0070f3" : "#fff",
  border: "2px solid #0070f3"
});

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setActive(v => (v + 1) % slides.length), 4200);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div style={sliderStyle}>
      <img src={slides[active].bg} style={slideBgStyle(slides[active].bg)} alt="" />
      <div style={overlayStyle} />
      <div className="jp-hero-content" style={contentContainer}>
        <div className="jp-hero-left" style={leftCol}>
          <div className="jp-hero-heading" style={headingStyle}>
            {slides[active].heading}
          </div>
          <div className="jp-hero-sub" style={subStyle}>{slides[active].sub}</div>
        </div>
        <div className="jp-hero-right" style={rightCol}>
          <img src={slides[active].rightImage} className="jp-hero-img" style={rightImgStyle} alt="" />
        </div>
      </div>
      <div style={dotsStyle}>
        {slides.map((s, idx) => (<span key={idx} style={dotStyle(idx === active)}></span>))}
      </div>
      {/* Responsive style for mobile */}
      <style>
        {`
        @media (max-width: 800px) {
          .jp-hero-content {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            height: 100% !important;
            gap: 0.5rem !important;
            padding-top: 2.5rem !important;
            padding-bottom: 1.5rem !important;
            
          }
          .jp-hero-left {
            align-items: center !important;
            justify-content: center !important;
            gap: 0.85rem !important;
            width: 100vw !important;
            max-width: 99vw !important;
          }
          .jp-hero-heading {
            font-size: 2rem !important;
            margin-bottom: 0.3rem !important;
            text-align: center !important;
            line-height: 1.11 !important;
          }
          .jp-hero-sub {
            font-size: 1rem !important;
            text-align: center !important;
            line-height: 1.33 !important;
          }
          .jp-hero-right {
            width: 100vw !important;
            justify-content: center !important;
            align-items: center !important;
          }
          .jp-hero-img {
            width: 300px !important;
            height: 180px !important;
            max-width: 96vw !important;
            border-radius: 18px !important;
            box-shadow: 0 4px 18px rgba(0,0,0,0.11) !important;
            margin-bottom: 1rem !important;
          }
          .jp-hero-content, .jp-hero-left, .jp-hero-right {
            margin: 0 auto !important;
          }
          /* Make whole slider shorter for mobile */
          div[style*="position: relative"][style*="100vw"] {
            height: 420px !important;
            min-height: 220px !important;
          }
          /* Dots move up a bit */
          [style*="position: absolute"][style*="display: flex"][style*="left: 50%"] {
            bottom: 5px !important;
          }
        }
        @media (max-width: 400px) {
          .jp-hero-img {
            width: 175px !important;
            height: 110px !important;
          }
        }
        `}
      </style>
    </div>
  );
}
