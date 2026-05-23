export default function AdSlot({ position = "top" }) {
  return (
    <div
      className="adsense-slot my-6"
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
