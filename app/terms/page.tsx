import type { Metadata } from "next";

import { LegalPage } from "../components/LegalPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("terms");

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Website Terms and Conditions"
      title="Terms and Conditions"
      lastUpdated="July 21, 2026"
      intro={[
        "Welcome to our website. These Terms and Conditions govern your use of our IT consulting website.",
        "By accessing or using this website, you agree to comply with and be bound by these Terms. If you do not agree, please do not use this site.",
      ]}
      sections={[
        {
          title: "No Consultant-Client Relationship",
          body: [
            "The content provided on this website, including blog posts, case studies, technical articles, and service descriptions, is for general informational purposes only. It does not constitute formal IT, cybersecurity, or professional consulting advice.",
            "Important: Submitting a query or project description through our online contact form does not create an official consultant-client relationship. A formal, legally binding advisory relationship is only established once both parties execute a separate, written Master Services Agreement (MSA) or Statement of Work (SOW).",
          ],
        },
        {
          title: "Acceptable Use and Lead Submission",
          body: ["By using our site and submitting queries, you agree that:"],
          list: [
            "You will provide true, accurate, current, and complete contact information.",
            "You will not use our inquiry forms to distribute spam, advertising, or unsolicited promotional materials.",
            "You will not transmit any malicious code, viruses, or scripts designed to interrupt or damage our website infrastructure.",
            "We reserve the right to ignore, block, or delete any lead submission that contains fraudulent data or violates these Terms.",
          ],
        },
        {
          title: "Intellectual Property",
          body: [
            "All content, design, text, graphics, logos, and proprietary methodologies displayed on this website are the intellectual property of our company and are protected by United States and international copyright and trademark laws. You may not copy, reproduce, modify, or distribute any part of this site without our express prior written consent.",
          ],
        },
        {
          title: "Limitation of Liability",
          body: [
            "To the maximum extent permitted by applicable law, our firm, its partners, and employees shall not be liable for any direct, indirect, incidental, or consequential damages resulting from:",
          ],
          list: [
            "Your use of, or inability to use, this website.",
            "Any reliance placed on free informational content or tech advice published on the site.",
            "Temporary website downtime, technical errors, or data transmission failures.",
          ],
        },
        {
          title: "Governing Law and Jurisdiction",
          body: [
            "These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the State of Illinois, without giving effect to any choice or conflict of law provision.",
            "You explicitly agree that any legal action, suit, or proceeding arising out of these Terms shall be instituted exclusively in the federal or state courts of competent jurisdiction located in Cook County, Chicago, Illinois.",
          ],
        },
        {
          title: "Changes to These Terms",
          body: [
            "We reserve the right to modify these Terms at any time. Any changes will be posted directly to this page with an updated Last Updated date. Continued use of the website following any changes constitutes your acceptance of the new Terms.",
          ],
        },
        {
          title: "Contact Us",
          body: [
            "If you have any questions regarding these Terms and Conditions, please contact us at:",
          ],
          list: [
            "Email: hello@jethavictus.com",
            "Branch locations: Corporate headquarters, technology delivery center, regional consulting office, and client experience center by appointment.",
          ],
        },
      ]}
    />
  );
}
