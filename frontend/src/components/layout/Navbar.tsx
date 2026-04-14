"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-20 justify-center px-4">

      <div
        className={`relative w-full flex items-center justify-between transition-all duration-500
        ${scrolled
            ? "max-w-3xl mt-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            : "max-w-7xl mt-6 px-8 py-4"
          }`}
      >

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-10">
          <div className="text-blue-300 transition-all duration-300 group-hover:scale-110">
            <Zap size={scrolled ? 18 : 22} fill="currentColor" />
          </div>
          <span
            className={`font-medium tracking-tight transition-all duration-300
            ${scrolled ? "text-sm text-gray-200" : "text-lg text-gray-200"}`}
          >
            Costra AI
          </span>
        </Link>

        {/* ✅ PERFECT CENTER (no overlap issues) */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex z-0">
          <div
            className={`flex items-center text-white rounded-full transition-all duration-500
            ${scrolled
                ? "bg-white/2 border border-white/30 px-2 py-1 gap-1" :
                "bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.08)] px-2 py-1 gap-2"}`}
          >
            {[
              { label: "Features", href: "/#features" },
              { label: "Pricing", href: "#" },
              { label: "Docs", href: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
                ${scrolled
                    ? "text-gray-200 hover:text-white hover:bg-white/5"
                    : "text-gray-200 hover:text-gray-900 hover:bg-white"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 z-10">
          <Link
            href="#"
            className={`text-sm font-medium transition-all duration-300 whitespace-nowrap
            ${scrolled
                ? "opacity-0 w-0 overflow-hidden"
                : "opacity-100 text-gray-300 hover:text-white"
              }`}
          >
            Login
          </Link>

          <Link
            href="/analyze"
            className={`rounded-full font-semibold transition-all duration-300 whitespace-nowrap flex items-center justify-center
            ${scrolled
                ? "px-4 py-1.5 text-xs bg-white text-black hover:bg-gray-200"
                : "px-6 py-2.5 text-sm bg-gradient-to-r from-blue-900 to-green-800 text-white hover:opacity-90 shadow-lg shadow-blue-500/20"
              }`}
          >
            Analyze Now
          </Link>
        </div>
      </div>
    </nav >
  );
}