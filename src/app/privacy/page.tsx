import type { Metadata } from "next";
import { PolicyPage, type PolicySection } from "@/components/policy-page";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

const sections: PolicySection[] = [
  {
    heading: "Who is responsible for your data",
    body: [
      "The controller of personal data processed on bokako.com is [legal name / trading name], [full postal address], [country] (\"Bokako\", \"we\", \"us\"). [VAT / company registration number, if applicable].",
      "You can contact us about privacy at [privacy email address].",
    ],
  },
  {
    heading: "What this site collects",
    body: [
      "Browsing the site. You do not need an account to use bokako.com, and we do not run advertising or analytics cookies. Our hosting provider (Vercel Inc.) processes technical data such as your IP address, browser type and the pages requested in server logs, for security and to deliver the site.",
      "Favourites. If you mark products as favourites, that choice is stored only in your own browser (local storage) on your device. It is never sent to us and you can clear it at any time in your browser settings.",
      "Search. Text you type in the search box is used in your browser to filter products and is not sent to us.",
    ],
  },
  {
    heading: "Purchases",
    body: [
      "Payments are handled by an external checkout provider, [Payhip / Gumroad / Stripe – name the provider(s) you use]. When you buy, you enter your name, email address, billing details and payment details directly with that provider. We never see or store your card or bank details.",
      "The provider shares with us the order information we need to run the business: product purchased, price, date, your name, email address and country (for VAT). The provider acts as an independent controller for its own processing; please read its privacy policy: [link to the provider's privacy policy].",
    ],
  },
  {
    heading: "Why we process data and on what legal basis",
    body: ["Where the EU/UK GDPR applies, we rely on the following legal bases:"],
    list: [
      "Performing our contract with you (delivering the product you bought and supporting it): Art. 6(1)(b) GDPR.",
      "Legal obligations such as bookkeeping, tax and VAT records: Art. 6(1)(c) GDPR.",
      "Our legitimate interests in keeping the site secure and in answering your enquiries: Art. 6(1)(f) GDPR.",
      "Your consent, only where we explicitly ask for it (for example a newsletter, if we ever offer one): Art. 6(1)(a) GDPR. You can withdraw consent at any time.",
    ],
  },
  {
    heading: "Who receives your data",
    body: [
      "We share data only with service providers that help us run the site and the shop: our hosting provider (Vercel Inc.), our checkout/payment provider [name], [email provider, if you use one], and our accountant or tax adviser where required by law. These providers may only use data to provide their service to us, or as independent controllers under their own policies. We do not sell personal data.",
      "Some providers are based in, or may access data from, countries outside the EU/EEA (for example the United States). Where that happens, transfers rely on safeguards such as the EU–US Data Privacy Framework or Standard Contractual Clauses.",
    ],
  },
  {
    heading: "How long we keep data",
    body: [
      "Order and invoice records are kept for as long as tax and accounting law requires in [country] ([number] years). Support emails are kept for up to [number] years after the matter is resolved. Server logs are kept by our host for a short period only.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Under data protection law you have the right to access your data, have it corrected or erased, restrict or object to its processing, and receive it in a portable format. To use these rights, email [privacy email address]. We will respond within one month.",
      "You also have the right to complain to a data protection authority, in particular in the country where you live or work, or in [country – name of the supervisory authority, e.g. the national data protection authority].",
    ],
  },
  {
    heading: "Children",
    body: ["Our products are not directed at children under 16, and we do not knowingly collect their data."],
  },
  {
    heading: "Changes to this policy",
    body: ["We may update this policy when our practices change. The date at the top shows the latest version."],
  },
];

export default function Privacy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      updated="[date]"
      intro="This policy explains what personal data Bokako processes when you visit bokako.com or buy one of our digital products, and what rights you have."
      sections={sections}
    />
  );
}
