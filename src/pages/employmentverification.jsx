import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function EmploymentVerification({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Previous Employment Verification"
      pageDesc={[
        "Employers often run background checks on potential employees when they join the organization to check for their criminal records, address verification, education verification, etc. A self-background check can help alert you to identity errors in your records. It can also reassure potential clients before they take you on-board. If you are applying for a job, get a personal background check and find out instantly what employers will see when they search your background. With jobplanner.co.in Profile Verification Service, you can now have your profile credentials verified and then apply to jobs to get shortlisted by recruiters instantly. Your verified profile will also win you recruiters' trust and give you an edge over other candidates with unverified profiles. By using this service, you can sit back and relax and just focus on preparing yourself for your interview as we will take care of verifying all the certificates and documents and after positive result, mark it with authentication. This helps you get an edge over others.",
        <b>Benefits of Previous Employment Verification</b>,
        "Stand out among other candidates. Show prospective employers you’re honest. Enhance your profile visibility. Build recruiters trust on your professional achievements. Apply to desired jobs with utmost confidence. Enhance your chances of getting more interview call.",
        <b>How it works?</b>,
        "Select the service and make the payment. Show prospective employers you’re honest. Verifier verifies the product and activates the service. Service team will contact the previous employer through Mail/Phone. Verification is done by your Offer letter/ID card/Salary Slip statement provided by you. Once the reply is received we prepare the verification report and share the same with you. If there is any change, you can call us or mail us regarding the same.",        "Stand out from the rest of the applicants and attract the employers’ attention.Your application and Profile will be displayed highest on the employer’s list, so you will have a higher chance of being selected as compared to a normal application received from other candidates who have similar work experience and skills.",
    
        
      ]}
      productHeadingText="Previous Employment Verification"
      priceText="₹ 8,483.00"
      priceValue={8483}
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
