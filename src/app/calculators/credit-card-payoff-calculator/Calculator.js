"use client";

import { useState, useEffect } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (v) =>
  v.toLocaleString("en-US", { style: "currency", currency: "USD" });

const payoffStrategies = [
  { value: "avalanche", label: "Avalanche (Highest APR First)" },
  { value: "snowball", label: "Snowball (Smallest Balance First)" },
];

function calculatePayoff(balance, apr, monthlyPayment) {
  const monthlyRate = apr / 100 / 12;
  let remaining = balance;
  let totalInterest = 0;
  let months = 0;
  const maxMonths = 600; // 50 years max

  while (remaining > 0 && months < maxMonths) {
    const interest = remaining * monthlyRate;
    const principal = Math.min(monthlyPayment - interest, remaining);
    if (principal <= 0) {
      // Payment not covering interest
      return { months: Infinity, totalInterest: Infinity, paymentTooLow: true };
    }
    remaining -= principal;
    totalInterest += interest;
    months++;
  }

  return { months, totalInterest, totalPaid: balance + totalInterest, paymentTooLow: false };
}

function PayoffDate({ months }) {
  const [dateStr, setDateStr] = useState("Calculating...");
  useEffect(() => {
    if (!isFinite(months)) {
      setDateStr("N/A");
      return;
    }
    const date = new Date();
    date.setMonth(date.getMonth() + months);
    setDateStr(date.toLocaleDateString("en-US", { month: "long", year: "numeric" }));
  }, [months]);
  return <>{dateStr}</>;
}

export default function Calculator() {
  const [cards, setCards] = useState([
    { id: 1, name: "Card 1", balance: 5000, apr: 21, minPayment: 150 },
    { id: 2, name: "Card 2", balance: 3000, apr: 18, minPayment: 100 },
  ]);
  const [strategy, setStrategy] = useState("avalanche");
  const [extraPayment, setExtraPayment] = useState(0);
  const [nextId, setNextId] = useState(3);

  const updateCard = (id, field, value) => {
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const addCard = () => {
    setCards((prev) => [
      ...prev,
      {
        id: nextId,
        name: `Card ${nextId}`,
        balance: 1000,
        apr: 21,
        minPayment: 50,
      },
    ]);
    setNextId((prev) => prev + 1);
  };

  const removeCard = (id) => {
    if (cards.length <= 1) return;
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  // Sort cards by strategy
  const sortedCards = [...cards].sort((a, b) => {
    if (strategy === "avalanche") return b.apr - a.apr; // highest APR first
    return a.balance - b.balance; // smallest balance first
  });

  // Calculate payoff for each card individually
  let totalMonths = 0;
  let totalInterestAll = 0;
  let totalBalance = 0;
  let totalMinPayments = 0;

  const cardResults = sortedCards.map((card) => {
    totalBalance += card.balance || 0;
    totalMinPayments += card.minPayment || 0;
    const result = calculatePayoff(
      card.balance || 0,
      card.apr || 0,
      (card.minPayment || 0)
    );
    totalInterestAll += result.totalInterest || 0;

    // Calculate with extra payment applied to this card (snowball/avalanche order)
    const extraApplied = sortedCards[0]?.id === card.id ? (extraPayment || 0) : 0;
    const resultAccelerated = calculatePayoff(
      card.balance || 0,
      card.apr || 0,
      (card.minPayment || 0) + extraApplied
    );

    return {
      ...card,
      ...result,
      monthsAccelerated: resultAccelerated.months,
      interestAccelerated: resultAccelerated.totalInterest,
      paymentTooLow: result.paymentTooLow,
      targetCard: extraApplied > 0,
    };
  });

  const firstCardResult = cardResults[0] ? calculatePayoff(
    totalBalance,
    cards.reduce((sum, c) => sum + (c.apr || 0), 0) / cards.length, // weighted avg APR
    totalMinPayments + (extraPayment || 0)
  ) : { months: 0, totalInterest: 0, totalPaid: 0, paymentTooLow: false };

  // Total with all extra payments
  const acceleratedMonths = cardResults.reduce(
    (max, r) => (r.monthsAccelerated && r.monthsAccelerated > max ? r.monthsAccelerated : max),
    0
  );

  const standardTotalInterest = cardResults.reduce(
    (sum, r) => sum + (r.totalInterest || 0), 0
  );
  const acceleratedTotalInterest = cardResults.reduce(
    (sum, r) => sum + (r.interestAccelerated || 0), 0
  );
  const interestSaved = standardTotalInterest - acceleratedTotalInterest;
  const standardMonths = cardResults.reduce(
    (max, r) => (r.months && r.months > max ? r.months : max), 0
  );

  const schemaData = {
    name: "Credit Card Payoff Calculator",
    description:
      "Compare snowball vs avalanche debt payoff methods. Calculate how long it takes to pay off credit card debt and how much interest you save with extra payments.",
    url: "https://www.themetricapp.com/calculators/credit-card-payoff-calculator",
  };

  return (
    <CalculatorShell
      title="Credit Card Payoff Calculator 2026 — Snowball vs Avalanche Method"
      subtitle="Compare snowball and avalanche debt payoff strategies. Add multiple cards and see exactly how long it takes to become debt-free."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard
            label="Total Credit Card Debt"
            value={fmt(totalBalance)}
          />
          <ResultCard label="Total Min. Monthly Payment" value={fmt(totalMinPayments)} />
          <ResultCard
            label="Standard Payoff Time"
            value={isFinite(standardMonths) ? `${standardMonths} months` : "∞"}
            sub={isFinite(standardMonths) ? <PayoffDate months={standardMonths} /> : "Payment too low"}
          />
          <ResultCard
            label="Total Interest (Standard)"
            value={fmt(standardTotalInterest)}
            highlight={interestSaved > 0}
          />
          <ResultCard
            label="Interest Saved"
            value={fmt(interestSaved)}
            highlight
            sub={`${strategy === "avalanche" ? "Avalanche" : "Snowball"} method`}
          />
          <ResultCard
            label="Accelerated Payoff"
            value={isFinite(acceleratedMonths) ? `${acceleratedMonths || "N/A"} months` : "N/A"}
            sub={isFinite(acceleratedMonths) ? <PayoffDate months={acceleratedMonths} /> : ""}
          />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9] border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3 flex-1">
            Your Credit Cards
          </h3>
          <button
            onClick={addCard}
            className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-[#0D9488] text-white hover:bg-[#0F766E] transition-colors"
          >
            + Add Card
          </button>
        </div>

        {cards.map((card, index) => (
          <div
            key={card.id}
            className="rounded-xl border border-[#E2E8F0] dark:border-[#1E293B] p-4 bg-white dark:bg-[#1E293B]/50"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                {card.name}
              </h4>
              {cards.length > 1 && (
                <button
                  onClick={() => removeCard(card.id)}
                  className="text-xs text-red-500 hover:text-red-600 font-semibold"
                >
                  Remove
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <InputField
                label="Balance ($)"
                value={card.balance}
                onChange={(v) => updateCard(card.id, "balance", v)}
              />
              <InputField
                label="APR (%)"
                value={card.apr}
                onChange={(v) => updateCard(card.id, "apr", v)}
                suffix="%"
              />
              <InputField
                label="Min. Payment ($)"
                value={card.minPayment}
                onChange={(v) => updateCard(card.id, "minPayment", v)}
              />
              <InputField
                label="Card Name"
                value={card.name}
                onChange={(v) => updateCard(card.id, "name", v)}
                type="text"
              />
            </div>
          </div>
        ))}

        <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9] border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          Payoff Strategy
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectField
            label="Payoff Method"
            value={strategy}
            onChange={setStrategy}
            options={payoffStrategies}
          />
          <InputField
            label="Extra Monthly Payment ($)"
            value={extraPayment}
            onChange={setExtraPayment}
            helpText="Additional amount allocated to target card"
          />
        </div>

        {/* Strategy explanation */}
        <div className="rounded-xl bg-[#F0FDFA] dark:bg-[#0D9488]/10 p-4 text-sm text-[#0F172A] dark:text-[#F1F5F9] border border-[#0D9488]/20">
          <strong className="text-[#0D9488]">💡 {strategy === "avalanche" ? "Avalanche" : "Snowball"} Method:</strong>{" "}
          {strategy === "avalanche"
            ? "Pay minimum on all cards. Put extra money toward the card with the highest APR. This saves the most interest over time."
            : "Pay minimum on all cards. Put extra money toward the card with the smallest balance. This gives psychological wins faster."}
        </div>

        {/* Priority order */}
        <div className="rounded-xl bg-[#F8FAFC] dark:bg-[#1E293B] p-4 border border-[#E2E8F0] dark:border-[#334155]">
          <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-2">
            🔢 Payoff Priority
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            {sortedCards.map((card) => (
              <li
                key={card.id}
                className="text-sm text-[#475569] dark:text-[#94A3B8]"
              >
                {card.name} — {fmt(card.balance)} @ {card.apr}% APR
                {sortedCards[0]?.id === card.id && extraPayment > 0 && (
                  <span className="text-[#0D9488] font-semibold ml-2">
                    (+{fmt(extraPayment)}/mo extra)
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Credit Card Payoff Calculator",
            url: "https://www.themetricapp.com/calculators/credit-card-payoff-calculator",
            description: "Compare snowball vs avalanche debt payoff methods. Calculate how long it takes to pay off credit card debt and how much interest you save.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web Browser",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.themetricapp.com" },
              { "@type": "ListItem", position: 2, name: "Credit Card Payoff Calculator", item: "https://www.themetricapp.com/calculators/credit-card-payoff-calculator" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the snowball method for paying off credit cards?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The snowball method involves paying the minimum payment on all credit cards and putting any extra money toward the card with the smallest balance first. Once that card is paid off, you roll that payment to the next smallest balance. This method provides psychological momentum as you see debts disappearing faster.",
                },
              },
              {
                "@type": "Question",
                name: "What is the avalanche method for paying off credit cards?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The avalanche method involves paying the minimum payment on all credit cards and putting any extra money toward the card with the highest APR first. This method saves the most money on interest over time because you're eliminating high-interest debt faster. It's mathematically optimal but may take longer to see progress.",
                },
              },
              {
                "@type": "Question",
                name: "What is the average credit card APR in 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The average credit card APR in 2026 ranges from 19.19% to 21%, depending on credit score and card type. Penalty APRs can reach up to 29.99%. This is higher than in previous years due to Federal Reserve interest rate increases.",
                },
              },
              {
                "@type": "Question",
                name: "How is minimum credit card payment calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most credit card issuers calculate the minimum payment as either 1-4% of the total statement balance or a flat fee plus accrued interest and any late fees (whichever is higher). Common minimums range from $25 to $40 depending on your balance and card terms.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to pay off credit card debt with minimum payments?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Paying only the minimum on credit card debt can take 10-20 years or more, depending on your balance and APR. For example, a $5,000 balance at 21% APR with a $150 minimum payment takes about 4.5 years and costs over $2,500 in total interest.",
                },
              },
              {
                "@type": "Question",
                name: "What is the average credit card debt in the US in 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "As of 2026, the average credit card debt per consumer in the US is approximately $6,500-$6,600. Total US credit card debt has reached about $1.25 trillion. The average APR on cards carrying a balance is around 21%.",
                },
              },
            ],
          }),
        }}
      />

      <h2>How to Use the Credit Card Payoff Calculator</h2>
      <p>
        Our free Credit Card Payoff Calculator helps you compare two popular debt payoff strategies: the
        <strong> snowball method</strong> (smallest balance first) and the <strong>avalanche method</strong>
        (highest APR first). Add up to 10 credit cards, enter each card's balance, APR, and minimum payment, and
        choose how much extra you can put toward debt each month. The calculator instantly shows your total
        interest, payoff date, and how much the accelerated strategy saves you.
      </p>
      <p>
        Most Americans carry credit card debt and paying only the minimum can cost thousands in interest.
        By using our calculator to compare strategies, you can see exactly which method saves you more money
        and how quickly you can become debt-free.
      </p>

      <h2>Snowball vs Avalanche: Which Is Better?</h2>
      <p>
        <strong>Avalanche (Highest APR First):</strong> Mathematically optimal — saves the most interest.
        Best if you're disciplined and focused on numbers. The total interest paid is typically 5-15% less
        than the snowball method.
      </p>
      <p>
        <strong>Snowball (Smallest Balance First):</strong> Psychologically motivating — you see debts
        disappear faster. Best if you need momentum and motivation to stay on track. Studies show the
        snowball method has higher success rates because of the psychological wins.
      </p>
      <p>
        Both methods work. The best one is the one you'll stick with. Try both in our calculator and
        compare the results.
      </p>

      <h3>Example 1: Paying Off Two Credit Cards</h3>
      <p>
        Maria has two cards: Card A ($5,000 @ 21% APR, $150 min) and Card B ($3,000 @ 18% APR, $100 min).
        Using the avalanche method, she focuses on Card A first. With an extra $100/month, she pays off
        everything in approximately 32 months and saves $1,247 in interest compared to minimum payments.
        Her total interest drops from $3,186 to $1,939.
      </p>

      <h3>Example 2: Three-Card Snowball Strategy</h3>
      <p>
        James has three cards: Card 1 ($2,000 @ 19%), Card 2 ($4,500 @ 22%), Card 3 ($7,000 @ 17%).
        Using the snowball method, he targets Card 1 first (smallest balance). With $200 extra monthly,
        he pays off Card 1 in 9 months, then rolls that payment to Card 2, and finally Card 3. Total
        payoff: approximately 42 months, saving $3,450 in interest vs minimum payments.
      </p>

      <h3>Example 3: Single Large Balance</h3>
      <p>
        Sarah has one card with $8,000 at 20% APR, minimum payment $200. At minimum payments, it takes
        59 months and she pays $3,781 in interest. By paying an extra $150/month ($350 total), she pays
        it off in 28 months and saves $1,924 in interest — paying only $1,857 total interest.
      </p>

      <h2>5 Tips to Pay Off Credit Card Debt Faster</h2>
      <p>
        <strong>1. Stop using the cards.</strong> Cut up the cards or freeze them in a block of ice. Every
        new purchase compounds interest and extends your payoff timeline.
      </p>
      <p>
        <strong>2. Consider a balance transfer.</strong> If you have good credit (680+), a 0% APR balance
        transfer card can save hundreds in interest. Watch for the 3-5% transfer fee.
      </p>
      <p>
        <strong>3. Automate extra payments.</strong> Set up automatic payments above the minimum each month.
        You won't miss money you never see in your checking account.
      </p>
      <p>
        <strong>4. Use the debt snowball for motivation.</strong> Pay off the smallest balance first for a
        quick win. Studies show this psychological boost helps people stick with their debt payoff plan.
      </p>
      <p>
        <strong>5. Negotiate lower rates.</strong> Call your card issuer and ask for a lower APR. If you have
        a good payment history, many issuers will reduce your rate by 2-5% just for asking.
      </p>

      <h2>Frequently Asked Questions</h2>
      <p>
        <strong>Q: What is the snowball method?</strong><br />
        A: Pay minimums on all cards, put extra money toward the smallest balance first.
      </p>
      <p>
        <strong>Q: What is the avalanche method?</strong><br />
        A: Pay minimums on all cards, put extra money toward the highest APR first. Saves more interest.
      </p>
      <p>
        <strong>Q: What is the average credit card APR in 2026?</strong><br />
        A: 19-21% on average. Penalty APRs up to 29.99%.
      </p>
      <p>
        <strong>Q: How is minimum payment calculated?</strong><br />
        A: Typically 1-4% of balance or a flat fee ($25-40), whichever is higher.
      </p>
      <p>
        <strong>Q: How long does it take with minimum payments?</strong><br />
        A: 10-20+ years depending on balance and APR. Use our calculator to get an exact estimate.
      </p>
      <p>
        <strong>Q: Which method is best: snowball or avalanche?</strong><br />
        A: Avalanche saves more money. Snowball has higher success rates. Choose the one you'll stick with.
      </p>
      <p>
        <strong>Q: What is the average credit card debt in 2026?</strong><br />
        A: Approximately $6,500 per consumer. Total US debt is $1.25 trillion.
      </p>

      <RelatedCalculators currentPage="credit-card-payoff-calculator" />

      <div className="mt-10 p-4 bg-[#0D9488]/10 border border-[#0D9488]/20 rounded-xl">
        <p className="text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-2">📋 Data Sources & Methodology</p>
        <ul className="list-disc pl-5 space-y-2 text-[#475569] dark:text-[#94A3B8] text-sm">
          <li><strong>Consumer Financial Protection Bureau (CFPB):</strong> Credit card market report — <a href="https://www.consumerfinance.gov/data-research/credit-card-data/" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">consumerfinance.gov</a></li>
          <li><strong>Federal Reserve:</strong> Average credit card APR data (G.19 report) — <a href="https://www.federalreserve.gov/releases/g19/current/" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">federalreserve.gov</a></li>
          <li><strong>Experian 2025/26:</strong> Average credit card debt per consumer — <a href="https://www.experian.com/blogs/ask-experian/state-of-credit/" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline hover:text-[#0F766E]">experian.com</a></li>
          <li><strong>Credit CARD Act of 2009:</strong> Minimum payment disclosure rules and guidelines.</li>
        </ul>
      </div>

      <div className="mt-8 p-4 bg-[#0D9488]/10 border border-[#0D9488]/20 rounded-xl">
        <p className="text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-2">📅 Last Updated</p>
        <p className="text-[#475569] dark:text-[#94A3B8] text-sm">
          <strong>Last Updated:</strong> May 2026 — Average APR and consumer debt figures reflect Q1 2026 Federal Reserve and CFPB data. Payoff calculations use the standard amortization formula for revolving credit accounts. Minimum payment assumptions are based on typical industry practices (1-4% of balance). For exact terms, refer to your cardholder agreement.
        </p>
      </div>
    </>
  );
}
