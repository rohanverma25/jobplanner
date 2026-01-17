import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top2.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function careerEnhancer({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Career Enhancer"
      pageDesc={[
        "Save a Lot of Time applying for Vacancies and it becomes easier for Consultants to reach you Our team of experienced professionals who come from HR/Recruitment background works as your Relationship Manager. Career Enhancer where we go extra mile for candidates. This Service will provide you the personal Relationship Manager, who will help you at every step of your job seeking – right from Career Enhancer, profile optimization to company research. Career Enhancer Management is equipped to efficiently manage your job hunt so that you reach your career goals effortlessly.",
        "The Relationship Manager working with you will have interactions with you, in span of 3/6 months to start your Career Enhancer. The Relationship Manager will search for the relevant and matching job vacancies using your profile details, preferences and on the basis of market availability. Candidates can expect 4-5 JOB OPENINGS per month according to their profile within the time frame of 3/6 months. The Relationship Manager will submit applications on your behalf, once you approve the job which has been searched by him/her and your Relationship Manager will also provides the Company Profile details to you on the basis of availability. Relationship Manager will get in touch with you within 48 to 72 working hours of Order Activation.",
        <b>What if I have an academic query or I need some assistance?</b>,
        "In case of an academic query, we'll get your queries addressed from our course experts. For this, please email us on services@jobplanner.co.in"
      ]}
      productHeadingText="Career Enhancer"
      priceText="₹ 8,200.00"
      priceValue={8200}
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
