import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top2.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function ArbitratorID({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Arbitrator ID Coroboration"
      pageDesc={[
        "This is for Top Management Profile; we focus on your area of interest from industries to job location. We have recruiters & consultancies across different industries and locations. Your resume is sent to directly recruiters & consultancies and major headhunters. We have multiple recruitment firms as our partners. That will highlight your achievements, strengths, and elaborate work experiences, key responsibilities, loaded to employers / recruiters, so that you get maximum responses for your profile.",
        "Detailed telephonic discussion with experts to understand your profile.",
        "Make a strong impact with a compelling headline, powerful summary and keyword rich profile.",
        "Showcase your vision, core values and aspirations.",
        "Be noticed for relevant career opportunities by top recruiters.",
        "All the content for top management will be provided for the creation of strong profile and response will be depend on those content also as per market availability.",
        "Services will be delivered in 10 working days also depending upon required documents submission as per service.",
        "Note:- In case of any Complaint / Feedback or review kindly mail us at support@jobplanner.co.in"
      ]}
      productHeadingText="Arbitrator ID Coroboration"
      priceText="₹ 34,350.00"
      priceValue={34350}
      rightCtaBtn="Add to Cart"
      bottomImage={bottomImg}
      bottomCtaText="Still not sure? Talk to us"
      bottomCtaBtn="Contact Us"
      onAuthClick={onAuthClick}
      // onRightCta can be left undefined so GenericStaticPage handles Add to Cart and login
      onBottomCta={() => alert('Pop-up or redirect to Contact')}
    />
  );
}
