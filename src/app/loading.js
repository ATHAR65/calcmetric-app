export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="animate-pulse space-y-8">
        {/* Skeleton Hero */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="h-4 w-32 bg-[#E5E7EB] dark:bg-[#1E293B] rounded-full mx-auto" />
          <div className="h-10 w-3/4 bg-[#E5E7EB] dark:bg-[#1E293B] rounded-xl mx-auto" />
          <div className="h-10 w-1/2 bg-[#E5E7EB] dark:bg-[#1E293B] rounded-xl mx-auto" />
          <div className="h-5 w-2/3 bg-[#E5E7EB] dark:bg-[#1E293B] rounded-lg mx-auto" />
        </div>

        {/* Skeleton Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E5E7EB] dark:border-[#1E293B] bg-white dark:bg-[#111827] p-6 space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E5E7EB] dark:bg-[#1E293B]" />
              <div className="h-5 w-2/3 bg-[#E5E7EB] dark:bg-[#1E293B] rounded-lg" />
              <div className="h-4 w-full bg-[#E5E7EB] dark:bg-[#1E293B] rounded-md" />
              <div className="h-4 w-4/5 bg-[#E5E7EB] dark:bg-[#1E293B] rounded-md" />
              <div className="pt-4 border-t border-[#F3F4F6] dark:border-[#1E293B]">
                <div className="h-4 w-24 bg-[#E5E7EB] dark:bg-[#1E293B] rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
