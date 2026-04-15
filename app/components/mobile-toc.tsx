"use client";

import { useState } from "react";

type Heading = { level: number; text: string; slug: string };

export function MobileTOC({ headings }: { headings: Heading[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-slate-700 text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:bg-slate-600 transition-colors"
        aria-label="Table of contents"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 rounded-t-2xl shadow-2xl max-h-[60vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-slate-700">On this page</p>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <ul className="space-y-3 text-sm border-l border-slate-200">
              {headings.map((h) => (
                <li key={h.slug}>
                  <a
                    href={`#${h.slug}`}
                    onClick={() => setOpen(false)}
                    className={`block text-slate-500 hover:text-slate-800 transition-colors no-underline ${
                      h.level === 2 ? "pl-3" : "pl-6"
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
