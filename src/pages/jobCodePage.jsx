import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function JobCodePage({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Activate Your Job Code"
      pageDesc={[
        "A counter offer can be a delicate situation and requires careful consideration with thousands of recruiters we have the job find assistance for you in which the resume counselor enhances your profile and the job search advisor provides you the greater visibility and support. Our team will support you to get the relevant jobs according to your qualification as well as your work experience.",
        "Candidates can expect 4-5 job option per month according to your profile within the time frame of 3/6/12 months. As per the market availabilities.",
        "The Relationship Manager will enhance your profile chances to get shortlisted for the job vacancies.",
        "The Relationship Manager search for the relevant and matching job vacancies using your profile details.",
        "Save a Lot of Time applying for Vacancies and it becomes easier for Consultants to reach you Our team of experienced professionals who come from HR/Recruitment background works as your Relationship Manager. Job Search Assistant where we go extra mile for candidates. This Service will provide you the personal Relationship Manager, who will help you at every step of your job seeking � right from Job Search, profile optimization to company research. Job Search Management is equipped to efficiently manage your job hunt so that you reach your career goals effortlessly. The Relationship Manager working with you will have interactions with you, in span of 3/6 months to start your job search. The Relationship Manager will search for the relevant and matching job vacancies using your profile details, preferences and on the basis of market availability. Candidates can expect 4-5 JOB OPENINGS per month according to their profile within the time frame . The Relationship Manager will submit applications on your behalf, once you approve the job which has been searched by him/her and your Relationship Manager will also provides the Company Profile details to you on the basis of availability. Relationship Manager will get in touch with you within 48 to 72 working hours of Order Activation.",
        "It is a good idea to list the pros and cons for each opportunity and discuss these with someone whose opinion you value.",
        "There are always some risks in going into a new position with a new organisation, however, there are also risks in accepting a counter offer. Recent surveys have shown that over 80% of people who accept counter offers leave their employer within 6 months of that counter offer. Depending upon the relationship you have with your manager and/or management team, and the corporate culture (values, attitudes, etc.) at your present company, accepting a counter offer could change how you are viewed. There is the possibility of being seen as disloyal, and if the outside offer came at a very crucial time -say, when losing you would have been disastrous to a vital project or the bottom line - you may cause some animosity if the employer feels there is no choice but to counter offer to keep you on board. These feelings could pass in time, but it is also possible for you to be targeted for replacement (or passed over for promotion, important projects, etc.) at a time when it is more convenient for your current employer.",
        "Remember, accepting a counter offer assumes you have not yet accepted the offer from the new employer, and your current employer, learning of your consideration of the offer, makes you a counter offer. If you have already accepted an offer from the new employer, it is often considered somewhat unethical to withdraw your acceptance based upon a counter offer from your current employer.",
        "In the end, after weighing all the factors and perhaps discussing them with family members, close friends or a mentor, you will need to make a decision. Ultimately, you need to do what is in your best short and long-term interests. And usually, what is appropriate for one party is appropriate for both parties concerned - even if not always apparent at first.",
        "Note:- In case of any Complaint / Feedback or review kindly mail us at support@jobplanner.co.in"
      ]}
      productHeadingText="Activate Your Job Code"
      priceText="₹ 85,000.00"
      priceValue={85000}
      rightCtaBtn="Add to Cart"
      bottomImage={bottomImg}
      bottomCtaText="Still not sure? Talk to us"
      bottomCtaBtn="Contact Us"
      onAuthClick={onAuthClick}
      //onRightCta={() => alert('CTA clicked!')}          // Replace with real logic later
      onBottomCta={() => alert('Pop-up or redirect to Contact')}
    />
  );
}
