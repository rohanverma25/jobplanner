// Somewhere in your /pages/...
import GenericStaticPageWithImage from '../components/genericStaticPageWithImage';
import topImage from '../assets/images/page-top.jpg';
import rightImage from '../assets/images/other.jpg';
import bottomImage from '../assets/images/page-bottom.jpg';

export default function Internet() {
  return (
    <GenericStaticPageWithImage
      topImage={topImage}
      pageTitle="Internet"
      pageDesc={[
      "The e-commerce space in India has seen astounding growth in the past decade and continues to grow at an annual rate incomparable to the rest of the world. The next generation growth propellers in the e-commerce sector are the fast emerging tier-II and tier-III cities in India. Improvement of Internet connectivity, mobile phone reach, and the rise in the living standard are accelerating the tremendous growth. Banking and payment services have been the most dominant promulgators of e-commerce in India, which have seen online shopping and travel categories today attracting the highest amounts of online transaction. Expansion in Indian market is intensifying the requirement of expert talent in the e-commerce sector.",
      "We, at JobPlanner Consultants, have been operating in the Internet space since the very emergence of online platforms. Our consultants have critical insights and are in constant touch with industry leaders who have propelled transformation and innovation in the e-commerce paradigm."
    
    ]}
      rightImage={rightImage}
      rightImageAlt="internet"
      bottomImage={bottomImage}
      bottomCtaText="Still Not Sure?"
      bottomCtaBtn="Contact Us"
      onBottomCta={() => alert('CTA Clicked')}
    />
  );
}
