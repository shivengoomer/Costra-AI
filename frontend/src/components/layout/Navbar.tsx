"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Zap, ArrowRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300
        ${
          scrolled
            ? "bg-bg-primary/95 shadow-lg shadow-black/20 border-b border-border-default"
            : "bg-bg-primary/80 border-b border-transparent"
        }
        backdrop-blur-xl`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary-glow">
            <Zap size={20} />
          </div>
          <span>
            Costra<span className="gradient-text">AI</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "/analyze", label: "Analyze" },
            { href: "/pricing", label: "Pricing Intel" },
            { href: "/dashboard", label: "Dashboard" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-flex text-sm font-medium text-text-secondary hover:text-text-primary transition-colors px-4 py-2 rounded-lg hover:bg-surface-hover"
          >
            Sign In
          </Link>
          <Link
            href="/analyze"
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary-glow hover:shadow-xl hover:shadow-primary-glow/50 transition-all hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
