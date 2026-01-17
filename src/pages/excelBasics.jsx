import GenericStaticPage from '../components/genericStaticPage';
import topImg from '../assets/images/page-top.jpg';
import bottomImg from '../assets/images/page-bottom.jpg';

export default function ExcelBasics({ onAuthClick }) {
  return (
    <GenericStaticPage
      topImage={topImg}
      pageTitle="Excel Basics"
      pageDesc={[
        "Microsoft Excel first appeared in 1985. Since then, this computerized spreadsheet has evolved, with an increasing number of features that can be very confusing for the beginner. This book will help you get started and rapidly build your skills.",
        "Filled with practical advice, Microsoft Excel Basics will guide you through the essentials of using Excel, as well as some of the more advanced features – such as creating charts or PivotTables – to help you become more proficient",
        "Every chapter has short paragraphs describing particular features within Excel and how to use them. They don’t have to be read in order, just dip into individual sections as needed.",
        <b>STEP-BY-STEP GUIDES</b>,
        "These provide clear and concise instructions on using Excel for a variety of tasks, from summarizing expenses to creating a travel mileage guide to your favourite locations.",
        <b>SIX CHAPTERS</b>,
        "This book is split into six chapters, The first explains the jargon used in Excel and gets you started using workbooks. The second covers quick and easy techniques for working with cells, as well as entering, formatting and editing your information. Chapter three has useful time-savers for dealing with large amounts of data. Chapter four covers some of the more advanced features in Excel, such as calculations in Word and creating charts as well as printing out your spreadsheets. Chapter five looks at some common problems in Excel and how to resolve them. Finally, in chapter six, discover the mobile apps available for tablets and smartphones and see how you can use Excel Online from any computer.",
        "Note:- In case of any Complaint / Feedback or review kindly mail us at support@jobplanner.co.in"
      ]}
      productHeadingText="Excel Basics"
      priceText="₹ 10,850.00"
      priceValue={10850}
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
