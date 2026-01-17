import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function OpportunityConfirmation({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Opportunity Confirmation"
      pageDesc={[
        <b>1. Research the organization</b>,
        " - This will help you answer questions – and stand out from less-prepared candidates.'\n - Seek background information.'\n - Use tools like Vault, CareerSearch or The Riley Guide for an overview of the organization and its industry profile.'\n - Visit the organizations website to ensure that you understand the breadth of what they do.'\n - Review the organizations background and mission statement.'\n - Assess their products, services and client-base.'\n - Read recent press releases for insight on projected growth and stability.'\n - Get perspective. Review trade or business publications. Seek perspective and a glimpse into their industry standing.'\n - Develop a question list. Prepare to ask about the organization or position based on your research.",
        <b>2. Compare your skills and qualifications to the job requirements.</b>,
        "Analyze the job description. Outline the knowledge, skills and abilities required.'\n - Examine the hierarchy. Determine where the position fits within the organization.'\n - Look side-by-side. Compare what the employer is seeking to your qualifications.",
        <b>3. Prepare responses</b>,
        "- Most interviews involve a combination of resume-based, behavioral and case questions. We encourage you to meet with us to practice telling your story in the best possible way.",
        <b>4. Plan what to wear.</b>,
        "- Go neutral. Conservative business attire, such as a neutral-colored suit and professional shoes, is best.'\n - Err formal. If instructed to dress “business casual,” use good judgment.'\n - Plug in that iron. Make sure your clothes are neat and wrinkle-free.'\n - Dress to impress. Be sure that your overall appearance is neat and clean.",
        <b>5. Plan what to bring</b>,
        "- Extra copies of your resume on quality paper.'\n -A list of references'\n - Information you might need to complete an application'\n - A portfolio with samples of your work, if relevant",
        <b>6. Pay attention to non-verbal communication</b>,
        "- Be mindful. Nonverbal communication speaks volumes.'\n - Start ahead. Remember that waiting room behaviors may be reported.'\n - Project confidence. Smile, establish eye contact and use a firm handshake.'\n - Posture counts. Sit up straight yet comfortably. Be aware of nervous gestures such as foot-tapping.'\n - Be attentive. Do not stare, but maintain good eye contact, while addressing all aspects of an interviewers questions.'\n - Respect their space. Do not place anything on their desk.'\n - Manage reactions. Facial expressions provide clues to your feelings. Manage how you react, and project a positive image.",
        <b>7. Follow up</b>,
        "-Many interviews end with “Do you have any questions?”'\n - Bring a list. You may say, “In preparing for todays meeting, I took some time to jot down a few questions. Please allow me to review my notes.”'\n - Be strategic. Cover information not discussed or clarify a previous topic – do not ask for information that can be found on the organizations website.'\n - In your opinion, what makes this organization a great place to work?'\n - What do you consider the most important criteria for success in this job?'\n - Tell me about the organizations culture.'\n - How will my performance be evaluated?'\n - What are the opportunities for advancement?'\n - What are the next steps in the hiring process?"
        
      ]}
      productHeadingText="Opportunity Confirmation"
      priceText="₹ 57,000.00"
      priceValue={57000}
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
