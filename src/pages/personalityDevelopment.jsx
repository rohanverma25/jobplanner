import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function PersonalityDevelopment({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Personality Development"
      pageDesc={[
        <b>Tips for Personality Development</b>,
        "Personality development cannot happen in a day. It happens over time. There are multiple characteristics which need to be worked on while developing ones personality. Here are some tips for enhancing the typical characteristics and attributes which add to an individual`s overall personality:",
        <b>Be Confident</b>,
        "Your confidence reflects your character, attitude and passion. You should be confident about who you are and whatever you do. Being confident will help you to express yourself and stand amongst the crowd.",
        <b>Improve Your Communication Skills</b>,
        "The way you speak reflects who you are. Be polite and gentle with your words. Use decent words while interacting with everyone. Always think before you speak. English being globally accepted is preferred everywhere.",
        <b>Dress Up Well </b>,
        "Dressing sense means the general sense about how you should dress up for interview. Dressing sense thus plays a major role in personality and confidence development.",
        <b>Watch Your Body Language </b>,
        "Body language plays an important role to judge a persons confidence and personality. Try to make use of positive gestures while interacting with others. This shows that you`re at ease while having a discussion.",
        <b>Be Optimistic</b>,
        "Have a positive outlook towards everything. Nobody wants to be around a person who is negative and complaining all the time.",
        <b>Be a Patient Listener</b>,
        "Be an enthusiastic listener. Listening is a very essential part of communication. This will help you to see things from the eyes of others. Mental presence is a must to be good listener."
        
      ]}
      productHeadingText="Personality Development"
      priceText="₹ 75,000.00"
      priceValue={75000}
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
