"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "TOP" },
  { href: "/concept", label: "コンセプト" },
  { href: "/works", label: "左官事例" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`gnav${isScrolled ? " is-scrolled" : ""}`}>
      <Link href="/" className="gnav-brand">
        墨壁<small>KURODA SAKAN-TEN — EST. 1958</small>
      </Link>
      <nav className={`gnav-links${isOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <button
        className="gnav-toggle"
        aria-label="メニュー"
        onClick={() => setIsOpen((v) => !v)}
      >
        {isOpen ? "×" : "☰"}
      </button>
    </header>
  );
}
