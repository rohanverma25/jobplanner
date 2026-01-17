import React, { useState } from 'react';

import HeroSlider from '../components/heroSlider';
import MovingDisclaimer from '../components/movingDisclaimer';
import JobSearchBox from '../components/jobSearchBox';
import LogoCarousel from '../components/logoCarousel';
import JobCategoryGrid from '../components/jobCategoryGrid';
import JobsTabsGrid from '../components/jobsTabsGrid';
import HomeBottomCTA from '../components/HomeBottomCTA';
import AuthModal from '../components/AuthModal';
import ContactModal from '../components/ContactModal';

export default function Home({ isLoggedIn, setIsLoggedIn }) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // For all protected actions (search, categories, upload CV)
  const onProtectedAction = (action) =>
    isLoggedIn ? action && action() : setShowAuthModal(true);

  return (
    <>
      <HeroSlider />
      <MovingDisclaimer />
      <JobSearchBox onSearch={() => onProtectedAction()} />
      <div style={{ marginTop: "2.5rem" }}>
       {/* <h2 style={{ maxWidth: "100vw", width: "100%", margin: "0 auto", padding: "30px 0 30px 0", fontWeight: 700, fontSize: "2rem", textAlign: "center", backgroundColor:"#ecf8f2"}}>
          10k+ Companies are looking for New hires..
        </h2>*/}
        <LogoCarousel />
      </div>
      <JobCategoryGrid onCategoryClick={() => onProtectedAction()} />
      <JobsTabsGrid onTabClick={() => onProtectedAction()} />
      <HomeBottomCTA
        onUploadCV={() => onProtectedAction()}
        onContactClick={() => setShowContactModal(true)}
      />
      <AuthModal open={showAuthModal} onClose={() => setShowAuthModal(false)} onAuthSuccess={() => setIsLoggedIn(true)} />
      <ContactModal open={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  );
}
