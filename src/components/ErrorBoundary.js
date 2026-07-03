"use client";

import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-50 mb-4">
            <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <h3
            className="text-lg font-bold text-[var(--color-text-primary)] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Something went wrong
          </h3>
          <p
            className="text-sm text-[var(--color-text-secondary)] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            There was an error loading this calculator. Please try refreshing the page.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="inline-flex items-center gap-2 rounded-[100px] bg-[var(--color-dark)] text-white font-semibold px-5 py-2.5 text-sm hover:bg-[var(--color-accent)] transition-all"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
