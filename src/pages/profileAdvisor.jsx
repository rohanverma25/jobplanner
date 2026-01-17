import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function ProfileAdvisor({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Profile Advisor"
      pageDesc={[
        <b>The Profile Adviser stand for find a new position which is you are looking for.</b>,
        "Complete hand holding service which focuses on getting the candidate interview calls by using a tried and tested strategy developed with over 2 decades of experience. '\n Each candidate is assigned a personal expert who is focused on their industry; the expert executes the entire assistance to find a right position for the candidate over a period of 3 months.",
        "Expert with a requirement background experience to understand the candidate profile and requirement. '\nMonthly updates to be listing of position which is shared with candidate and final report will be shared after 3 months to be got understanding of delivered services.",
        "Active and relevant position links shared. Profile links searched via different sources and share with candidate for approval.",
        <b>All service will be delivered as per the availability of market.</b>,
        <b>Note: Expert will get in touch with you within 48 to 72 working hours of Order Activation.</b>
      ]}
      productHeadingText="Profile Advisor"
      priceText="₹ 12,500.00"
      priceValue={12500}
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
