import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function DigitalPortfolio({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Digital Portfolio"
      pageDesc={[
        "Employers are increasingly searching for candidates on the web, so establishing on the web is a crucial need which gives you an edge over other candidates applying for the job. Having a personal portfolio website on your name is better than showing the old boring resume.",
        "Many predict that the printed resume will be soon regarded as old fashioned and digital resume is the future. It is true that there are tons of online profiles like Twitter, Google+, Facebook, LinkedIn etc. you can create to assert your online presence. However, every one of them has their limitations on the format, amount of data, design, etc. Every profile may look similar too which makes it very difficult to stand out from the crowd.",
        "Have you noticed that nearly every one of them would allow you to add your own URL to the online profile? Building your own website circumvents the limitation. You can literally have it your way!",
        "Nowadays, prospective employers and recruitment agency take advantages of the internet to do the initial search for job applicants’ information. They want to know more about the applicants, their skills, passion and life. Having a great website will greatly increase the chance of being selected for an in-depth interview.",
        "Passion and knowledge are two pillars for you to succeed in your career. It is also the traits most sought after by employers. Your website provides the best platform for you to show would-be employers the topics that interest you. You can create your true brand through the topics you chose, the style of writing, the design and usability of the website.",
      
        "Note:- In case of any Complaint / Feedback or review kindly mail us at support@jobplanner.co.in"
      ]}
      productHeadingText="Digital Portfolio"
      priceText="₹ 41,850.00"
      priceValue={41850}
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
