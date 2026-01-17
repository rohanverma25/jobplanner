// Somewhere in your /pages/...
import GenericStaticPageWithImage from '../components/genericStaticPageWithImage';
import topImage from '../assets/images/page-top.jpg';
import rightImage from '../assets/images/other.jpg';
import bottomImage from '../assets/images/page-bottom.jpg';

export default function Infrastructure() {
  return (
    <GenericStaticPageWithImage
      topImage={topImage}
      pageTitle="Infrastructure"
      pageDesc={[
      "The Infrastructure industry is a pivot that helps all other inter-related industries achieve growth in the market. The government has huge outlays planned as investments to be made in the near future towards augmenting infrastructural capabilities in India. Also, government-to-government contracts are being signed for the development of key infrastructural projects, which are large scale and requires the technical expertise of developed nations.",
      "Owing to the nature of the projects and contingencies involved, the industry has been fraught with various procedural delays that impede the development of Infrastructure. There remains an unexplored pool of extremely talented and experienced individuals in the public sector who are looking for challenging opportunities in the Infrastructure space. We, at Job Planner Consultants, have maintained professional relations with the talents in the industry who have the experience and vision of driving innovative growth in the Infrastructure sector."
    
    ]}
      rightImage={rightImage}
      rightImageAlt="infrastructure"
      bottomImage={bottomImage}
      bottomCtaText="Still Not Sure?"
      bottomCtaBtn="Contact Us"
      onBottomCta={() => alert('CTA Clicked')}
    />
  );
}
