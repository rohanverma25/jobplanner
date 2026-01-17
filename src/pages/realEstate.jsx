// Somewhere in your /pages/...
import GenericStaticPageWithImage from '../components/genericStaticPageWithImage';
import topImage from '../assets/images/page-top.jpg';
import rightImage from '../assets/images/other.jpg';
import bottomImage from '../assets/images/page-bottom.jpg';

export default function RealEstate() {
  return (
    <GenericStaticPageWithImage
      topImage={topImage}
      pageTitle="Real Estate"
      pageDesc={[
      "The Real Estate sector in India is largely divided into residential and commercial (retail, offices, and hospitality) categories. The overall economic conditions highly affects the performance of the Real Estate sector in India. The industry attracts huge investments and thus becoming a high-risk sector with a high cost of servicing of the debt. The relative stagnancy in the market, over the past decade, has been withdrawing, with the Real Estate prices gradually rising.",
      "The Real estate sector, however, is largely unstructured, and has a long way to go to adopt the right recruitment policies and procedures needed in a growing and professional organization. The sector is in strong need of candidates having experience in land acquisition (which is mostly localized), construction management, project management etc.",
      "At JobPlanner, we have a strong network of consultants having thorough knowledge of the market as well as the potential candidates. We develop strong ties with both of them which helps us understand the requirements from both the sides, thus mapping the right candidates with the right companies."
    
    ]}
      rightImage={rightImage}
      rightImageAlt="real-estate"
      bottomImage={bottomImage}
      bottomCtaText="Still Not Sure?"
      bottomCtaBtn="Contact Us"
      onBottomCta={() => alert('CTA Clicked')}
    />
  );
}
