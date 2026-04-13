import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-secondary pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm">
                <Zap size={16} />
              </div>
              <span>
                Costra<span className="gradient-text">AI</span>
              </span>
            </Link>
            <p className="text-sm text-text-tertiary leading-relaxed max-w-[280px]">
              AI-powered cloud cost optimization. Transform your app idea into a
              production-ready architecture at the lowest possible cost.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-text-primary mb-4">
              Product
            </h4>
            <div className="flex flex-col gap-2.5">
              {["Analyze", "Pricing Intel", "Dashboard"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-text-primary mb-4">
              Resources
            </h4>
            <div className="flex flex-col gap-2.5">
              {["Documentation", "API Reference", "Blog"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-text-primary mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {["About", "Privacy", "Terms"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border-default pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} Costra AI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-tertiary hover:text-primary-light transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-tertiary hover:text-primary-light transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
