import Link from "next/link";
import { Zap, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-heading">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white">
                <Zap size={16} fill="currentColor" />
              </div>
              <span>Costra AI</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              AI-powered cloud architect that optimizes cost and suggests best deployment strategies for engineering teams.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-heading mb-6">Product</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/analyze" className="text-sm text-muted hover:text-heading transition-colors">Analyze</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted hover:text-heading transition-colors">Pricing</Link></li>
              <li><Link href="/docs" className="text-sm text-muted hover:text-heading transition-colors">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-heading mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-sm text-muted hover:text-heading transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-sm text-muted hover:text-heading transition-colors">Blog</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted hover:text-heading transition-colors">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-heading mb-6">Social</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="https://github.com" className="flex items-center gap-2 text-sm text-muted hover:text-heading transition-colors"><Globe size={14} /> GitHub</Link></li>
              <li><Link href="https://twitter.com" className="flex items-center gap-2 text-sm text-muted hover:text-heading transition-colors"><Zap size={14} /> Twitter</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Costra AI. Built for the modern cloud.
          </p>
        </div>
      </div>
    </footer>
  );
}
