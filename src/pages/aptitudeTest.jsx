import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top2.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function AptitudeTest({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Aptitude Test"
      pageDesc={[
        "Psychological evaluation is sometimes used by employers as part of their evaluation process. The most commonly used tests are based around numerical, verbal and perceptual reasoning appraisal. They are typically used to.",
        "# Demonstrate your strengths in job specific areas.'\n# Assess you objectively against other candidates.'\n# Assist in assessing role suitability and career advancement potential.'\n# Find out more about your strengths and areas for development",
        <b>Listed below are a number of tips designed to help you prepare for upcoming psychological testing.</b>,
        "# Formal preparation for the assessment is not necessary, however, reading newspapers, business journals and practicing verbal problem solving exercises (eg crosswords) can help.'\n# Try to have a good nights sleep the night before and ensure you have eaten.'\n# Attempt to book a morning test time, as this is when most people are at their freshest.'\n# Give yourself plenty of time to get to the venue and if you need glasses to read or to see a computer screen remember to take them with you.'\n# Listen carefully to the instructions and do not be afraid to ask questions before you begin.'\n# During the timed tests, both accuracy and speed are important. So do not spend too much time on any one question. If you are struggling with an item, skip it and come back to it if you have time."
        
      ]}
      productHeadingText="Aptitude Test"
      priceText="₹ 52,000.00"
      priceValue={52000}
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
