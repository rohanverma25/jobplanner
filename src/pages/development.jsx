// Somewhere in your /pages/...
import GenericStaticPageWithImage from '../components/genericStaticPageWithImage';
import topImage from '../assets/images/page-top.jpg';
import rightImage from '../assets/images/other.jpg';
import bottomImage from '../assets/images/page-bottom.jpg';

export default function Development() {
  return (
    <GenericStaticPageWithImage
      topImage={topImage}
      pageTitle="Development"
      pageDesc={[
      "The Developmental sector is a major contributor towards the creation of infrastructure and resources for social upliftment and inclusion of depressed and underprivileged communities by helping them get access to basic amenities, such as clean drinking water, roads, and medical support. The sector is growing rapidly with many multinational organizations focusing on contributing to the society. Charities, foundations, and intergovernmental organisations are the pioneers in the field of social Development. This increase in the focus of Development by critical agencies is fueling the requirement of more self-motivated individuals who would like to work in the social Development paradigm.",
      "We, at JobPlanner Consultants, have been operating across industries for decades and so are in touch with talented professionals from all backgrounds who are immensely interested in Development of the social sector. We, thus, find ourselves as the best destination for our clients in the not-for-profit sector to help them recruit talented individuals motivated to work in the social sector in the areas of fund-raising, activation, planning, events, organization, and execution."
    
    ]}
      rightImage={rightImage}
      rightImageAlt="development"
      bottomImage={bottomImage}
      bottomCtaText="Still Not Sure?"
      bottomCtaBtn="Contact Us"
      onBottomCta={() => alert('CTA Clicked')}
    />
  );
}
