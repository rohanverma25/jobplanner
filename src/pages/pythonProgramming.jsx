import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function Python({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Python Programming"
      pageDesc={[
        "The Python programming language was created by Dutchman Guido van Rossum in the late 1980s. Python is a widely used, general-purpose, high-level programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than would be possible in languages such as C. The language provides constructs intended to enable clear programs on both a small and large scale. If you choose to learn Python as your first or your 15th programming language, you are making an excellent choice.",
        <b>Best Things about Python</b>,
        "Programs are not cluttered up with braces ({…}) and semicolons (;). Python implements structure using indentation (white space) rather than punctuation. The Python keywords are powerful, limited in number, and dowhat you expect them to do. If you can’t work out a way to do something in your code, there is always a library somewhere that does it for you. You can get an awful lot done with a limited knowledge of the language’",
        <b>Online Courses</b>,
        "In our first chapter you learn how to use the Python Interactive Interpreter. You will see how easy it is to Execute a Script in Python. Python differs from other programming languages in many ways, but the most striking one is obviously it's \"Structuring with Indentation\". Variables are easier to be used than in many other programming languages but still there are some things to point out about \"Data Types and Variables\". Though operators are more or less the same as in other languages, we have to cover them anyway. Assignments can be quite tricky in Python. When will an object be copied and when will we just have a reference? What's the difference between a shallow and a deep copy? Conditional statements are straightforward in Python The same is true for the while loops, but there is this special \"else\" part. The for loops seem to be quite strange if you are used to C but easy if you know the bash shell. The different ways to format data. In this chapter of our course we will have a closer look at sequential data types. Dictionaries are one of the best things Python has to offer. It's possible to use sets in Pythons programs as well: We cover both sets and frozensets. Programming without functions would be like cooking without salt and spices. And a very special spice for your \"cooking\" can be a recursive function. To understand functions properly, you need a thorough understanding of arguments and parameter passing (in Python3). In the next chapter of our seminar you will find all you have to know about namespaces.",
       
        "Note:- In case of any Complaint / Feedback or review kindly mail us at support@jobplanner.co.in"
      ]}
      productHeadingText="Python Programming"
      priceText="₹ 12,850.00"
      priceValue={12850}
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
