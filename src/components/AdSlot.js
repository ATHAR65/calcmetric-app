export default function AdSlot({ position = "top" }) {
  return (
    <div
      className="adsense-slot my-6 dark:bg-[#1E293B] dark:border-[#334155] dark:text-[#64748B]"
      aria-hidden="true"
      id={`adsense-slot-${position}`}
    >
      {/* AdSense Responsive Banner Slot */}
      <span className="select-none opacity-60 text-xs tracking-widest uppercase">
        Ad Space — Sponsored
      </span>
    </div>
  );
}
