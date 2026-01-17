// Somewhere in your /pages/...
import GenericStaticPageWithImage from '../components/genericStaticPageWithImage';
import topImage from '../assets/images/page-top.jpg';
import rightImage from '../assets/images/other.jpg';
import bottomImage from '../assets/images/page-bottom.jpg';

export default function Technology() {
  return (
    <GenericStaticPageWithImage
      topImage={topImage}
      pageTitle="Technology"
      pageDesc={[
      "The expanding Technological landscape in India has led to innovations in computer processing speeds, data storage, chip design, big data analytics, cloud computing and introduced to us the Internet of Things. These developments have radically changed sociological and behavioral patterns of millions of Indians and with it, of thousands of its businesses. This has led to rapid growth and the need to quickly find the appropriate talent for developing and securing the Technological space for unhindered and seamless delivery of its various services.",
      "In an arena of such intense activity, finding the right candidate to fulfill the job roles at our client’s ends becomes our responsibility.",
      "Our expertise in various Technology segments including IT products, IT services, helps us in analysing the ever-changing needs of the Technology industry and seeks the best talent for pivotal roles. We believe in driving change for both established as well as emerging Tech providers. As one of the pioneers in the recruitment industry in India, we are credited with securing placement for some of the most eminent leaders at the most respectable positions across the industry."
    ]}
      rightImage={rightImage}
      rightImageAlt="Technology"
      bottomImage={bottomImage}
      bottomCtaText="Still Not Sure?"
      bottomCtaBtn="Contact Us"
      onBottomCta={() => alert('CTA Clicked')}
    />
  );
}
