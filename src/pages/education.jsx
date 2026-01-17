// Somewhere in your /pages/...
import GenericStaticPageWithImage from '../components/genericStaticPageWithImage';
import topImage from '../assets/images/page-top.jpg';
import rightImage from '../assets/images/other.jpg';
import bottomImage from '../assets/images/page-bottom.jpg';

export default function Education() {
  return (
    <GenericStaticPageWithImage
      topImage={topImage}
      pageTitle="Education"
      pageDesc={[
      "India currently has one of the largest higher Education systems in the world and has become the second largest market for e-learning. The Education sector has been witnessing a paradigm shift, driven by digitization. Once regarded as a philanthropic activity, it has now transformed into an ‘industry’ on its own. With India close to hosting the world’s largest tertiary- age population in the world, the growth prospects for the Education sector is unbound.",
      "At JobPlanner.co.in, we understand, human resource plays a foremost role in this sector. Our team understands that the increasing number of schools, colleges and universities require fresh talent and innovative leadership strategies to sustain in this changing environment. With an in-depth understanding of the sector, ABC’s consultants have the ability to deliver results across the entire Education realm."
    
    ]}
      rightImage={rightImage}
      rightImageAlt="education"
      bottomImage={bottomImage}
      bottomCtaText="Still Not Sure?"
      bottomCtaBtn="Contact Us"
      onBottomCta={() => alert('CTA Clicked')}
    />
  );
}
