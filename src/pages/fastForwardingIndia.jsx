import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function FastForwardingIndia({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Fast Forwarding India"
      pageDesc={[
        "Fast Forwarding India service, we will forward your details to top relevant recruiters & consultant in India. In addition, we also email your profile and details to relevant consultants. Once the recruiter’s requirements are found relevant to your profile, your detail is emailed to these consultants within 10 days of service activation. This relevance is the based on your Functional Area, Location, and Work experience that you specify at the time of placing your order. So you will be getting a best relevant occupation alerts according to your profile. As per the market availability.",
        "Through Fast Forwarding India service your details will be sent to several of recruiters/consultants and they in turn will contact you through the communication you have provided in your registration.",
        "We recommend that you provide both your email-id and phone number for a better reach.",
        "Your profile will be Publish to relevant recruiters within 15 working days turnaround time excluding weekends and holidays & this service valid for long life."
      ]}
      productHeadingText="Fast Forwarding India"
      priceText="₹ 5500.00"
      priceValue={5500}
      rightCtaBtn="Add to Cart"
      bottomImage={bottomImg}
      bottomCtaText="Still not sure? Talk to us"
      bottomCtaBtn="Contact Us"
      onAuthClick={onAuthClick}
      //onRightCta={() => alert('CTA clicked!')}          // Replace with real logic later
      onBottomCta={() => alert('Pop-up or redirect to Contact')}
    />
  );
}
