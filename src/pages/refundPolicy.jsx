import PolicyPage from '../components/policyPage';
import topImage from '../assets/images/page-bottom.jpg';

export default function RefundPolicy() {
  return (
    <PolicyPage
      topImage={topImage}
      pageTitle="Refund Policy"
      sections={[
       /* <>
          <span style={{fontWeight:700}}>Last Updated:</span> November 25, 2025
        </>,*/
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            <strong>Welcome to Job Planner!</strong> We are committed to ensuring customer satisfaction with all our services and products. This Refund Policy outlines the terms and conditions under which refunds may be issued for services purchased through our platform. Please read this policy carefully before making a purchase.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>1. Refund Eligibility</span>
        </>,
        <>
          <p style={{marginBottom: '0.5rem', lineHeight: '1.6'}}>
            Refunds are available under the following conditions:
          </p>
          <ul style={{marginLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8'}}>
            <li>Service not rendered or delivered as described</li>
            <li>Technical issues preventing service access or completion</li>
            <li>Duplicate charges or billing errors</li>
            <li>Service cancellation within the eligible refund window</li>
            <li>Unauthorized transactions or fraudulent charges</li>
            <li>Services cancelled before commencement or completion</li>
          </ul>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>2. Non-Refundable Services</span>
        </>,
        <>
          <p style={{marginBottom: '0.5rem', lineHeight: '1.6'}}>
            The following services and circumstances are non-refundable:
          </p>
          <ul style={{marginLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8'}}>
            <li>Services that have been fully delivered and completed</li>
            <li>Services accessed or used by the customer for more than 50% of the service period</li>
            <li>Custom services or specially tailored solutions after commencement</li>
            <li>Services purchased under promotional or special discount codes (unless otherwise stated)</li>
            <li>Refunds requested more than 30 days after purchase without valid justification</li>
            <li>Services cancelled due to user error or misunderstanding of service details</li>
            <li>Career counseling or advisory sessions already completed</li>
          </ul>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>3. Refund Window</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            Customers are eligible to request a refund within <strong>30 days</strong> from the date of purchase or service commencement, whichever is earlier. Refund requests submitted after this period may be considered on a case-by-case basis and are subject to management discretion. For services that are scheduled to commence at a future date, refunds can be requested until 7 days before the scheduled service commencement date.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>4. Refund Amount</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            The refund amount will be determined based on the percentage of service completed. If no portion of the service has been completed or delivered, a full refund will be issued. For partially completed services, refunds will be calculated on a pro-rata basis. Administrative processing fees may be deducted from the refund amount if applicable. All refunds will be issued in the original payment method.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>5. How to Request a Refund</span>
        </>,
        <>
          <p style={{marginBottom: '0.5rem', lineHeight: '1.6'}}>
            To request a refund, please follow these steps:
          </p>
          <ul style={{marginLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8'}}>
            <li>Log in to your Job Planner account</li>
            <li>Navigate to your Order History or Service Details section</li>
            <li>Select the service or product for which you wish to request a refund</li>
            <li>Click on "Request Refund" and fill out the refund request form</li>
            <li>Provide detailed information about the reason for your refund request</li>
            <li>Submit the form and wait for our team to review your request</li>
          </ul>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            Alternatively, you can contact our support team directly at <strong>support@jobplanner.com</strong> with your refund request and supporting documentation.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>6. Refund Processing Time</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            Upon approval of your refund request, we will process the refund within <strong>7-10 business days</strong>. The time it takes for the refund to appear in your account depends on your bank or payment provider and may take an additional 5-10 business days. Job Planner is not responsible for delays caused by your financial institution. You will receive a confirmation email once your refund has been processed.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>7. Refund Review Process</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            All refund requests will be reviewed by our management team within <strong>3-5 business days</strong> of submission. We may request additional information or documentation to process your refund. You will be notified via email of the status of your refund request. If your refund request is denied, we will provide you with a detailed explanation of the reasons for denial.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>8. Partial Refunds</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            If you have used or accessed a portion of the service, we reserve the right to issue a partial refund based on the percentage of service remaining. For subscription-based services, refunds will be calculated based on the unused portion of your subscription. Partial refunds are calculated at the daily rate of your service divided by the remaining days.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>9. Special Circumstances</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            In cases of technical issues, service failures, or circumstances beyond the customer's control, Job Planner may consider issuing refunds outside the standard refund window. Each case will be evaluated individually. We encourage customers to contact our support team to discuss special circumstances that may warrant an exception to our standard refund policy.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>10. No Re-Access After Refund</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            Once a refund is processed and issued, your access to the corresponding service will be terminated immediately. You will not be able to access any materials, resources, or services associated with the refunded service. Attempting to regain access using the same or alternative methods is prohibited and may result in account suspension.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>11. Chargeback and Dispute Policies</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            If you initiate a chargeback or dispute with your bank or payment provider without first contacting our support team, your account may be suspended or terminated. We encourage all customers to work with us directly to resolve any billing disputes. Chargebacks filed without attempting resolution with our team will result in forfeiture of service access and potential account closure.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>12. Refund for Promotional Services</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            Services purchased under promotional codes or special offers may have different refund terms. The specific refund terms for promotional services will be clearly stated at the time of purchase. If no special terms are mentioned, the standard refund policy applies.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>13. Policy Updates</span>
        </>,
        <>
          <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
            Job Planner reserves the right to modify this Refund Policy at any time without prior notice. Changes will become effective immediately upon posting to the website. Your continued use of our services following the posting of revised Refund Policy means you accept and agree to the changes. We recommend reviewing this policy periodically to stay informed of any updates.
          </p>
        </>,
        <>
          <span style={{fontWeight:700, fontSize: '1.1rem'}}>14. Contact Us</span>
        </>,
        <>
          <p style={{marginBottom: '0.5rem', lineHeight: '1.6'}}>
            If you have any questions about our Refund Policy or wish to request a refund, please contact our support team:
          </p>
          <div style={{marginLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8'}}>
            <p><strong>Email:</strong> support@jobplanner.com</p>
            <p><strong>Phone:</strong> +91-87505-27008</p>
            <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
            <p><strong>Location:</strong> Delhi/NCR, India</p>
          </div>
        </>,
      ]}
    />
  );
}
