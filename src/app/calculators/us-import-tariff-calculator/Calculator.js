"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(2) + "%";

export default function Calculator() {
  const [productValue, setProductValue] = useState("");
  const [country, setCountry] = useState("china");
  const [category, setCategory] = useState("general");
  const [shipping, setShipping] = useState("");
  const [insurance, setInsurance] = useState("");

  const prodVal = parseFloat(productValue) || 0;
  const shipCost = parseFloat(shipping) || 0;
  const insCost = parseFloat(insurance) || 0;

  // Base tariff rates by country (2026)
  const baseRates = {
    china: 0.20,
    uk: 0.035,
    usmca: 0,
    eu: 0.035,
    india: 0.055,
    vietnam: 0.10,
    other: 0.10,
  };

  // Section 232 surcharge by product category
  const section232Rates = {
    general: 0,
    steel: 0.50,
    electronics: 0,
    apparel: 0,
    auto: 0.25,
    pharma: 0,
  };

  const baseRate = baseRates[country] || 0;
  const section232Rate = section232Rates[category] || 0;

  const customsValue = prodVal + shipCost + insCost;
  const importDuty = customsValue * (baseRate + section232Rate);

  // MPF: 0.3464% of customs value, min $31.67, max $614.35
  const mpfRaw = customsValue * 0.003464;
  const mpf = Math.min(614.35, Math.max(31.67, mpfRaw));

  // HMF: 0.125% of customs value
  const hmf = customsValue * 0.00125;

  const totalDuties = importDuty + mpf + hmf;
  const totalLandedCost = customsValue + totalDuties;
  const effectiveDutyRate = prodVal > 0 ? (totalDuties / prodVal) * 100 : 0;

  // China warning: rates increase to 44%+ on Nov 10, 2026
  const isChina = country === "china";

  const schemaData = {
    name: "US Import Tariff Calculator",
    description: "Calculate US import duties, tariffs and landed costs instantly. Updated with 2026 Section 232, Section 301 and 10% global surcharge rates.",
    url: "https://www.themetricapp.com/calculators/us-import-tariff-calculator",
  };

  return (
    <CalculatorShell
      title="US Import Tariff Calculator (2026)"
      subtitle="Calculate US import duties, Section 232 tariffs, MPF, HMF, and total landed cost for any product from any country in 2026."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Customs Value" value={fmt(customsValue)} sub="Product + Shipping + Insurance" />
          <ResultCard label="Base Import Duty" value={fmt(importDuty)} sub={`${(baseRate * 100).toFixed(1)}% rate`} />
          <ResultCard label="Section 232 Surcharge" value={fmt(customsValue * section232Rate)} sub={section232Rate > 0 ? `+${(section232Rate * 100).toFixed(0)}% surcharge` : "Not applicable"} />
          <ResultCard label="MPF" value={fmt(mpf)} sub="0.3464% ($31.67 min)" />
          <ResultCard label="HMF" value={fmt(hmf)} sub="0.125% of customs value" />
          <ResultCard label="Total Duties & Fees" value={fmt(totalDuties)} />
          <ResultCard label="Total Landed Cost" value={fmt(totalLandedCost)} highlight />
          <ResultCard label="Effective Duty Rate" value={pct(effectiveDutyRate)} />
          <ResultCard label="Duty Breakdown" value={`${fmt(importDuty)} + ${fmt(mpf)} + ${fmt(hmf)}`} sub="Duty + MPF + HMF" />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="space-y-5">
        {isChina && (
          <div className="rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-4 text-sm text-[#92400E]">
            <strong>⚠️ China Alert:</strong> Tariff rates on Chinese imports are scheduled to increase to 44%+ on November 10, 2026. Plan your imports and inventory accordingly. Use this calculator with the current 20% base rate for now.
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField id="productValue" label="Product Value" value={productValue} onChange={(e) => setProductValue(e.target.value)} prefix="$" placeholder="10000" step="0.01" helpText="Customs value of the goods" />
          <SelectField
            id="country"
            label="Country of Origin"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            options={[
              { value: "china", label: "China — 20% tariff" },
              { value: "uk", label: "UK — 3.5% tariff" },
              { value: "usmca", label: "Canada/Mexico (USMCA) — 0% tariff" },
              { value: "eu", label: "EU — 3.5% tariff" },
              { value: "india", label: "India — 5.5% tariff" },
              { value: "vietnam", label: "Vietnam — 10% tariff" },
              { value: "other", label: "Other — 10% tariff" },
            ]}
          />
          <SelectField
            id="category"
            label="Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={[
              { value: "general", label: "General Goods — 0% surcharge" },
              { value: "steel", label: "Steel/Aluminum — +50% Sec 232" },
              { value: "electronics", label: "Electronics — 0% surcharge" },
              { value: "apparel", label: "Apparel — 0% surcharge" },
              { value: "auto", label: "Auto Parts — +25% Sec 232" },
              { value: "pharma", label: "Pharmaceuticals — 0% surcharge" },
            ]}
          />
          <InputField id="shipping" label="Shipping Cost" value={shipping} onChange={(e) => setShipping(e.target.value)} prefix="$" placeholder="1200" step="0.01" helpText="Ocean/air freight to US port" />
          <InputField id="insurance" label="Insurance Cost" value={insurance} onChange={(e) => setInsurance(e.target.value)} prefix="$" placeholder="150" step="0.01" helpText="Cargo insurance premium" />
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the US Import Tariff Calculator</h2>
      <p>
        Importing goods into the United States in 2026 is more complex than ever. With the Trump administration&apos;s trade policies creating new tariff structures — including the 10% global baseline tariff, country-specific reciprocal rates, and aggressive Section 232 national security tariffs — importers need accurate, real-time landed cost calculations to protect their profit margins. This calculator gives you an instant, itemized breakdown of every fee your shipment will incur at the US border.
      </p>
      <p>
        To use it, start by entering the <strong>Product Value</strong> — this is the price you paid for the goods, also known as the transaction value. Add your <strong>Shipping Cost</strong> (freight charges to the US port of entry) and <strong>Insurance Cost</strong> (cargo insurance premium). Then select the <strong>Country of Origin</strong> and <strong>Product Category</strong> — these two factors determine your base tariff rate and any additional Section 232 surcharges. The calculator instantly computes your Customs Value, Import Duty, Merchandise Processing Fee (MPF), Harbor Maintenance Fee (HMF), and your total Landed Cost.
      </p>
      <p>
        This tool is essential for e-commerce importers calculating Amazon FBA landed costs, small businesses sourcing products internationally, customs brokers providing client estimates, and eBay or Shopify sellers evaluating whether imported products will be profitable after all duties and fees.
      </p>

      <h2>Detailed Tariff & Fee Formula Breakdown</h2>
      <h3>Base Tariff Rates by Country (2026)</h3>
      <p>
        The base tariff rate varies dramatically by country of origin, reflecting the current administration&apos;s trade policy priorities. <strong>China</strong> faces the highest base rate at <strong>20%</strong> — a combination of Section 301 tariffs from the first Trump term, the 10% global baseline tariff implemented in April 2025, and reciprocal China-specific rates. <strong>Vietnam</strong> and <strong>Other</strong> countries face <strong>10%</strong> base rates. The <strong>UK</strong> and <strong>EU</strong> face lower <strong>3.5%</strong> rates reflecting negotiated trade relationships. <strong>India</strong> falls in the middle at <strong>5.5%</strong>. <strong>Canada and Mexico</strong> are at <strong>0%</strong> under the USMCA agreement — but only for goods that meet USMCA rules of origin. Non-USMCA-compliant goods from Canada or Mexico face the &quot;Other&quot; rate of 10%.
      </p>
      <h3>Section 232 National Security Surcharges</h3>
      <p>
        In addition to base tariffs, the US applies Section 232 &quot;national security&quot; tariffs on specific product categories. <strong>Steel and aluminum products</strong> face a staggering <strong>+50% surcharge</strong> on top of the base tariff rate. <strong>Automotive parts</strong> (including finished vehicles and key components) face a <strong>+25% surcharge</strong>. <strong>Pharmaceuticals</strong> currently have a 0% surcharge, but this is scheduled to increase to 100% effective July 31, 2026 — a massive change that will reshape the pharmaceutical supply chain. <strong>Electronics, apparel, and general goods</strong> currently have no Section 232 surcharge. The formula is: <strong>Duty Rate = Base Tariff Rate + Section 232 Surcharge Rate</strong>. So Chinese steel faces 20% + 50% = 70% total duty rate.
      </p>
      <h3>Merchandise Processing Fee (MPF)</h3>
      <p>
        The MPF is a customs user fee applied to all formal entries into the US. The rate is <strong>0.3464% of the customs value</strong> (product value + shipping + insurance), with a <strong>minimum of $31.67</strong> and a <strong>maximum of $614.35</strong> per entry. For a shipment with a customs value of $10,000: MPF = $10,000 × 0.003464 = $34.64 (above the $31.67 minimum, so the full calculated amount applies). For a $5,000 shipment: MPF = $5,000 × 0.003464 = $17.32 — but the minimum of $31.67 applies, so you pay $31.67. For a $200,000 shipment: MPF = $200,000 × 0.003464 = $692.80 — but the maximum of $614.35 applies, capping the fee.
      </p>
      <h3>Harbor Maintenance Fee (HMF)</h3>
      <p>
        The HMF is assessed on most commercial cargo shipments arriving at US ports by vessel. The rate is <strong>0.125% of the customs value</strong>, applied to the value of the cargo. There is no minimum or maximum HMF. For a $10,000 shipment: HMF = $10,000 × 0.00125 = $12.50. This fee funds the maintenance and operation of US harbors and ports, including dredging and infrastructure improvements. Note that HMF only applies to ocean freight shipments — air freight entries are not subject to HMF, though they still incur MPF.
      </p>
      <h3>Total Landed Cost Calculation</h3>
      <p>
        Your <strong>Total Landed Cost</strong> is the true cost of getting your product from the factory to your warehouse. The formula: <strong>Landed Cost = Product Value + Shipping + Insurance + Import Duty + MPF + HMF</strong>. This is the number that matters for your pricing, profit margins, and break-even analysis. If your product costs $10,000 FOB China, with $1,200 shipping, $150 insurance, at 20% tariff, your landed cost is $10,000 + $1,200 + $150 + $2,270 + $39.34 + $14.19 = <strong>$13,673.53</strong>. Your effective duty rate on the product value alone is 22.7% — but on the full landed cost it is 16.6%. This distinction is critical for accurate pricing.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📋 Data Sources & Methodology</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm">
          <li><strong>US Customs and Border Protection (CBP):</strong> Official tariff & duty information — <a href="https://www.cbp.gov/trade" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline hover:text-teal-300">cbp.gov/trade</a></li>
          <li><strong>US International Trade Commission (ITC):</strong> Tariff database and HTS codes — <a href="https://www.usitc.gov/tariff" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline hover:text-teal-300">usitc.gov/tariff</a></li>
          <li><strong>Section 232 Tariffs:</strong> Department of Commerce national security tariff reports — <a href="https://www.commerce.gov/issues/trade" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline hover:text-teal-300">commerce.gov</a></li>
          <li><strong>Harmonized Tariff Schedule (HTS):</strong> Full US tariff schedule — <a href="https://hts.usitc.gov/" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline hover:text-teal-300">hts.usitc.gov</a></li>
        </ul>
      </div>

      <div className="mt-8 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📅 Last Updated</p>
        <p className="text-slate-300 text-sm">
          <strong>Last Updated:</strong> May 2026 — Our import tariff data is sourced from official CBP, ITC, and DOC publications. Tariff rates are updated to reflect the latest trade policy changes including the 10% global baseline, reciprocal China tariffs, and Section 232 surcharges. Scheduled rate increases (e.g., China to 44%+ on Nov 10, 2026; Pharma to 100% on July 31, 2026) are noted but not yet reflected in the base calculation.
        </p>
      </div>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <p>
        The current effective base tariff rate on Chinese imports in 2026 is <strong>20%</strong>. This includes the original Section 301 tariffs (typically 7.5–25% depending on the product list), the 10% global baseline tariff implemented in April 2025, and additional reciprocal China-specific tariffs imposed in 2025. However, the rate is scheduled to increase dramatically to <strong>44%+ on November 10, 2026</strong>, under the reciprocal tariff framework. This will make Chinese imports significantly more expensive — a product that costs $10,000 today would incur $4,400+ in duties after the increase, versus $2,000 today. Importers should front-load orders before the deadline and explore alternative sourcing from Vietnam, India, or USMCA countries.
      </p>
      <h3>Are Canada and Mexico exempt from US tariffs in 2026?</h3>
      <p>
        <strong>Yes</strong> — goods that qualify under the USMCA (United States-Mexico-Canada Agreement) rules of origin are subject to <strong>0% base tariff</strong>. To qualify, goods must contain a sufficient percentage of North American content (typically 60–75% depending on the product category) and meet specific production requirements. However, goods that <strong>do not</strong> qualify for USMCA treatment face the &quot;Other&quot; rate of 10%. Additionally, there have been temporary tariff actions on Canadian and Mexican goods in 2025–2026 related to fentanyl trafficking and immigration enforcement — these are separate from the trade tariff structure. Always verify your product&apos;s USMCA eligibility with a customs broker before assuming duty-free entry.
      </p>
      <h3>What is the Section 232 tariff and who does it affect?</h3>
      <p>
        Section 232 of the Trade Expansion Act of 1962 allows the US President to impose tariffs on imports that threaten national security. In 2026, these tariffs primarily affect <strong>steel and aluminum</strong> (additional 50% surcharge) and <strong>automotive parts and finished vehicles</strong> (additional 25% surcharge). The scope of Section 232 has expanded significantly under the current administration. For example, a Chinese steel product faces a combined rate of 70% (20% base + 50% Section 232). An EU auto part faces 28.5% (3.5% base + 25% Section 232). Pharmaceuticals are exempt for now but will face a 100% Section 232 surcharge starting July 31, 2026. Importers in these categories must factor these surcharges into their cost models or the business becomes unviable.
      </p>
      <h3>What are MPF and HMF fees?</h3>
      <p>
        <strong>MPF (Merchandise Processing Fee)</strong> is a customs user fee of 0.3464% of the customs value, with a minimum of $31.67 and a maximum of $614.35 per formal entry. It covers the cost of CBP (Customs and Border Protection) processing your import paperwork. <strong>HMF (Harbor Maintenance Fee)</strong> is 0.125% of the customs value for ocean freight shipments. It funds US harbor maintenance, dredging, and port infrastructure. HMF only applies to cargo arriving by vessel — air freight and truck shipments are exempt. Both fees are non-negotiable and apply to most commercial import shipments regardless of tariff rates. Together, they add approximately 0.47% to your effective duty rate on ocean shipments.
      </p>
      <h3>How do I calculate landed cost for Amazon FBA?</h3>
      <p>
        Amazon FBA sellers importing from China need to calculate their <strong>total landed cost</strong> to ensure profitability. Start with the product cost (FOB price from your supplier), add shipping (ocean freight or air freight to a US port), import duties (20% from China), MPF ($31.67 minimum or 0.3464%), HMF (0.125% for ocean freight), customs broker fees (typically $100–$200 per entry), drayage (trucking from port to warehouse, $200–$500), Amazon FBA inbound placement fees, and the FBA storage and fulfillment fees. A $10 product purchased from China at $8 FOB can easily have a total landed cost of $12–$15 by the time it reaches an Amazon fulfillment center — that 50–87% markup over the purchase price must be accounted for in your pricing strategy. Use our <a href="/calculators/ecommerce-net-profit-margin">E-Commerce Profit Margin Calculator</a> to model the full impact.
      </p>
      <h3>Will China tariff rates change after November 2026?</h3>
      <p>
        <strong>Yes</strong> — China tariff rates are scheduled to increase to <strong>44%+ on November 10, 2026</strong> under the reciprocal tariff framework. This is a phased increase from the current 20% base rate. The exact rate may vary by product category based on ongoing trade negotiations and legal challenges. After November 10, a $10,000 shipment from China would incur approximately $4,400+ in duties alone, compared to $2,000 today. This is a 120% increase in tariff costs. Importers who rely heavily on Chinese manufacturing should immediately begin: (1) diversifying suppliers to Vietnam, India, Mexico, or Turkey, (2) building inventory ahead of the deadline, (3) negotiating a supplier-funded tariff sharing arrangement, and (4) evaluating whether price increases can sustain their margins. After the increase, importing from Vietnam (10%), India (5.5%), or Mexico (0% under USMCA) will be significantly more attractive than China for most products.
      </p>
      <h3>How do tariffs affect eBay and Shopify sellers?</h3>
      <p>
        Tariffs directly impact the cost of goods sold for any seller importing products. An eBay or Shopify seller importing a widget from China at $10 with $2 shipping faces a current landed cost of approximately $15.20 after the 20% tariff. After November 2026, that same widget would cost approximately $17.70 landed — a 16% increase in cost. This forces sellers to either raise prices (risking lower conversion rates), reduce profit margins (risking business viability), or find alternative sourcing. The impact is most severe for sellers in competitive categories where price increases are difficult to pass on. For a complete picture of your profitability including tariffs, platform fees, and payment processing costs, use our <a href="/calculators/ebay-seller-fee-profit">eBay Seller Fee & Profit Calculator</a> and <a href="/calculators/stripe-fee-merchant-calculator">Stripe Fee Calculator</a> alongside this tariff calculator.
      </p>
      <h3>What products are completely exempt from US tariffs?</h3>
      <p>
        Certain categories of imports are exempt from US tariffs under various trade programs and legal frameworks. Goods imported from <strong>USMCA-qualifying</strong> Canadian and Mexican sources are exempt from base tariffs. Products imported under the <strong>Generalized System of Preferences (GSP)</strong> from designated beneficiary countries may qualify for duty-free entry, though China is not a GSP beneficiary. <strong>Section 321 de minimis shipments</strong> (value under $800) enter the US duty-free — this is why many direct-to-consumer e-commerce imports from China use this exemption, though there is ongoing discussion about lowering the de minimis threshold. <strong>Personal effects and household goods</strong> imported as part of a relocation are generally exempt. <strong>Returned US goods</strong> (goods manufactured in the US and returned without being advanced in value abroad) enter duty-free. <strong>Diplomatic shipments</strong> and shipments to certain government agencies may also be exempt. For commercial shipments over $800, however, very few exemptions apply, and most commercial goods from non-preferred trading partners face at least the 10% baseline tariff.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed examples, strategies, and expert tips on US import tariffs, read our full guide:{" "}
          <a href="/blog/us-import-tariff-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            US Import Tariff Calculator 2026 Guide
          </a>
          . This companion article covers additional tariff scenarios, compliance strategies, and real-world case studies not included in the calculator.
        </p>
      </div>

      <h2>Related Tools</h2>
      <p>
        Check out these other helpful calculators for importers and e-commerce sellers:
      </p>
      <ul>
        <li><a href="/calculators/ebay-seller-fee-profit">eBay Seller Fee &amp; Profit Calculator</a> — Calculate eBay final value fees and your true net profit.</li>
        <li><a href="/calculators/ecommerce-net-profit-margin">E-Commerce Profit Margin Calculator</a> — Calculate gross profit, net profit, and ROI for any product you sell online.</li>
        <li><a href="/calculators/stripe-fee-merchant-calculator">Stripe Fee &amp; Merchant Calculator</a> — Calculate Stripe processing fees for domestic and international payments.</li>
      </ul>

      <RelatedCalculators currentPage="us-import-tariff-calculator" />

      </>
  );
}
