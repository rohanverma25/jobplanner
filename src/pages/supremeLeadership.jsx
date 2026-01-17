import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function SupremeLeadership({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Supreme Leadership"
      pageDesc={[
        <b>The Supreme Leadership stand for find a new top most which is you are looking for.</b>,
        "In Supreme Leadership, we focus on your area of interest from industries to job location. We have recruiters & consultancies across different industries and locations. Your resume is sent to directly recruiters & consultancies and major headhunters. We have multiple recruitment firms as our partners. That will highlight your achievements, strengths, and elaborate work experiences, key responsibilities, loaded to employers / recruiters, so that you get maximum responses for your .",
        "Make a strong impact with a compelling headline, powerful summary and keyword rich. '\nShowcase your vision, core values and aspirations. '\nBe noticed for relevant career opportunities by top recruit.",
        "All the content for Supreme Leadership will be provided for the creation of strong and response will be depend on that content also as per market availability.",
        <b>Services will be delivered in 10 working days also depending upon required documents submission as per service.</b>
      ]}
      productHeadingText="Supreme Leadership"
      priceText="₹ 28,500.00"
      priceValue={28500}
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
