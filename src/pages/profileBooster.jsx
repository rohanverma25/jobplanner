import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function ProfileBooster({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Profile Booster"
      pageDesc={[
        "The \"Profile Booster\" is specifically built for individuals who neither have time nor the expertise to design their unique profile to make it stand out from the crowd. Based on our experience, we put together an easy-to-use and powerful methodology that creates compelling and engaging content, which addresses your clients objections, solves their challenges and completely differentiates you from the competition.",
        <b>1. Advantage of using profile booster services</b>,
        "There are millions of recruiters and the job seekers as well. But the problem for the job seekers and the recruiters is that they do not have the resources to contact to reach to each and every right recruiter and job seeker.'\nWe have the largest database of recruiters and can assist you in getting your resume in front of the recruiters. Within hours of using profile booster the recruiters will reach to you matching your best suitable interests and qualifications.",
        <b>2. Helping hand during recession</b>,
        "In a recession, there are still numerals of opportunities, but the challenge is to contact the right recruiter at the right time. By using profile booster, you can be confident enough that you will be getting best opportunity in the market, even in the recession.",
        <b>3. Service on your desk</b>,
        "At our platform, it is our task to track every single recruiter in every area of India and abroad that could possibly contact you. Though, you can do it all yourself, but it may take you several days, weeks and even months to shortlist the industries, then companies and then the correct information of the company. But we have the large and correct information of the recruiters as your all hassle is ours. We never send the resumes in bulk rather we send one resume at a time, so that it can put the right remark on the recruiter.",
        <b>4. User of Profile Booster </b>,
        "Smart professionals use Profile Booster because Profile Booster is the most efficient way to reach out to the matching recruiters with which your potentials highly match.",
        <b>5. Result / Call for Job </b>,
        "If a recruiter has an opportunity which is best suiting to your qualifications, experience, salary expectations and other factors, then you will certainly get a job. But taking our service does not mean that you will get a job, it means that your resume will float all over the market and reach to the maximum numbers of recruiter. Anyone purchasing our services may not necessarily get job because of the limited offers and maximum competition in the market.",
        "Note:- In case of any Complaint / Feedback or review kindly mail us at support@jobplanner.co.in"
        
      ]}
      productHeadingText="Profile Booster"
      priceText="₹ 55,000.00"
      priceValue={55000}
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
