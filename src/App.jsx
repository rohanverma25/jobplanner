import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/topBar';
import NavBar from './components/navBar';
import Footer from './components/footer';
import ScrollToTopButton from './components/scrollToTopButton';
import RequestCallbackButton from './components/requestCallback';
import AuthModal from './components/AuthModal';
import ContactModal from './components/ContactModal';
import { AuthProvider } from './authContext';
import PrivateRoute from './privateRoute';
import { CartProvider, useCart } from './cartContext';
import CartModal from './components/cartModal';
import CartSummary from './pages/cartSummary';
import PaymentModal from './components/paymentModal';
import ScrollToTop from './components/scrollToTop';

// Pages
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Catalogue from './pages/catalogue';
import JobCodePage from './pages/jobCodePage';
import FastForwardingIndia from './pages/fastForwardingIndia';
import FastForwardingInternational from './pages/fastForwardingInternational';
import CareerEnhancer from './pages/careerEnhancer';
import ContactUs from './pages/contact';
import ProfileAdvisor from './pages/profileAdvisor';
import SupremeLeadership from './pages/supremeLeadership';
import PersonalityDevelopment from './pages/personalityDevelopment';
import OpportunityConfirmation from './pages/opportunityConfirmation';
import CompletePackage from './pages/completePackage';
import AptitudeTest from './pages/aptitudeTest';
import ArbitratorID from './pages/arbitratorID';
import ProfileBooster from './pages/profileBooster';
import EducationVerification from './pages/educationVerification';
import EmploymentVerification from './pages/employmentverification';
import CurrentEmploymentVerification from './pages/currentEmploymentverification';
import ExcelBasics from './pages/excelBasics';
import Python from './pages/pythonProgramming';
import CppProgramming from './pages/cppProgramming';
import CProgramming from './pages/cProgramming';
import DigitalPortfolio from './pages/digitalPortfolio';
import Technology from './pages/technology';
import Education from './pages/education';
import Development from './pages/development';
import Healthcare from './pages/healthcare';
import Internet from './pages/internet';
import RealEstate from './pages/realEstate';
import Infrastructure from './pages/infrasructure';
import PrivacyPolicy from './pages/privacyPolicy';
import TermsAndConditions from './pages/terms&Conditions';
import RefundPolicy from './pages/refundPolicy';
import Disclaimer from './pages/disclaimer';
import Profile from './pages/profile'; // NEW 
import ProfileCompletion from './pages/ProfileCompletion';

function CartControllerWrapper({ children, onAuthClick }) {
  const [showCart, setShowCart] = useState(false);
  const { setOnAddCallback } = useCart();

  useEffect(() => {
    setOnAddCallback(() => () => setShowCart(true));
  }, [setOnAddCallback]);

  return (
    <>
      <NavBar 
        onAuthClick={onAuthClick}
        onCartClick={() => setShowCart(true)} 
      />
      <div style={{ height: '112px' }} />
      <CartModal open={showCart} onClose={() => setShowCart(false)} />
      {children}
    </>
  );
}

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const openPaymentModal = () => setShowPaymentModal(true);
  const handlePaymentSuccess = () => setShowPaymentModal(false);

  // Handler to be passed to all pages that can require auth before cart
  const handleRequireAuth = () => setShowAuthModal(true);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <TopBar />
          <CartControllerWrapper onAuthClick={handleRequireAuth} >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />

              {/* For every product/static page, pass onAuthClick */}
              <Route path="/catalogue" element={<Catalogue  />} />
              <Route path="/activate-job-code" element={<JobCodePage onAuthClick={handleRequireAuth} />} />
              <Route path="/fast-forward-india" element={<FastForwardingIndia onAuthClick={handleRequireAuth} />} />
              <Route path="/fast-forwarding-international" element={<FastForwardingInternational onAuthClick={handleRequireAuth} />} />
              <Route path="/career-enhancer" element={<CareerEnhancer onAuthClick={handleRequireAuth} />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/profile-advisor" element={<ProfileAdvisor onAuthClick={handleRequireAuth} />} />
              <Route path="/supreme-leadership" element={<SupremeLeadership onAuthClick={handleRequireAuth} />} />
              <Route path="/personality-development" element={<PersonalityDevelopment onAuthClick={handleRequireAuth} />} />
              <Route path="/opportunity-confirmation" element={<OpportunityConfirmation onAuthClick={handleRequireAuth} />} />
              <Route path="/complete-package" element={<CompletePackage onAuthClick={handleRequireAuth} />} />
              <Route path="/aptitude-test" element={<AptitudeTest onAuthClick={handleRequireAuth} />} />
              <Route path="/arbitrator-id" element={<ArbitratorID onAuthClick={handleRequireAuth} />} />
              <Route path="/profile-booster" element={<ProfileBooster onAuthClick={handleRequireAuth} />} />
              <Route path="/education-verification" element={<EducationVerification onAuthClick={handleRequireAuth} />} />
              <Route path="/employment-verification" element={<EmploymentVerification onAuthClick={handleRequireAuth} />} />
              <Route path="/current-employment-verification" element={<CurrentEmploymentVerification onAuthClick={handleRequireAuth} />} />
              <Route path="/excel-basics" element={<ExcelBasics onAuthClick={handleRequireAuth} />} />
              <Route path="/python-programming" element={<Python onAuthClick={handleRequireAuth} />} />
              <Route path="/cpp-programming" element={<CppProgramming onAuthClick={handleRequireAuth} />} />
              <Route path="/c-programming" element={<CProgramming onAuthClick={handleRequireAuth} />} />
              <Route path="/digital-portfolio" element={<DigitalPortfolio onAuthClick={handleRequireAuth} />} />
              <Route path="/technology" element={<Technology  />} />
              <Route path="/education" element={<Education  />} />
              <Route path="/development" element={<Development  />} />
              <Route path="/healthcare" element={<Healthcare  />} />
              <Route path="/internet" element={<Internet  />} />
              <Route path="/real-estate" element={<RealEstate  />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              {/* Policy/Terms pages don't need it */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/profile-completion" element={<ProfileCompletion />} />
              
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/profile" element={
                <PrivateRoute>
                  <Profile />
                  
                </PrivateRoute>
              } />
              <Route path="/cart-summary" element={<CartSummary onProceedToPay={openPaymentModal}/>} />
            </Routes>
            <Footer />
            <ScrollToTopButton />
            <RequestCallbackButton onClick={() => setShowCallbackModal(true)} />
            <ContactModal open={showCallbackModal} onClose={() => setShowCallbackModal(false)} />
            <AuthModal open={showAuthModal} onClose={() => setShowAuthModal(false)} />
            <PaymentModal
              open={showPaymentModal}
              onClose={() => setShowPaymentModal(false)}
              onOrderSuccess={handlePaymentSuccess}
            />
          </CartControllerWrapper>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
export default App;
