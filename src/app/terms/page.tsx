import type { Metadata } from "next";
import { PolicyPage, type PolicySection } from "@/components/policy-page";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms" } };

const sections: PolicySection[] = [
  {
    heading: "Who we are",
    body: [
      "bokako.com is operated by [legal name / trading name], [full postal address], [country], [VAT / company registration number, if applicable] (\"Bokako\", \"we\"). Contact: [support email address].",
      "By using this site or buying a product you agree to these terms. If you do not agree, please do not use the site.",
    ],
  },
  {
    heading: "What we sell",
    body: [
      "Bokako sells digital products: Excel templates and calculators that you download as files. No physical goods are shipped. Product pages describe each product, its file format and any requirements.",
    ],
  },
  {
    heading: "Ordering and payment",
    body: [
      "Purchases are made through an external checkout provider, [Payhip / Gumroad / Stripe]. The contract of sale is concluded when the provider confirms your order. Prices are shown in euro [including / excluding] VAT, which is calculated at checkout according to your country. The provider's own terms apply to the payment process.",
    ],
  },
  {
    heading: "Delivery",
    body: [
      "After payment you receive a download link from the checkout provider, normally immediately and by email. If you do not receive it, check your spam folder and then contact us at [support email address]. See our Refund & Download Policy for details.",
    ],
  },
  {
    heading: "Licence to use the products",
    body: ["When you buy a product you receive a non-exclusive, non-transferable, non-sublicensable licence to use it as follows:"],
    list: [
      "You may use it for your own personal or internal business purposes [on any number of your own devices / by one named user – choose].",
      "You may edit the file to fit your own data.",
      "You may not resell, share, publish, upload or distribute the product or any copy of it, in whole or in part, including in modified form, or offer it as a template of your own.",
      "You may not remove copyright or branding notices.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All content on this site and in the products, including text, structure, formulas, design and the Bokako name and logo, belongs to Bokako or its licensors and is protected by copyright and other laws. Buying a product does not transfer ownership of any of it.",
    ],
  },
  {
    heading: "Using the tools: no professional advice",
    body: [
      "Our templates and calculators are general planning aids. Results depend entirely on the data and assumptions you enter, and on your version of Excel or compatible software. They are estimates, not guarantees.",
      "Nothing on this site or in our products is financial, investment, tax, legal, engineering, health or medical advice, or a recommendation to enter into any contract, purchase, installation or bet. The Betting Tracker only records and analyses your own data and does not predict outcomes or encourage gambling. Please consult a qualified professional before making important decisions.",
    ],
  },
  {
    heading: "Warranty and liability",
    body: [
      "We take care to build accurate products, but we cannot promise that they are error-free or suitable for your particular purpose. To the extent permitted by law, we are not liable for indirect or consequential loss, loss of profit, or decisions you make based on the results, and our total liability for any claim relating to a product is limited to the price you paid for it.",
      "Nothing in these terms excludes or limits liability that cannot be excluded by law, including liability for intent or gross negligence, injury to life, body or health, and your statutory rights as a consumer (including the legal guarantee for digital content that is faulty or not as described).",
    ],
  },
  {
    heading: "Acceptable use of the site",
    body: [
      "Do not misuse the site: no attempts to disrupt it, gain unauthorised access, scrape it at scale, or use it unlawfully.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "We may update these terms and the content of the site. The version published when you buy applies to that purchase.",
    ],
  },
  {
    heading: "Governing law and disputes",
    body: [
      "These terms are governed by the laws of [country], without depriving consumers of the mandatory consumer protection provisions of the country where they live. Courts of [country / city] have jurisdiction, subject to any mandatory consumer rights to sue or be sued where you live.",
      "EU consumers can use the European Commission's online dispute resolution resources, if available, and may contact us first at [support email address].",
    ],
  },
];

export default function Terms() {
  return (
    <PolicyPage
      title="Terms"
      updated="[date]"
      intro="These terms govern your use of bokako.com and the purchase of Bokako digital products."
      sections={sections}
    />
  );
}
