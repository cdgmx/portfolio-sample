"use client";

/**
 * @purpose Site-wide header with name/logo and a resume dropdown button.
 * @note Dropdown toggles open/close on button click. Click again to close.
 */

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <Link href="/" className="name" style={{ textDecoration: "none" }}>
        John Angelo Cabalfin
      </Link>

      {/* ── Resume dropdown ── */}
      <div className="resume-dropdown-wrapper">
        <button
          className={`resume-button ${open ? "resume-button--open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-haspopup="true"
          aria-expanded={open}
        >
          <span className="resume-button-text">Download Resume</span>
          <svg
            className={`resume-chevron ${open ? "resume-chevron--open" : ""}`}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 4L6 8L10 4"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open && (
          <div className="resume-dropdown" role="menu">
            <a
              href="/resume.pdf"
              className="resume-dropdown-item"
              download
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7 1v8M4 7l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download PDF
            </a>
            <a
              href="/resume.pdf"
              className="resume-dropdown-item"
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1 7a6 6 0 1 0 12 0A6 6 0 0 0 1 7zm6-4v4m0 0 2-2m-2 2L5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View Online
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
