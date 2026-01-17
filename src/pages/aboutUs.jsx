// Somewhere in your /pages/...
import GenericStaticPageWithImage from '../components/genericStaticPageWithImage';
import topImage from '../assets/images/page-top.jpg';
import rightImage from '../assets/images/about-us.jpg';
import bottomImage from '../assets/images/page-bottom.jpg';

export default function AboutUs() {
  return (
    <GenericStaticPageWithImage
      topImage={topImage}
      pageTitle="About Us"
      pageDesc={[
      "Over 18 years of focusing on “the customer” face to face, and providing solutions that result in customer satisfaction. Being one of the reliable market leaders, we have made high reputation in market in terms of high quality, client satisfaction and timely delivery. Our company is a blend of having a capability to make modifications in designs and specifications and of being flexible. From our establishment, our company has always laid a strong foundation of flexibility and knowledge.",
      "We have strong and dedicated team members who make sure that our products meet the particular requirement of our clients. Throughout the development and designing of our products, we consider all specifications and requirements prescribed by our clients and also implement them. To maintain flawless production, we check our products on varied parameters such as shapes, sizes and dimensional accuracy.",
      "We have been always serving our clients in a proper and efficient manner. Our company has maintained a long term relationship with our clients across the globe. Furthermore, we have made sincere attempts to discover a real solution for growth, reliability and guarantee.",
      "For our people, this means a commitment to each other to accomplish great things, build careers, and have some fun along the way!",
      <b>Overview of Services</b>,
      "- Resume Forwarding India'\nResume Forwarding International'\nPosition Finder'\nCurrent Profile Verification'\nPrevious Profile Verification'\nEducation Verification'\nJob Search Assistance'\nTop Management Services'\nE-Learning Courses'\nSharing Job opportunities via Mail and SMS.'\nBackground Verification (BGV)",
      <b>Our Philosophy</b>,
      "Our company philosophy is to serve our customers. From service levels and commitment to customer satisfaction, our mission, vision and values focus on enhancing, improving our service levels to the very best quality. Our core values are based on integrity, teamwork, respect and ownership. Our quality control division ensures that all services meet required standards, human resources and Services."
    
    ]}
      rightImage={rightImage}
      rightImageAlt="about-us"
      bottomImage={bottomImage}
      bottomCtaText="Still Not Sure?"
      bottomCtaBtn="Contact Us"
      onBottomCta={() => alert('CTA Clicked')}
    />
  );
}
