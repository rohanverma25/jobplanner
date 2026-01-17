// Somewhere in your /pages/...
import GenericStaticPageWithImage from '../components/genericStaticPageWithImage';
import topImage from '../assets/images/page-top.jpg';
import rightImage from '../assets/images/other.jpg';
import bottomImage from '../assets/images/page-bottom.jpg';

export default function Healthcare() {
  return (
    <GenericStaticPageWithImage
      topImage={topImage}
      pageTitle="Healthcare"
      pageDesc={[
      "The per capita expenditure on Healthcare in India is continuously on a rise owing to greater awareness and better affordability. India has also become a favoured destination for medical tourism globally as it offers specialised services at very affordable cost by major hospitals housing specialist facilities for treatment for all diseases under one roof. The private sector are growing multifold to complement the government’s expenditure, which remains largely subsidised. The fast pace of expansion in the sector has been fuelling the demand for skilled Healthcare experts and technicians in the industry. We, at ABC Consultants, understand the growing demand for skilled experts and key individuals and so have maintained industry contacts with the right talent to meet the specific human resource needs of our clients.",
      "Word of Mouth is a critical driver of talent in this industry. We have consultants having a strong network with employees working in different companies across various levels. These employees are our best ambassadors, thus making colleague referrals an important source of talent. Job Planner focuses on the right-fit model; with a robust evaluation procedure conducted by our specialist consultants, and a strong reference checks procedure to source the best talent."
    
    ]}
      rightImage={rightImage}
      rightImageAlt="healthcare"
      bottomImage={bottomImage}
      bottomCtaText="Still Not Sure?"
      bottomCtaBtn="Contact Us"
      onBottomCta={() => alert('CTA Clicked')}
    />
  );
}
