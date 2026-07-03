export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="animate-pulse space-y-8">
        {/* Skeleton Hero */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="h-4 w-32 bg-[#ece9f8] rounded-full mx-auto" />
          <div className="h-10 w-3/4 bg-[#ece9f8] rounded-xl mx-auto" />
          <div className="h-10 w-1/2 bg-[#ece9f8] rounded-xl mx-auto" />
          <div className="h-5 w-2/3 bg-[#ece9f8] rounded-lg mx-auto" />
        </div>

        {/* Skeleton Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#ece9f8]" />
              <div className="h-5 w-2/3 bg-[#ece9f8] rounded-lg" />
              <div className="h-4 w-full bg-[#ece9f8] rounded-md" />
              <div className="h-4 w-4/5 bg-[#ece9f8] rounded-md" />
              <div className="pt-4 border-t border-[#e7e5f3]">
                <div className="h-4 w-24 bg-[#ece9f8] rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
