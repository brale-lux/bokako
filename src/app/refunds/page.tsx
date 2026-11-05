import type { Metadata } from "next";
import { PolicyPage, type PolicySection } from "@/components/policy-page";

export const metadata: Metadata = { title: "Refund & Download Policy", alternates: { canonical: "/refunds" } };

const sections: PolicySection[] = [
  {
    heading: "How you receive your product",
    body: [
      "All Bokako products are digital downloads (Excel files). Once your payment is confirmed, the checkout provider ([Payhip / Gumroad / Stripe]) sends a download link to the email address you entered, normally within minutes. Nothing is shipped.",
      "Keep the email: it is your way to download the file again. If the link is missing, check your spam folder, then email [support email address] with the email address used for the order and we will resend it.",
    ],
  },
  {
    heading: "What you need",
    body: [
      "Products are built for Microsoft Excel [version – e.g. Excel 2019 or Microsoft 365 on Windows or Mac]. Other spreadsheet programs may open the files but some formulas, formatting or charts may not work as intended. The compatible version is stated on each product page. Please check it before buying.",
    ],
  },
  {
    heading: "Right of withdrawal for digital content (EU/UK consumers)",
    body: [
      "Consumers in the EU and UK normally have a 14-day right to withdraw from distance purchases. For digital content that is not supplied on a physical medium, this right ends once the download or supply has started, provided that you gave your prior express consent to the immediate supply and acknowledged that you thereby lose the right of withdrawal.",
      "At checkout we ask for this consent and acknowledgement [make sure your checkout provider shows this checkbox/notice]. If you gave it and have downloaded the file, the statutory right of withdrawal no longer applies. This does not affect your other legal rights described below.",
    ],
  },
  {
    heading: "Faulty or not-as-described products",
    body: [
      "If a file will not open, is corrupted, or does not work as described on its product page, contact us at [support email address] with your order details and a short description (a screenshot helps). We will first try to fix the problem or send a corrected file. If we cannot, you are entitled to a refund as required by law. Your statutory rights as a consumer are not affected by this policy.",
    ],
  },
  {
    heading: "Goodwill refunds",
    body: [
      "[Optional – delete this section if you do not want to offer it: If a product is not what you hoped for, you can ask for a refund within [number] days of purchase, provided you have not shared or distributed the file. Email [support email address] and tell us your order details.]",
    ],
  },
  {
    heading: "How refunds are paid",
    body: [
      "Approved refunds are issued by the checkout provider to the original payment method, normally within [number] business days, though your bank may need longer to show it. Access to the file may be withdrawn after a refund, and you must stop using the product.",
    ],
  },
  {
    heading: "Contact",
    body: ["[Legal name / trading name], [postal address], [support email address]."],
  },
];

export default function Refunds() {
  return (
    <PolicyPage
      title="Refund & Download Policy"
      updated="[date]"
      intro="How downloads work and when you can get a refund for Bokako digital products."
      sections={sections}
    />
  );
}
