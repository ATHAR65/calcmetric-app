"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import Disclaimer from "@/components/Disclaimer";
import AdSlot from "@/components/AdSlot";

const fmt = (v) =>
  v.toLocaleString("en-US", { style: "currency", currency: "USD" });

const TXN_TYPES = [
  { value: "standard", label: "Goods & Services (3.49% + $0.49)" },
  { value: "invoice", label: "Invoice (3.49% + $0.49)" },
  { value: "international", label: "International (4.99% + $0.49)" },
  { value: "fnf_balance", label: "Friends & Family (Bank/Balance — $0)" },
  { value: "fnf_card", label: "Friends & Family (Card Funded — 2.9%)" },
  { value: "micropayment", label: "Micropayments (Under $10 — 4.99% + $0.09)" },
];

function getRates(type) {
  switch (type) {
    case "standard":
    case "invoice":
      return { pct: 0.0349, fixed: 0.49 };
    case "international":
      return { pct: 0.0499, fixed: 0.49 };
    case "fnf_balance":
      return { pct: 0, fixed: 0 };
    case "fnf_card":
      return { pct: 0.029, fixed: 0 };
    case "micropayment":
      return { pct: 0.0499, fixed: 0.09 };
    default:
      return { pct: 0.0349, fixed: 0.49 };
  }
}

export default function PayPalFeePage() {
  const [amount, setAmount] = useState(100);
  const [txnType, setTxnType] = useState("standard");
  const [mode, setMode] = useState("normal");

  const amt = Math.max(0, amount || 0);
  const rates = getRates(txnType);

  let paypalFee, netPayout, effectiveRate, chargeAmount;

  if (mode === "normal") {
    paypalFee = amt * rates.pct + rates.fixed;
    netPayout = amt - paypalFee;
    effectiveRate = amt > 0 ? (paypalFee / amt) * 100 : 0;
    chargeAmount = null;
  } else {
    chargeAmount = (amt + rates.fixed) / (1 - rates.pct);
    paypalFee = chargeAmount - amt;
    netPayout = amt;
    effectiveRate = chargeAmount > 0 ? (paypalFee / chargeAmount) * 100 : 0;
  }

  const stripeBase = mode === "reverse" && chargeAmount ? chargeAmount : amt;
  const stripeFee = stripeBase * 0.029 + 0.3;
  const stripeNet = stripeBase - stripeFee;
  const diff = netPayout - stripeNet;

  const schemaData = {
    name: "PayPal Fee Calculator",
    description:
      "Calculate exact PayPal fees for any transaction. Covers standard 3.49% + $0.49, friends and family, international, invoicing and micropayment rates.",
    url: "https://www.themetricapp.com/calculators/paypal-fee-calculator",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are PayPal's current fees for receiving money in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of 2026, PayPal's standard fee for receiving money in the US is 3.49% + $0.49 per transaction for Goods and Services payments. International transactions incur a 4.99% + $0.49 fee. Friends and Family payments funded by a bank account or PayPal balance are free, while card-funded F&F payments cost 2.9%. Micropayments under $10 are charged at 4.99% + $0.09 per transaction.",
        },
      },
      {
        "@type": "Question",
        name: "Is PayPal Friends & Family always completely free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, PayPal Friends & Family is only free when funded by a PayPal balance or linked bank account. If the sender uses a credit card, debit card, or PayPal Credit, a 2.9% fee applies. Additionally, international Friends & Family payments always incur a cross-border fee regardless of the funding source. Domestic F&F payments funded by balance or bank are the only truly fee-free transactions.",
        },
      },
      {
        "@type": "Question",
        name: "PayPal vs Stripe — which payment processor is cheaper in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PayPal's standard rate of 3.49% + $0.49 is more expensive than Stripe's 2.9% + $0.30 for most transaction amounts. For a $100 transaction, PayPal charges $3.98 while Stripe charges $3.20 — PayPal is $0.78 more. However, PayPal may save merchants money if they receive many smaller payments under $10 (micropayment rate) or process high volumes with negotiated rates. Stripe is generally cheaper for mid-to-high-value transactions.",
        },
      },
      {
        "@type": "Question",
        name: "How can I avoid or reduce PayPal fees legally?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To reduce PayPal fees, you can: (1) Request payment as Friends & Family for personal transactions; (2) Apply for PayPal's Merchant Rate if you have high transaction volume; (3) Use PayPal's Micropayments rate for items under $10; (4) Encourage customers to pay via bank transfer rather than credit cards; (5) Include PayPal fees in your pricing strategy; (6) Consider PayPal Invoicing for business clients; (7) Use alternative payment processors like Stripe or Square for transactions where their fees are lower.",
        },
      },
      {
        "@type": "Question",
        name: "What are PayPal's international transaction fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PayPal charges 4.99% + $0.49 for international commercial transactions in 2026. This is higher than the domestic rate of 3.49% + $0.49. Additionally, PayPal applies a currency conversion fee of 3.5% to 4% above the wholesale exchange rate for cross-currency transactions. For international Friends and Family payments funded by balance or bank, there's typically no transaction fee, but currency conversion fees still apply.",
        },
      },
      {
        "@type": "Question",
        name: "Does PayPal charge different fees for micropayments under $10?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PayPal offers a Micropayments pricing plan for transactions under $10. Under this plan, the fee is 4.99% + $0.09 per transaction instead of the standard 3.49% + $0.49. You must apply and be approved for the micropayments rate. For example, a $5 transaction under the standard rate would cost $0.67 (13.4% effective rate), while the micropayment rate charges only $0.34 (6.8% effective rate).",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate PayPal fees when sending an invoice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PayPal Invoice fees are the same as Goods and Services rates: 3.49% + $0.49 per transaction. To calculate the fee on an invoice amount, multiply the invoice total by 3.49% and add $0.49. To ensure you receive a specific net amount, use the reverse calculation: (Desired Net + $0.49) ÷ (1 - 0.0349). For example, to net $100 from an invoice, charge ($100 + $0.49) ÷ 0.9651 = $104.14.",
        },
      },
      {
        "@type": "Question",
        name: "Can I legally pass PayPal fees on to my customers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, passing PayPal fees to customers is legal in the United States and most other countries (though some states like New York have specific surcharge laws). PayPal's terms of service allow surcharging, but you must clearly disclose the surcharge to customers before they complete the payment. Many businesses add a 3-4% convenience fee to offset payment processing costs. However, some merchant agreements and card network rules may restrict surcharging, so check your specific terms.",
        },
      },
    ],
  };

  const seoContent = (
    <>
      <h2>How to Use the PayPal Fee Calculator</h2>
      <p>
        Our free PayPal Fee Calculator works in two modes. In <strong>Standard Mode</strong>, enter
        the transaction amount and select the transaction type — the calculator instantly shows the
        PayPal fee, your net payout, and the effective fee rate. In <strong>Reverse Mode</strong>,
        enter the net amount you want to receive, and the calculator tells you exactly how much to
        charge your customer. Both modes include a side-by-side comparison with Stripe fees, so
        you can see which processor saves you money on every transaction.
      </p>

      <h2>Formula & Calculation Breakdown</h2>
      <p>
        <strong>Standard Fee Calculation:</strong> PayPal Fee = (Transaction Amount × Percentage Rate)
        + Fixed Fee. For example, on a $200 Goods & Services transaction: ($200 × 0.0349) + $0.49 =
        $7.47. Your net payout: $200 - $7.47 = $192.53.
      </p>
      <p>
        <strong>Reverse Fee Calculation (Surcharge):</strong> To find the amount to charge to net a
        specific payout: Charge Amount = (Desired Net + Fixed Fee) ÷ (1 - Percentage Rate). To net
        $200: ($200 + $0.49) ÷ (1 - 0.0349) = $207.68. PayPal Fee: $7.68. You charge $207.68, net
        $200.00.
      </p>
      <p>
        <strong>Stripe Comparison:</strong> Stripe's standard US rate is 2.9% + $0.30. On $200:
        ($200 × 0.029) + $0.30 = $6.10. Stripe net: $193.90. PayPal net: $192.53. Stripe saves
        $1.37 on this transaction.
      </p>

      <h3>Example 1: Small Business Invoice</h3>
      <p>
        Sarah invoices a client for $500. Using PayPal Invoice (3.49% + $0.49): Fee = $17.94. Net
        payout: $482.06. Effective rate: 3.59%. Stripe would charge $14.80 — a savings of $3.14.
        Sarah's takeaway: For invoices over $50, Stripe is almost always cheaper.
      </p>

      <h3>Example 2: International Payment</h3>
      <p>
        An overseas client pays Tom $2,000 for freelance work. International rate (4.99% + $0.49):
        Fee = $100.29. Net: $1,899.71. Effective rate: 5.01%. This is significantly more expensive
        than domestic — Tom should factor international fees into his pricing or use Wise for
        cross-border payments.
      </p>

      <h3>Example 3: Micropayment — $8 Digital Download</h3>
      <p>
        Maria sells a $8 PDF guide. Standard rate: $0.78 fee (9.7% effective). Net: $7.22.
        Micropayment rate (4.99% + $0.09): Just $0.49 fee (6.1% effective). Net: $7.51. Maria
        saves $0.29 per sale — on 500 sales/month, that's $1,740/year. The micropayment rate is
        essential for low-ticket digital sellers.
      </p>

      <h2>PayPal vs Stripe vs Square: Complete Fee Comparison 2026</h2>
      <p>
        Choosing the right payment processor can significantly impact your bottom line. In 2026,
        the three major players have distinct fee structures:
      </p>
      <p>
        <strong>PayPal (3.49% + $0.49):</strong> Best for platforms where PayPal is the dominant
        payment method (eBay, Etsy, freelance marketplaces). The higher fee is offset by buyer trust
        and convenience. The Friends & Family option is useful for personal payments.
      </p>
      <p>
        <strong>Stripe (2.9% + $0.30):</strong> Generally 15–25% cheaper than PayPal for most
        transactions. Better for custom e-commerce integrations, subscription billing, and
        international businesses. Stripe's API is more developer-friendly for custom checkout flows.
      </p>
      <p>
        <strong>Square (2.6% + $0.10 for in-person, 2.9% + $0.30 online):</strong> Best for
        businesses with physical retail operations. Square's in-person rates are the lowest of the
        three, and its hardware integration is seamless. For online-only businesses, Stripe generally
        beats Square on features.
      </p>
      <p>
        The practical difference: On $50,000 monthly revenue, choosing Stripe over PayPal saves
        roughly $2,400/year. That's a meaningful amount for any small business.
      </p>

      <h2>Real-Life Scenarios: 3 User Types</h2>
      <p>
        <strong>Case 1 — The Freelancer Sending Invoices:</strong> David, a freelance writer,
        invoices 20 clients per month averaging $250 each. Using PayPal Invoice, he pays $18.23 per
        invoice × 20 = $364.60/month in fees. Switching to Stripe ($7.55 per invoice) would save
        him $213.80/month or $2,565.60/year. David's action: Switch to Stripe for invoicing or add
        a 3.5% convenience fee to cover PayPal costs.
      </p>
      <p>
        <strong>Case 2 — The E-commerce Seller:</strong> Lisa runs an Etsy shop selling handmade
        jewelry at an average order value of $45. She gets 300 orders per month. PayPal fees:
        ($45 × 0.0349 + $0.49) × 300 = $618.15/month. Etsy also charges its own payment processing
        fee on top. Lisa's action: Factor both PayPal and Etsy fees into her pricing to maintain
        40%+ margins.
      </p>
      <p>
        <strong>Case 3 — The International Agency:</strong> Tom's design agency invoices $15,000
        monthly to a UK client. PayPal international fee: $748.85 ($15,000 × 0.0499 + $0.49). Stripe
        international fee: $465 ($15,000 × 0.029 + $0.30 + 1.5% cross-border). Stripe saves $283.85
        per transaction. Tom's action: Use Stripe for all international invoices and add a
        cross-border fee to his standard rates.
      </p>

      <h2>7 Tips to Reduce PayPal Fees in 2026</h2>
      <p>
        <strong>1. Negotiate a merchant rate.</strong> If you process over $3,000/month, call PayPal
        and ask for a discounted Merchant Rate. High-volume sellers can often get rates as low as
        2.5% + $0.30.
      </p>
      <p>
        <strong>2. Use Friends & Family for personal transactions.</strong> Never pay the Goods &
        Services rate for payments to family, friends, or roommates. Just make sure both parties
        understand it removes buyer protection.
      </p>
      <p>
        <strong>3. Apply for the Micropayments rate.</strong> If you sell digital products, courses,
        or other items under $10, the 4.99% + $0.09 rate is almost always cheaper. Apply through
        PayPal's support to switch.
      </p>
      <p>
        <strong>4. Add a convenience fee.</strong> Legally pass the 3.5% fee to customers. Most
        businesses add it at checkout with clear disclosure. In some states, the surcharge is capped
        at 3–4%.
      </p>
      <p>
        <strong>5. Use PayPal Balance for payouts.</strong> When withdrawing money, use PayPal Balance
        transfers to your bank (free) instead of instant transfers (1.5% fee). Schedule weekly
        transfers to avoid the urgency of instant withdrawals.
      </p>
      <p>
        <strong>6. Combine with Stripe for checkout options.</strong> Offer both PayPal and Stripe
        at checkout. Many customers prefer PayPal, but Stripe saves you money when they choose card
        payments. Tools like Spreedly or Braintree can manage both.
      </p>
      <p>
        <strong>7. Track fees as a business expense.</strong> All PayPal transaction fees are
        tax-deductible business expenses. Track them carefully in your accounting software —
        they can add up to hundreds or thousands of dollars in deductions annually.
      </p>

      <h2>Common Mistakes to Avoid</h2>
      <p>
        <strong>Not comparing processors.</strong> Sticking with PayPal out of convenience costs
        many businesses thousands per year. Run every transaction through a fee calculator to
        compare your options.
      </p>
      <p>
        <strong>Using Goods & Services for personal payments.</strong> If you're splitting a dinner
        bill or paying a friend, don't use Goods & Services. You'll pay unnecessary fees and the
        recipient will have to wait for funds.
      </p>
      <p>
        <strong>Not charging enough to cover fees.</strong> If you're not factoring payment
        processing into your pricing, you're effectively losing 3–5% of every transaction. Build
        it into your margins.
      </p>
      <p>
        <strong>Forgetting about currency conversion fees.</strong> PayPal's exchange rate markup
        of 3.5–4% can dramatically increase the real cost of international payments. Always check
        the total cost including currency conversion, not just the transaction fee.
      </p>
      <p>
        <strong>Using instant transfer unnecessarily.</strong> PayPal charges 1.5% for instant
        transfers to your bank. If you can wait 1–3 business days, standard transfers are free.
      </p>
      <p>
        <strong>Not applying for the micropayment rate.</strong> Low-ticket sellers who don't switch
        to the micropayment rate are throwing away money. A $5 digital product costs $0.67 under
        standard fees (13.4%) vs $0.34 (6.8%) under micropayments.
      </p>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: What are PayPal's current fees for receiving money in 2026?</strong><br />
        A: Standard Goods & Services: 3.49% + $0.49. International: 4.99% + $0.49. Friends &
        Family (bank/balance): Free. Micropayments (under $10): 4.99% + $0.09.
      </p>
      <p>
        <strong>Q: Is PayPal Friends & Family always completely free?</strong><br />
        A: Only when funded by PayPal balance or bank account. Card-funded F&F costs 2.9%.
        International F&F may have cross-border fees.
      </p>
      <p>
        <strong>Q: PayPal vs Stripe — which is cheaper in 2026?</strong><br />
        A: Stripe (2.9% + $0.30) is generally 15–25% cheaper than PayPal (3.49% + $0.49) for most
        domestic transactions. The difference widens on larger transactions.
      </p>
      <p>
        <strong>Q: How can I avoid or reduce PayPal fees legally?</strong><br />
        A: Use Friends & Family for personal payments, negotiate a merchant rate, apply for the
        micropayments rate, add a convenience fee to customers, and track all fees as business
        expenses.
      </p>
      <p>
        <strong>Q: What are PayPal's international transaction fees?</strong><br />
        A: 4.99% + $0.49 for international commercial transactions, plus 3.5–4% currency conversion
        markup on the exchange rate.
      </p>
      <p>
        <strong>Q: Does PayPal charge different fees for micropayments under $10?</strong><br />
        A: Yes, the Micropayments rate is 4.99% + $0.09 per transaction. You must apply and be
        approved for this pricing plan.
      </p>
      <p>
        <strong>Q: How do I calculate PayPal fees when sending an invoice?</strong><br />
        A: Use the standard rate of 3.49% + $0.49. For reverse calculation (to net a specific
        amount): (Desired Net + $0.49) ÷ 0.9651.
      </p>
      <p>
        <strong>Q: Can I legally pass PayPal fees on to my customers?</strong><br />
        A: Yes, surcharging is legal in most US states with proper disclosure. Some states have
        specific surcharge limits (typically 3–4%). Always disclose clearly at checkout.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed fee breakdowns, surcharging strategies, and side-by-side comparisons across all PayPal transaction types, read our full guide:{" "}
          <Link href="/blog/paypal-fee-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            PayPal Fee Calculator 2026 Guide
          </Link>
          . This companion article covers international fee scenarios, chargeback costs, and real-world merchant case studies.
        </p>
      </div>

      <h2>Related Calculators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Link
          href="/calculators/stripe-fee-merchant-calculator"
          className="block p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-teal-500 transition-colors"
        >
          <h3 className="text-teal-400 font-semibold">💳 Stripe Fee Calculator</h3>
          <p className="text-sm text-slate-300 mt-1">
            Calculate Stripe fees and compare with PayPal for any transaction.
          </p>
        </Link>
        <Link
          href="/calculators/ebay-seller-fee-profit"
          className="block p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-teal-500 transition-colors"
        >
          <h3 className="text-teal-400 font-semibold">📦 eBay Seller Fee & Profit Calculator</h3>
          <p className="text-sm text-slate-300 mt-1">
            Calculate eBay final value fees and your true net profit.
          </p>
        </Link>
        <Link
          href="/calculators/ecommerce-net-profit-margin"
          className="block p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-teal-500 transition-colors"
        >
          <h3 className="text-teal-400 font-semibold">📈 E-Commerce Profit Margin Calculator</h3>
          <p className="text-sm text-slate-300 mt-1">
            Calculate your true net profit after all fees and costs.
          </p>
        </Link>
        <Link
          href="/calculators/freelancer-platform-fee-comparison"
          className="block p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-teal-500 transition-colors"
        >
          <h3 className="text-teal-400 font-semibold">🔧 Freelancer Fee Comparison Calculator</h3>
          <p className="text-sm text-slate-300 mt-1">
            Compare fees across Upwork, Fiverr, Freelancer, and Toptal.
          </p>
        </Link>
      </div>
    </>
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-900 text-slate-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", "name": "PayPal Fee Calculator", "url": "https://www.themetricapp.com/calculators/paypal-fee-calculator", "description": "Calculate exact PayPal fees for any transaction. Covers standard 3.49% + $0.49, friends and family, international, invoicing and micropayment rates.", "applicationCategory": "FinanceApplication", "operatingSystem": "Web Browser", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" }, { "@type": "ListItem", "position": 2, "name": "PayPal Fee Calculator", "item": "https://www.themetricapp.com/calculators/paypal-fee-calculator" }] }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <CalculatorShell
          title="PayPal Fee Calculator 2026 — Calculate Fees, Net Payout & Compare vs Stripe"
          subtitle="Calculate exact PayPal fees, net payout, and compare vs Stripe for any transaction."
          schemaData={schemaData}
          results={
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <ResultCard
                label={mode === "normal" ? "Transaction Amount" : "Amount Customer Pays"}
                value={fmt(mode === "normal" ? amt : chargeAmount || 0)}
              />
              <ResultCard label="PayPal Fee" value={fmt(paypalFee)} sub={`${effectiveRate.toFixed(2)}% effective rate`} />
              <ResultCard label={mode === "normal" ? "Your Net Payout" : "You Net"} value={fmt(netPayout)} />
              {mode === "reverse" && chargeAmount !== null && (
                <ResultCard label="Amount to Charge" value={fmt(chargeAmount)} sub={`To net ${fmt(amt)}`} />
              )}
              <div className="col-span-2 sm:col-span-3 border-t border-slate-700 pt-3 mt-2">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Stripe Comparison</p>
              </div>
              <ResultCard label="Stripe Fee" value={fmt(stripeFee)} sub="2.9% + $0.30" />
              <ResultCard label="Stripe Net Payout" value={fmt(stripeNet)} />
              <div
                className={`p-3 rounded-lg border ${
                  diff >= 0
                    ? "bg-green-900/30 border-green-700 text-green-300"
                    : "bg-orange-900/30 border-orange-700 text-orange-300"
                } col-span-2 sm:col-span-3 text-center text-sm font-medium`}
              >
                {diff >= 0
                  ? `✅ PayPal saves you ${fmt(diff)} vs Stripe on this transaction`
                  : `⚠️ Stripe saves you ${fmt(Math.abs(diff))} vs PayPal on this transaction`}
              </div>
            </div>
          }
        >
          <div className="space-y-6">
            <InputField
              label={mode === "normal" ? "Transaction Amount ($)" : "Desired Net Payout ($)"}
              value={amount}
              onChange={setAmount}
            />
            <SelectField
              label="Transaction Type"
              value={txnType}
              onChange={setTxnType}
              options={TXN_TYPES}
            />
            <div>
              <label className="block text-sm text-slate-300 mb-2">Calculation Mode</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="normal"
                    checked={mode === "normal"}
                    onChange={() => setMode("normal")}
                    className="accent-teal-500"
                  />
                  <span className="text-sm">Calculate fee on amount</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="reverse"
                    checked={mode === "reverse"}
                    onChange={() => setMode("reverse")}
                    className="accent-teal-500"
                  />
                  <span className="text-sm">Find amount to charge to net my payout</span>
                </label>
              </div>
            </div>
          </div>
        </CalculatorShell>

        <AdSlot />

        <section className="max-w-4xl mx-auto px-4 py-12 seo-content">
          {seoContent}
          <Disclaimer />
        </section>
      </main>
      <Footer />
    </>
  );
}
