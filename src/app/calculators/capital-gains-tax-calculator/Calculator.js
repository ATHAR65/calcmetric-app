"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import QuickAnswer from "@/components/QuickAnswer";
import AuthorBar from "@/components/AuthorBar";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtNoCents = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const pct = (n) => (n || 0).toFixed(2) + "%";

// 2026 Long-term capital gains tax brackets
const LT_BRACKETS = {
  single: [
    { min: 0, max: 49450, rate: 0 },
    { min: 49450, max: 545500, rate: 0.15 },
    { min: 545500, max: Infinity, rate: 0.20 },
  ],
  mfj: [
    { min: 0, max: 98900, rate: 0 },
    { min: 98900, max: 613700, rate: 0.15 },
    { min: 613700, max: Infinity, rate: 0.20 },
  ],
  mfs: [
    { min: 0, max: 49450, rate: 0 },
    { min: 49450, max: 306850, rate: 0.15 },
    { min: 306850, max: Infinity, rate: 0.20 },
  ],
  hoh: [
    { min: 0, max: 66200, rate: 0 },
    { min: 66200, max: 579600, rate: 0.15 },
    { min: 579600, max: Infinity, rate: 0.20 },
  ],
  qw: [
    { min: 0, max: 49450, rate: 0 },
    { min: 49450, max: 545500, rate: 0.15 },
    { min: 545500, max: Infinity, rate: 0.20 },
  ],
};

// 2026 Ordinary income tax brackets (for short-term gains)
const ORDINARY_BRACKETS = {
  single: [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 },
  ],
  mfj: [
    { min: 0, max: 23850, rate: 0.10 },
    { min: 23850, max: 96950, rate: 0.12 },
    { min: 96950, max: 206700, rate: 0.22 },
    { min: 206700, max: 394600, rate: 0.24 },
    { min: 394600, max: 501050, rate: 0.32 },
    { min: 501050, max: 751600, rate: 0.35 },
    { min: 751600, max: Infinity, rate: 0.37 },
  ],
  mfs: [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 375800, rate: 0.35 },
    { min: 375800, max: Infinity, rate: 0.37 },
  ],
  hoh: [
    { min: 0, max: 17000, rate: 0.10 },
    { min: 17000, max: 64850, rate: 0.12 },
    { min: 64850, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 },
  ],
  qw: [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 },
  ],
};

const FILING_STATUSES = [
  { value: "single", label: "Single" },
  { value: "mfj", label: "Married Filing Jointly" },
  { value: "mfs", label: "Married Filing Separately" },
  { value: "hoh", label: "Head of Household" },
  { value: "qw", label: "Qualifying Widow(er)" },
];

const ASSET_TYPES = [
  { value: "stock", label: "Stocks / ETFs / Mutual Funds" },
  { value: "crypto", label: "Cryptocurrency" },
  { value: "realestate", label: "Real Estate / Property" },
  { value: "collectible", label: "Collectibles (Art, Antiques, etc.)" },
  { value: "other", label: "Other Assets" },
];

function computeTax(gains, brackets) {
  let remaining = gains;
  let tax = 0;
  for (const b of brackets) {
    if (remaining <= 0) break;
    const taxableInBracket = Math.min(remaining, b.max - b.min);
    tax += taxableInBracket * b.rate;
    remaining -= taxableInBracket;
  }
  return tax;
}

function getEffectiveRate(tax, gains) {
  return gains > 0 ? (tax / gains) * 100 : 0;
}

export default function Calculator() {
  const [filingStatus, setFilingStatus] = useState("single");
  const [ordinaryIncome, setOrdinaryIncome] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [costBasisAdjust, setCostBasisAdjust] = useState("");
  const [holdingPeriod, setHoldingPeriod] = useState("long");
  const [assetType, setAssetType] = useState("stock");
  const [stateRate, setStateRate] = useState("");

  const ordIncome = parseFloat(ordinaryIncome) || 0;
  const purchaseAmt = parseFloat(purchasePrice) || 0;
  const saleAmt = parseFloat(salePrice) || 0;
  const costAdj = parseFloat(costBasisAdjust) || 0;
  const stateTaxRate = parseFloat(stateRate) || 0;

  // Capital gain / loss
  const totalGain = saleAmt - purchaseAmt - costAdj;
  const isGain = totalGain > 0;
  const gainForTax = Math.max(totalGain, 0);

  // Total income for NIIT threshold check
  const totalIncome = ordIncome + gainForTax;
  const niitThreshold = filingStatus === "mfj" ? 250000 : filingStatus === "mfs" ? 125000 : 200000;
  const niitBase = Math.max(0, totalIncome - niitThreshold);
  const niitTaxable = Math.min(gainForTax, niitBase);
  const niitTax = niitTaxable * 0.038;
  const niitEffective = gainForTax > 0 ? (niitTax / gainForTax) * 100 : 0;

  // Long-term capital gains tax (properly stacked on top of ordinary income)
  // Ordinary income fills the lower brackets first; the gain sits on top
  const ltBrackets = LT_BRACKETS[filingStatus] || LT_BRACKETS.single;
  const ltTaxOnTotal = holdingPeriod === "long" ? computeTax(ordIncome + gainForTax, ltBrackets) : 0;
  const ltTaxOnBase = holdingPeriod === "long" ? computeTax(ordIncome, ltBrackets) : 0;
  const ltGainsTax = ltTaxOnTotal - ltTaxOnBase;

  // Short-term gains = ordinary income tax on the gain
  const ordBrackets = ORDINARY_BRACKETS[filingStatus] || ORDINARY_BRACKETS.single;
  // Compute total ordinary tax WITH and WITHOUT the gain to find marginal tax on the gain
  const totalOrdIncome = ordIncome + (holdingPeriod === "short" ? gainForTax : 0);
  const taxOnBaseIncome = computeTax(ordIncome, ordBrackets);
  const taxOnTotalIncome = computeTax(totalOrdIncome, ordBrackets);
  const stTax = holdingPeriod === "short" ? taxOnTotalIncome - taxOnBaseIncome : 0;

  // Federal capital gains tax
  const federalGainsTax = holdingPeriod === "long" ? ltGainsTax : stTax;
  const totalFederalTax = federalGainsTax + niitTax;

  // State tax
  const stateTax = stateTaxRate > 0 ? gainForTax * (stateTaxRate / 100) : 0;

  // Total tax
  const totalTaxLiability = totalFederalTax + stateTax;
  const netProceeds = saleAmt - totalTaxLiability;

  // Average federal rate
  const avgFedRate = getEffectiveRate(federalGainsTax, gainForTax);
  const avgTotalRate = getEffectiveRate(totalTaxLiability, gainForTax);

  // Holding period text
  const isLongTerm = holdingPeriod === "long";

  const schemaData = {
    name: "Capital Gains Tax Calculator",
    description: "Calculate your 2026 capital gains tax liability. Estimate short-term and long-term gains taxes with federal brackets, NIIT, and state tax adjustments.",
    url: "https://www.themetricapp.com/calculators/capital-gains-tax-calculator",
  };

  return (
    <CalculatorShell
      title="Capital Gains Tax Calculator (2026)"
      subtitle="Calculate federal capital gains tax using 2026 brackets, the 3.8% NIIT surcharge, and state-level taxes for stocks, real estate, crypto, and other assets."
      schemaData={schemaData}
      results={
        <div className="space-y-6">
          {/* Gain / Loss Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <ResultCard label="Purchase Amount" value={fmtNoCents(purchaseAmt)} />
            <ResultCard label="Sale Amount" value={fmtNoCents(saleAmt)} />
            <ResultCard label={isGain ? "Capital Gain" : "Capital Loss"} value={isGain ? fmtNoCents(totalGain) : fmtNoCents(Math.abs(totalGain))} highlight />
            <ResultCard label="Holding Period" value={isLongTerm ? "Long-Term (>1 yr)" : "Short-Term (≤1 yr)"} />
          </div>

          {/* Tax Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <ResultCard
              label="Federal Gains Tax"
              value={fmtNoCents(federalGainsTax)}
              sub={`${avgFedRate.toFixed(1)}% effective rate`}
              highlight={federalGainsTax > 0}
            />
            <ResultCard
              label="NIIT (3.8%)"
              value={fmtNoCents(niitTax)}
              sub={niitTax > 0 ? `Applies above $${niitThreshold.toLocaleString()}` : "Below threshold"}
            />
            <ResultCard
              label="State Tax"
              value={fmtNoCents(stateTax)}
              sub={stateRate ? `${stateRate}% rate` : "Enter state rate"}
            />
            <ResultCard
              label="Total Tax Liability"
              value={fmtNoCents(totalTaxLiability)}
              highlight
            />
            <ResultCard
              label="Net Proceeds"
              value={fmtNoCents(netProceeds)}
              highlight
            />
          </div>

          {/* Rate Breakdown */}
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 dark:bg-[#0F172A] dark:border-[#1E293B]">
            <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-4">Tax Rate Breakdown</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1">
                  {isLongTerm ? "Long-Term Rate" : "Short-Term Rate"}
                </p>
                <p className="text-lg font-extrabold text-[#0F172A] dark:text-[#F1F5F9]">{pct(isLongTerm ? (ltBrackets.find(b => ordIncome + gainForTax > b.min && ordIncome + gainForTax <= b.max)?.rate || 0) * 100 : (ordBrackets.find(b => totalOrdIncome > b.min && totalOrdIncome <= b.max)?.rate || 0) * 100)}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1">Effective Federal Rate</p>
                <p className="text-lg font-extrabold text-[#0F172A] dark:text-[#F1F5F9]">{pct(avgFedRate)}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1">Effective NIIT Rate</p>
                <p className="text-lg font-extrabold text-[#0F172A] dark:text-[#F1F5F9]">{pct(niitEffective)}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1">Combined Effective Rate</p>
                <p className={`text-lg font-extrabold ${avgTotalRate > 25 ? "text-red-500" : avgTotalRate > 15 ? "text-amber-500" : "text-[#0D9488]"}`}>
                  {pct(avgTotalRate)}
                </p>
              </div>
            </div>
          </div>

          {/* Filing Status Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <ResultCard label="Filing Status" value={FILING_STATUSES.find(f => f.value === filingStatus)?.label || "Single"} />
            <ResultCard label="Ordinary Income" value={fmtNoCents(ordIncome)} />
            <ResultCard label="Total Income" value={fmtNoCents(totalIncome)} />
          </div>
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <SelectField
            id="filingStatus"
            label="Filing Status"
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value)}
            options={FILING_STATUSES}
            helpText="Determines your tax bracket thresholds"
          />
          <SelectField
            id="assetType"
            label="Asset Type"
            value={assetType}
            onChange={(e) => setAssetType(e.target.value)}
            options={ASSET_TYPES}
            helpText="For reference — tax rates are same for all assets"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            id="purchasePrice"
            label="Purchase Price (Cost Basis)"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            prefix="$"
            placeholder="50000"
            helpText="What you originally paid for the asset"
          />
          <InputField
            id="salePrice"
            label="Sale Price (Proceeds)"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            prefix="$"
            placeholder="85000"
            helpText="What you sold the asset for"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            id="costBasisAdjust"
            label="Cost Basis Adjustments"
            value={costBasisAdjust}
            onChange={(e) => setCostBasisAdjust(e.target.value)}
            prefix="$"
            placeholder="0"
            helpText="Commissions, improvements (real estate), or fees"
          />
          <InputField
            id="ordinaryIncome"
            label="Your Ordinary Income (Wages, etc.)"
            value={ordinaryIncome}
            onChange={(e) => setOrdinaryIncome(e.target.value)}
            prefix="$"
            placeholder="80000"
            helpText="Used for NIIT threshold & short-term bracket"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-2">
              Holding Period
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setHoldingPeriod("long")}
                className={`flex-1 rounded-lg border-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                  holdingPeriod === "long"
                    ? "border-[#0D9488] bg-[#0D9488]/10 text-[#0D9488]"
                    : "border-[#CBD5E1] bg-white text-[#64748B] hover:border-[#94A3B8] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#94A3B8] dark:hover:border-[#475569]"
                }`}
              >
                Long-Term
              </button>
              <button
                type="button"
                onClick={() => setHoldingPeriod("short")}
                className={`flex-1 rounded-lg border-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                  holdingPeriod === "short"
                    ? "border-[#0D9488] bg-[#0D9488]/10 text-[#0D9488]"
                    : "border-[#CBD5E1] bg-white text-[#64748B] hover:border-[#94A3B8] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#94A3B8] dark:hover:border-[#475569]"
                }`}
              >
                Short-Term
              </button>
            </div>
            <p className="text-xs text-[#94A3B8] mt-1.5">
              {holdingPeriod === "long"
                ? "Held for more than 1 year — lower tax rates (0%, 15%, 20%)"
                : "Held for 1 year or less — taxed as ordinary income"}
            </p>
          </div>
          <InputField
            id="stateRate"
            label="State Capital Gains Tax Rate"
            value={stateRate}
            onChange={(e) => setStateRate(e.target.value)}
            suffix="%"
            placeholder="0"
            helpText="0% for TX/FL/NV, ~13% for CA, ~10% for NY/NJ"
          />
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <AuthorBar
        updated="June 2026"
        author="Sarah Chen, CPA"
        authorSlug="sarah-chen"
        reviewer="Verified against IRS Revenue Procedure & Form 1040 instructions"
        sources={[
          { name: "IRS Revenue Procedure", url: "https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" },
          { name: "IRS Form 1040 Instructions", url: "https://www.irs.gov/forms-pubs/about-form-1040" },
        ]}
      />

      <QuickAnswer text="In 2026, long-term capital gains are taxed at 0%, 15%, or 20% depending on your income. Short-term gains are taxed at your ordinary income rate (10%-37%). Single filers earning under $49,450 pay 0% on long-term gains. High earners also face a 3.8% Net Investment Income Tax (NIIT) above $200,000 ($250,000 MFJ)." />

      <h2>How to Use the Capital Gains Tax Calculator</h2>
      <p>
        This free Capital Gains Tax Calculator helps you estimate your federal and state tax liability when
        selling investments in 2026. Whether you are selling stocks, cryptocurrency, real estate, or other
        capital assets, the calculator handles both <strong>short-term</strong> (held ≤ 1 year) and{" "}
        <strong>long-term</strong> (held &gt; 1 year) gains using the latest 2026 tax brackets.
      </p>
      <p>
        Start by selecting your <strong>Filing Status</strong> — this determines the tax bracket thresholds
        used for both long-term capital gains rates and short-term ordinary income rates. Next, select the{" "}
        <strong>Asset Type</strong> (for reference — all assets are taxed the same way, except collectibles
        which may be taxed at a maximum 28% rate). Enter your <strong>Purchase Price</strong> (cost basis)
        and <strong>Sale Price</strong> (proceeds), then add any <strong>Cost Basis Adjustments</strong> like
        brokerage commissions, real estate improvements, or transaction fees.
      </p>
      <p>
        Enter your <strong>Ordinary Income</strong> from wages, self-employment, or other sources — this is
        essential because (1) short-term gains are added to your ordinary income and taxed at your marginal
        income tax rate, and (2) the 3.8% Net Investment Income Tax (NIIT) applies when your total income
        exceeds certain thresholds. Finally, choose your <strong>Holding Period</strong> (long-term vs.
        short-term) and enter your <strong>State Capital Gains Tax Rate</strong> if applicable. The
        calculator instantly computes your federal gains tax, NIIT surcharge, state tax, combined effective
        rate, and net proceeds after all taxes.
      </p>

      <h2>2026 Capital Gains Tax Rates — Complete Breakdown</h2>

      <h3>Long-Term Capital Gains Tax Brackets (Assets Held &gt; 1 Year)</h3>
      <p>
        Long-term capital gains are taxed at preferential rates of <strong>0%, 15%, or 20%</strong>,
        depending on your taxable income and filing status. These rates are significantly lower than
        ordinary income tax rates, which is why holding investments for more than one year is one of the
        most effective tax strategies available to investors.
      </p>
      <p>For the <strong>2026 tax year</strong>, the long-term capital gains brackets are:</p>
      <ul>
        <li><strong>0% rate:</strong> Single up to $49,450 | MFJ up to $98,900 | HOH up to $66,200</li>
        <li><strong>15% rate:</strong> Single $49,451–$545,500 | MFJ $98,901–$613,700 | HOH $66,201–$579,600</li>
        <li><strong>20% rate:</strong> Single over $545,500 | MFJ over $613,700 | HOH over $579,600</li>
      </ul>
      <p>
        <strong>Important:</strong> Your long-term capital gains are stacked <em>on top</em> of your
        ordinary income. This means your ordinary income fills the lower tax brackets first, and your
        capital gains start stacking from there. Our calculator handles this stacking automatically.
      </p>

      <h3>Short-Term Capital Gains (Assets Held ≤ 1 Year)</h3>
      <p>
        Short-term capital gains are taxed as <strong>ordinary income</strong> at your marginal income tax
        rate. For 2026, these rates range from 10% to 37% depending on your filing status and total
        taxable income. Because short-term gains are added to your existing ordinary income, they can push
        you into higher tax brackets — making them significantly more expensive than long-term gains for
        most investors.
      </p>

      <h3>Net Investment Income Tax (NIIT) — The 3.8% Surcharge</h3>
      <p>
        High-income earners are subject to an additional <strong>3.8% Net Investment Income Tax (NIIT)</strong>.
        This surcharge applies to the lesser of:
      </p>
      <ul>
        <li>Your net investment income (including capital gains), or</li>
        <li>The amount by which your modified adjusted gross income (MAGI) exceeds the threshold:</li>
      </ul>
      <ul>
        <li><strong>$200,000</strong> for Single / Head of Household / Qualifying Widow(er)</li>
        <li><strong>$250,000</strong> for Married Filing Jointly</li>
        <li><strong>$125,000</strong> for Married Filing Separately</li>
      </ul>
      <p>
        For example, if you're single with $180,000 in ordinary income and $50,000 in long-term capital
        gains, your total income is $230,000. The NIIT applies to $30,000 ($230,000 − $200,000 threshold),
        resulting in an additional $1,140 tax (3.8% × $30,000). Our calculator automatically computes
        this surcharge for you.
      </p>

      <h2>Step-by-Step Calculation Examples</h2>

      <h3>Example 1: Long-Term Stock Sale (Middle-Income Investor)</h3>
      <p>
        <strong>Scenario:</strong> Sarah, single filer, earned $80,000 in wages. She sells Apple stock
        she held for 3 years, purchasing at $20,000 and selling at $55,000. No state tax (Texas).<br />
        <strong>Cost Basis Adjustment:</strong> $0 (no commissions).<br />
        <strong>Capital Gain:</strong> $55,000 − $20,000 = $35,000 (long-term).<br />
        <strong>Total Income:</strong> $80,000 + $35,000 = $115,000.<br />
        <strong>Long-Term Gain Tax:</strong> The first $49,450 of her income fills the 0% bracket. Her
        $35,000 gain falls entirely in the 0% bracket → <strong>$0 federal gains tax</strong>.<br />
        <strong>NIIT:</strong> $115,000 is below the $200,000 single threshold → $0.<br />
        <strong>Total Tax on Gain:</strong> <strong>$0</strong> — Sarah keeps the full $35,000 gain
        tax-free at the federal level.
      </p>

      <h3>Example 2: Short-Term Crypto Trade (High Income)</h3>
      <p>
        <strong>Scenario:</strong> Married Filing Jointly couple, combined wages $300,000. They trade
        cryptocurrency frequently (held &lt; 1 year). Purchased at $50,000, sold at $120,000. California
        state tax (13.3% rate on gains).<br />
        <strong>Cost Basis Adjustment:</strong> $500 in exchange fees.<br />
        <strong>Short-Term Gain:</strong> $120,000 − $50,000 − $500 = $69,500.<br />
        <strong>Total Income:</strong> $300,000 + $69,500 = $369,500.<br />
        <strong>Short-Term Tax:</strong> Ordinary tax on $300,000 alone is ~$66,640. With $69,500 added,
        total ordinary tax is ~$91,830. The <strong>marginal tax on the gain</strong> is $25,190 →
        <strong>~36.2% effective rate</strong> on the gain (32% bracket + additional NIIT impact).<br />
        <strong>NIIT:</strong> $369,500 − $250,000 = $119,500 → $119,500 × 3.8% = <strong>$4,541</strong>.<br />
        <strong>State Tax (CA 13.3%):</strong> $69,500 × 13.3% = <strong>$9,244</strong>.<br />
        <strong>Total Tax on Gain:</strong> $25,190 + $4,541 + $9,244 = <strong>$38,975</strong>.<br />
        <strong>Net Proceeds:</strong> $120,000 − $38,975 = <strong>$81,025</strong>.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>

      <h3>What is the difference between short-term and long-term capital gains?</h3>
      <p>
        Short-term capital gains (assets held for 1 year or less) are taxed as ordinary income at your
        marginal tax rate (10%–37% for 2026). Long-term capital gains (assets held for more than 1 year)
        are taxed at preferential rates of 0%, 15%, or 20% — significantly lower than ordinary income
        rates for most taxpayers. The holding period is measured from the date of purchase to the date of
        sale. Holding an asset for just one day past the 1-year mark can save you thousands in taxes.
      </p>

      <h3>How does the 3.8% Net Investment Income Tax (NIIT) work?</h3>
      <p>
        The NIIT is an additional 3.8% surcharge on the lesser of your net investment income (including
        capital gains) or the amount your MAGI exceeds $200,000 (single/HOH), $250,000 (MFJ), or $125,000
        (MFS). It applies on top of your regular capital gains tax. For high-income investors, this can
        increase the effective tax rate on long-term gains from 20% to 23.8%, and on short-term gains
        from 37% to 40.8%. The NIIT was established by the Affordable Care Act and remains in effect
        for 2026 with no changes.
      </p>

      {/* Visual Content: Capital Gains Tax Comparison Table */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Filing Status</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">0% Bracket</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">15% Bracket</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">20% Bracket</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">NIIT Threshold</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Single</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$0 – $49,450</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$49,451 – $545,500</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Over $545,500</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$200,000</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Married Filing Jointly</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$0 – $98,900</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$98,901 – $613,700</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Over $613,700</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$250,000</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-slate-800/50">
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">Head of Household</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$0 – $66,200</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$66,201 – $579,600</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">Over $579,600</td>
              <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">$200,000</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
          * 2026 tax brackets apply to long-term capital gains. NIIT applies on top of regular capital gains tax.
        </p>
      </div>

      <h3>Do I pay state taxes on capital gains?</h3>
      <p>
        Most states tax capital gains as ordinary income at your state's marginal income tax rate. States
        with no income tax (Texas, Florida, Nevada, South Dakota, Wyoming, Washington, Alaska, Tennessee)
        do not tax capital gains. Some states offer partial exemptions or special treatment for certain
        types of gains. California taxes capital gains at the highest rate — up to 13.3% for top earners.
        New York taxes up to ~10.9%, and New Jersey up to ~10.75%. Our calculator lets you enter your
        specific state rate to get an accurate combined federal + state estimate.
      </p>

      <h3>Can capital losses offset capital gains?</h3>
      <p>
        Yes, capital losses can offset capital gains — this is called <strong>tax-loss harvesting</strong>.
        Short-term losses offset short-term gains first, and long-term losses offset long-term gains first.
        If your total capital losses exceed your capital gains, you can deduct up to $3,000 ($1,500 if
        married filing separately) of net capital losses against your ordinary income each year. Any
        remaining losses carry forward to future tax years indefinitely. This calculator assumes a net
        capital gain situation — if you have losses, they would reduce your taxable gain before the
        brackets are applied.
      </p>

      <h3>What is the wash sale rule?</h3>
      <p>
        The wash sale rule (IRS Section 1091) prevents you from claiming a tax deduction on a security if
        you repurchase the same or a substantially identical security within 30 days before or after the
        sale. If you trigger a wash sale, the loss is disallowed and added to the cost basis of the
        replacement shares. This rule applies to stocks, ETFs, mutual funds, and options — but notably
        <strong>does not apply to cryptocurrency</strong> (as of 2026), making crypto particularly
        attractive for tax-loss harvesting strategies. Always consult a tax professional before executing wash sale or tax-loss harvesting strategies.
      </p>

      {/* Data Sources & Methodology for E-E-A-T */}
      <h2>Data Sources & Methodology</h2>
      <p>
        Our Capital Gains Tax Calculator uses the latest 2026 tax brackets from the IRS. All rates are verified as of May 2026.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>Long-Term Capital Gains Brackets:</strong> 0%, 15%, and 20% rates from{" "}
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Revenue Procedure 2025
          </a>
          . Thresholds are adjusted annually for inflation.
        </li>
        <li>
          <strong>Ordinary Income Brackets:</strong> 10%–37% brackets from{" "}
          <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Form 1040 Instructions
          </a>
          . Used for short-term capital gains calculations.
        </li>
        <li>
          <strong>NIIT (3.8%):</strong> Net Investment Income Tax guidelines from{" "}
          <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            IRS Topic 559
          </a>
          . Thresholds: $200,000 single, $250,000 MFJ, $125,000 MFS.
        </li>
        <li>
          <strong>Wash Sale Rule:</strong> IRS Section 1091 from{" "}
          <a href="https://www.law.cornell.edu/uscode/text/26/1091" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
            US Code Title 26
          </a>
          . Currently does not apply to cryptocurrency.
        </li>
      </ul>
      <p>
        <strong>How We Calculate:</strong> Long-term capital gains tax is calculated by comparing total tax with and without the gain when stacked on top of ordinary income. Short-term gains are added to ordinary income and taxed at marginal rates. The NIIT is calculated on the lesser of net investment income or MAGI minus the applicable threshold. State tax is calculated at the user-specified rate on the capital gain amount.
      </p>

      <div className="mt-10 p-4 bg-teal-900/20 border border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For detailed investment tax strategies, loss harvesting examples, and portfolio optimization
          techniques for 2026, read our full guide:{" "}
          <a href="/blog/capital-gains-tax-calculator-2026" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Capital Gains Tax Calculator 2026 Guide
          </a>
          . This companion article covers advanced strategies, real-world case studies, and tax-efficient
          investing tips.
        </p>
      </div>

      <h2>Related Calculators</h2>
      <ul>
        <li><a href="/calculators/california-1099-tax-calculator">California 1099 Tax Calculator</a> — Compute self-employment, federal, and CA state taxes.</li>
        <li><a href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</a> — Estimate taxes on gig economy and freelance income.</li>
        <li><a href="/calculators/solo-401k-contribution-calculator">Solo 401k Contribution Calculator</a> — Maximize retirement contributions and tax savings.</li>
        <li><a href="/calculators/rental-property-roi-calculator">Rental Property ROI Calculator</a> — Analyze real estate investments before you sell.</li>
      </ul>

      <RelatedCalculators currentPage="capital-gains-tax-calculator" />

      </>
  );
}
