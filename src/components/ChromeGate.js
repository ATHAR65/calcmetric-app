"use client";

import { usePathname } from "next/navigation";

/**
 * Renders the site chrome (header, footer, cookie banner) on normal routes,
 * but strips it on /embed/* so calculator widgets render as a clean,
 * chrome-less iframe for third-party sites. The chrome elements are passed in
 * as slots from the server layout so this client gate can hide them without
 * importing server components directly.
 */
export default function ChromeGate({ header, footer, cookie, children }) {
  const pathname = usePathname();
  const bare = pathname?.startsWith("/embed");

  if (bare) {
    return (
      <main id="main-content" className="flex-1">
        {children}
      </main>
    );
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-[var(--color-accent)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      {header}
      <main id="main-content" className="flex-1">
        {children}
      </main>
      {footer}
      {cookie}
    </>
  );
}
