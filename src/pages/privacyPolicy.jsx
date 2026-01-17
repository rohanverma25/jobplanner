import PolicyPage from '../components/policyPage';
import topImage from '../assets/images/page-bottom.jpg';

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      topImage={topImage}
      pageTitle="Privacy Policy"
      sections={[
      /*  <>
          <span style={{fontWeight:700}}>Last Updated:</span> November 25, 2025
        </>,*/
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>1. Information We Collect</span>
        </>,
        <>
          <p style={{marginBottom: '0.5rem', lineHeight: '1.6'}}>
            When ordering, registering, or using our services, you may be asked to provide:
          </p>
          <ul style={{marginLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8'}}>
            <li>Full name and contact information (email, phone number, mailing address)</li>
            <li>Billing and shipping address information</li>
            <li>Professional and employment details</li>
            <li>Educational background and qualifications</li>
            <li>Payment information for services</li>
            <li>Profile information and preferences</li>
            <li>Communications and feedback you provide to us</li>
            <li>Usage data and interaction patterns on our platform</li>
          </ul>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>2. How We Use Your Information</span>
        </>,
        <>
          <p style={{marginBottom: '0.5rem', lineHeight: '1.6'}}>
            We use the information we collect in the following ways:
          </p>
          <ul style={{marginLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8'}}>
            <li>To personalize your experience and deliver tailored services</li>
            <li>To process transactions and send related confirmations</li>
            <li>To follow up with you regarding your services or inquiries</li>
            <li>To send periodic emails regarding your account or services</li>
            <li>To improve our website, apps, and service offerings</li>
            <li>To monitor and analyze usage trends and platform performance</li>
            <li>To comply with legal and regulatory requirements</li>
            <li>To prevent fraudulent activity and enhance security</li>
            <li>To provide customer support and respond to your requests</li>
          </ul>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>3. Protection of Your Information</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. Additionally, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology. We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information. Our commitment to data security includes regular security audits, encryption protocols, and adherence to industry best practices.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>4. Do We Use Cookies?</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>5. Third-Party Disclosure</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>6. Third-Party Links</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>7. California Online Privacy Protection Act Compliance</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            Because we value your privacy, we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent. As part of the California Online Privacy Protection Act, all users of our site may make any changes to their information at any time by logging into their account control panel and updating their profile information.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>8. Children's Online Privacy Protection Act Compliance</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            Our website is directed to and intended for use by persons aged 13 and older. We do not knowingly collect personal information from children under the age of 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information promptly. Parents or guardians who believe their child has provided information to our site should contact us immediately.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>9. Your Data Rights</span>
        </>,
        <>
          <p style={{marginBottom: '0.5rem', lineHeight: '1.6'}}>
            You have the right to:
          </p>
          <ul style={{marginLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8'}}>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications at any time</li>
            <li>Download your data in a portable format</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            To exercise any of these rights, please contact us using the information provided in the Contact Us section below.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>10. Contact Us</span>
        </>,
        <>
          <p style={{marginBottom: '0.5rem', lineHeight: '1.6'}}>
            If you have any questions or concerns regarding this privacy policy, or if you would like to exercise your rights, please contact us:
          </p>
          <div style={{marginLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8'}}>
            <p><strong>Email:</strong> support@jobplanner.com</p>
            <p><strong>Phone:</strong> +91-87505-27008</p>
            <p><strong>Mailing Address:</strong><br />
            Job Planner Inc.<br />
            123 Career Boulevard<br />
            Business District, City, State 12345</p>
          </div>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>11. Policy Changes</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by updating the "Last Updated" date at the top of this policy. Your continued use of our website following the posting of revised Privacy Policy means you accept and agree to the changes.
          </p>
        </>,
      ]}
    />
  );
}
