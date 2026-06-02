/**
 * ComparisonTable — Reusable comparison table for calculator SEO content.
 * Renders a responsive table with optional highlighted column.
 *
 * Props:
 *   headers: string[]
 *   rows: Array<{ label: string, values: string[], highlight?: number }>
 *   caption?: string
 *   highlightCol?: number  (0-indexed, which column to highlight)
 */
export default function ComparisonTable({ headers, rows, caption, highlightCol }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-[#E2E8F0] shadow-sm">
      <table className="w-full text-sm border-collapse">
        {caption && (
          <caption className="px-4 py-2 text-xs text-[#94A3B8] text-left bg-[#F8FAFC] border-b border-[#E2E8F0]">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-[#F8FAFC] dark:bg-slate-800">
            {headers.map((h, i) => (
              <th
                key={i}
                className={`px-4 py-3 text-left font-semibold text-[#0F172A] dark:text-slate-100 border-b border-[#E2E8F0] dark:border-slate-700 ${
                  highlightCol === i ? "bg-[#EEF2FF] dark:bg-[#6366F1]/20 text-[#6366F1] dark:text-[#818CF8]" : ""
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-b border-[#F1F5F9] dark:border-slate-700/50 last:border-0 even:bg-[#F8FAFC] dark:even:bg-slate-800/30"
            >
              <td className="px-4 py-3 font-medium text-[#0F172A] dark:text-slate-200">
                {row.label}
              </td>
              {row.values.map((val, vi) => (
                <td
                  key={vi}
                  className={`px-4 py-3 text-[#475569] dark:text-slate-300 ${
                    highlightCol === vi + 1
                      ? "bg-[#EEF2FF]/50 dark:bg-[#6366F1]/10 font-semibold text-[#4F46E5] dark:text-[#818CF8]"
                      : ""
                  }`}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
