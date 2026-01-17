import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function CProgramming({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="C Programming"
      pageDesc={[
        "C is a powerful general-purpose programming language. It is fast, portable and available in all platforms. If you are new to programming, C is a good choice to start your programming journey. This is a comprehensive guide on how to get started in C programming language, why you should learn it and how you can learn it.",
        <b>What is C (Programming Language)? - The Basics</b>,
        "Before getting started with C programming, lets get familiarized with the language first. C is a general-purpose programming language used for wide range of applications from Operating systems like Windows and iOS to software that is used for creating 3D movies. C programming is highly efficient. That’s the main reason why it’s very popular despite being more than 40 years old. Standard C programs are portable. The source code written in one system works in another operating system without any change. As mentioned, it’s a good language to start learning programming. If you know C programming, you will not just understand how your program works, but will also be able to create a mental picture on how a computer works.",
        <b>History of C programming</b>,
        "C is closely associated with Unix Operating system. The PDP-11 version of Unix system was written in assembly language. Assembly languages are low-level programming languages that are specific to a particular computer architecture. They are hard to write and understand. The developers of Unix Operating system (including Dennis Ritchie and Stephen C. Johnson) decided to rewrite the system in B language. However, B couldn’t suffice some of the features of PDP-11, which led to the development of C. In 1972, the development of C started on the PDP-11 Unix system. A large part of Unix was then rewritten in C. By 1973, C was powerful enough to be used in Unix Kernel. Dennis Ritchie and Stephen C. Johnson made further changes to the language for several years to make it portable in Unix Operating system.",
        
        "Note:- In case of any Complaint / Feedback or review kindly mail us at support@jobplanner.co.in"
      ]}
      productHeadingText="C Programming"
      priceText="₹ 15,850.00"
      priceValue={15850}
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
