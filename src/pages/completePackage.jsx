import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function CompletePackage({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Complete Package"
      pageDesc={[
        "Priority Application is a unique service offered by us, When you subscribe to this service, your Profile will be highlighted as a Priority Application and your application will automatically be moved to the top of the Applicants List for that job. Therefore, higher the scope for getting selected for the job, as this a great service for many International job applications.",
        "Job seekers who use the services of a recruitment firm are better prepared for job interviews and have the inside scoop about the company, as well as the expected skills and the intangibles that the hiring manager desires in a candidate.",
        "Because your recruiter has probably worked with the hiring manager and the company on prior placements, your recruiter will very likely know specific questions and/or topics your interviewers will ask once you speak with them.  Think of it like knowing the exam questions prior to taking the test.",
        "Stand out from the rest of the applicants and attract the employers’ attention.Your application and Profile will be displayed highest on the employer’s list, so you will have a higher chance of being selected as compared to a normal application received from other candidates who have similar work experience and skills.",
        "The employer will note that you are a serious candidate."
        
      ]}
      productHeadingText="Complete Package"
      priceText="₹ 95,000.00"
      priceValue={95000}
      rightCtaBtn="Buy Now"
      bottomImage={bottomImg}
      bottomCtaText="Still not sure? Talk to us"
      bottomCtaBtn="Contact Us"
      onAuthClick={onAuthClick}
      //onRightCta={() => alert('CTA clicked!')}          // Replace with real logic later
      onBottomCta={() => alert('Pop-up or redirect to Contact')}
    />
  );
}
