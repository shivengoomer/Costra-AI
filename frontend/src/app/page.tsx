import Link from "next/link";
import SoftAurora from "@/components/SoftAurora";
import {
  ArrowRight,
  Zap,
  TrendingDown,
  Database,
  BarChart3,
  Cpu,
  ChevronDown,
} from "lucide-react";
import { Inter } from 'next/font/google'
import Prism from "@/components/Prism";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-body">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-10 md:pb-32">
        {/* Soft Aurora Background */}
        <div className="absolute -top-80 inset-x-0 h-[120%] z-0 pointer-events-none opacity-40">
          {/* <Prism
            height={2}
            baseWidth={3.5}
            animationType="rotate"
            glow={1}
            noise={0.3}
            transparent
            scale={2.5}
            hueShift={0}
            colorFrequency={1}
            hoverStrength={4}
            inertia={0.05}
            bloom={1}
            timeScale={0.3}
          /> */}
        </div>

        <div className="relative z-10 section-padding text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full premium-border bg-white/5 text-xs font-medium text-heading mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            V1.0 is now live — Costra AI for Enterprise
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-8 animate-fade-in-up">
            Build smarter. <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Deploy faster.
            </span>{" "}
            <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              Spend less.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up [animation-delay:120ms]">
            Your AI-powered cloud architect that analyzes infrastructure, forecasts costs,
            and continuously optimizes deployments for peak performance —
            so you ship faster while spending less.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up [animation-delay:200ms]">
            <Link
              href="/analyze"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-white font-semibold text-base transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Start analyzing
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg premium-border bg-white/5 text-heading font-semibold text-base transition-all hover:bg-white/10"
            >
              Documentation
            </Link>
          </div>

          {/* Terminal Style Block */}
          <div className="max-w-2xl mx-auto rounded-xl bg-card premium-border premium-shadow p-1 text-left animate-fade-in-up [animation-delay:300ms]">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="text-[10px] text-muted ml-2 font-mono">bash — costra optimize</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="flex gap-3 mb-2">
                <span className="text-muted">$</span>
                <span className="text-heading">costra analyze --stack nextjs,fastapi,postgres</span>
              </div>
              <div className="text-success mb-2">✓ Parsing architecture requirements...</div>
              <div className="text-success mb-2">✓ Querying AWS, GCP, Azure pricing data (Real-time RAG)</div>
              <div className="text-body mt-4">
                <span className="text-primary font-bold">Recommended Stack:</span><br />
                <span className="text-muted">Frontend:</span> Next.js (Vercel) <span className="text-success">-$12.00/mo</span><br />
                <span className="text-muted">Backend:</span> FastAPI (Cloud Run) <span className="text-success">-$8.50/mo</span><br />
                <span className="text-muted">DB:</span> Neon PostgreSQL <span className="text-success">-$0.00 (Free Tier)</span>
              </div>
              <div className="text-primary mt-4 font-bold animate-pulse">Total Savings: 42% found →</div>
            </div>
          </div>
        </div>
      </section >

      {/* ===== SOCIAL PROOF ===== */}
      < section className="py-20 overflow-hidden border-y border-white/5 bg-white/[0.01]" >
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Trusted by engineering teams at</p>
        </div>
        <div className="flex whitespace-nowrap animate-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex items-center gap-12 px-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
              <div className="text-2xl font-bold tracking-tighter text-heading flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-muted" />
                TECHCORP_{i}
              </div>
              <div className="text-2xl font-bold tracking-tighter text-heading flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-muted" />
                INFRA_{i}
              </div>
              <div className="text-2xl font-bold tracking-tighter text-heading flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-muted" />
                SCLOUD_{i}
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* ===== BENTO GRID FEATURES ===== */}
      < section id="features" className="section-padding" >
        <div className="text-center mb-20">
          <h2 className="heading-section mb-4">Architecture meets AI.</h2>
          <p className="text-muted max-w-xl mx-auto">Modern infrastructure is too complex to manage by hand. Let AI handle the complexity of pricing and scaling.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Large card */}
          <div className="md:col-span-4 card-premium p-10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-heading mb-3">AI Architecture Engine</h3>
              <p className="text-muted leading-relaxed">Describe your app in plain English. Our AI breaks it into components and maps each to the optimal cloud services across AWS, GCP, and Azure.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white/10 premium-border" />)}
              </div>
              <span className="text-xs text-muted">Used by 2,000+ developers last month</span>
            </div>
          </div>

          {/* Small card */}
          <div className="md:col-span-2 card-premium p-10 group">
            <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center mb-6">
              <TrendingDown size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-heading mb-3">Cost Savings 💰</h3>
            <p className="text-muted leading-relaxed">Automatically identifies and recommends free tier services and reserved instances.</p>
          </div>

          {/* Small card */}
          <div className="md:col-span-3 card-premium p-10 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-semibold text-heading mb-3">Multi-Cloud Comparison</h3>
            <p className="text-muted leading-relaxed">Side-by-side cost comparison. Find the cheapest, balanced, or best-performance option in seconds.</p>
          </div>

          {/* Small card */}
          <div className="md:col-span-3 card-premium p-10 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-semibold text-heading mb-3">RAG Pricing Insights</h3>
            <p className="text-muted leading-relaxed">Retrieval-Augmented Generation over scraped pricing data. Always up-to-date, never hallucinated numbers.</p>
          </div>
        </div>
      </section >

      {/* ===== ALTERNATING FEATURE SECTIONS ===== */}
      < section className="section-padding overflow-hidden" >
        <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
          <div className="animate-fade-in">
            <h2 className="heading-section mb-6">Infrastructure as Code, but faster.</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Costra AI doesn&apos;t just suggest a stack; it generates the Terraform or Pulumi code to deploy it. Go from idea to a running environment in under 15 minutes.
            </p>
            <ul className="flex flex-col gap-4">
              {['Auto-generate Terraform', 'One-click deployment', 'Cloud-agnostic output'].map(item => (
                <li key={item} className="flex items-center gap-3 text-heading font-medium">
                  <Zap size={16} className="text-primary" fill="currentColor" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative card-premium p-8 bg-black/40 backdrop-blur-sm">
              <div className="font-mono text-sm space-y-2">
                <div className="text-muted"># Generated Terraform Code</div>
                <div className="text-primary">resource &quot;aws_lambda_function&quot; &quot;api&quot; &#123;</div>
                <div className="pl-4 text-heading">
                  function_name = &quot;costra-api-prod&quot;<br />
                  runtime = &quot;python3.12&quot;<br />
                  memory_size = 512<br />
                  <span className="text-success"># Optimized for cost: arm64</span><br />
                  architectures = [&quot;arm64&quot;]
                </div>
                <div className="text-primary">&#125;</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="md:order-2">
            <h2 className="heading-section mb-6">Global Pricing Intelligence.</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pricing changes every day. Our engine monitors AWS, GCP, and Azure updates 24/7 to ensure your estimates are accurate down to the cent.
            </p>
            <div className="card-premium p-6 bg-success/5 border-success/20">
              <p className="text-success font-semibold flex items-center gap-2">
                <TrendingDown size={18} />
                Updated 12 minutes ago: AWS Lambda Arm64 price drop in us-east-1
              </p>
            </div>
          </div>
          <div className="md:order-1 relative group">
            <div className="absolute -inset-4 bg-success/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="card-premium p-6 flex flex-col items-center justify-center gap-2">
                  <div className="text-xs text-muted uppercase tracking-widest">Region_{i}</div>
                  <div className="text-xl font-bold text-heading">$0.0000{i * 2}</div>
                  <div className="text-[10px] text-success font-bold">CHEAPEST</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* ===== BEFORE / AFTER SECTION ===== */}
      < section className="section-padding bg-white/[0.01] border-y border-white/5 rounded-[40px]" >
        <div className="text-center mb-20">
          <h2 className="heading-section mb-4">The Costra Advantage.</h2>
          <p className="text-muted">Stop guessing. Start optimizing.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-premium p-10 bg-red-500/[0.02] border-red-500/10">
            <h3 className="text-xl font-bold text-red-500 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Without Costra AI
            </h3>
            <ul className="space-y-6">
              {[
                'Hours of manual pricing research',
                'Over-provisioning "just in case"',
                'Surprise bills at the end of the month',
                'Fragmented infrastructure knowledge',
                'Stuck on one cloud provider'
              ].map(text => (
                <li key={text} className="flex items-start gap-3 text-muted">
                  <span className="text-red-500 font-bold">✕</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-premium p-10 bg-success/[0.02] border-success/10">
            <h3 className="text-xl font-bold text-success mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              With Costra AI
            </h3>
            <ul className="space-y-6">
              {[
                'Instant multi-cloud comparison',
                'Rightsized resources by default',
                'Predictive cost analytics',
                'Centralized architecture decisions',
                'Seamless multi-cloud portability'
              ].map(text => (
                <li key={text} className="flex items-start gap-3 text-heading">
                  <span className="text-success font-bold">✓</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section >

      {/* ===== FAQ ACCORDION ===== */}
      < section className="section-padding max-w-3xl mx-auto" >
        <h2 className="heading-section text-center mb-16">Questions?</h2>
        <div className="space-y-4">
          {[
            { q: "How accurate is the pricing data?", a: "We use a combination of automated scraping and official cloud provider APIs. Data is refreshed every 24 hours to ensure accuracy within 1-2%." },
            { q: "Can I export to Terraform?", a: "Yes, our 'Export' feature provides ready-to-use Terraform or Pulumi blocks for all recommended services." },
            { q: "Do you support private clouds?", a: "Currently we support AWS, GCP, Azure, and common PaaS providers like Vercel and Railway. Private cloud support is on our roadmap." },
          ].map((item, i) => (
            <div key={i} className="card-premium overflow-hidden">
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
                <span className="font-semibold text-heading">{item.q}</span>
                <ChevronDown size={18} className="text-muted" />
              </button>
              <div className="px-6 pb-6 text-muted text-sm leading-relaxed border-t border-white/5 pt-4">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* ===== FINAL CTA ===== */}
      < section className="section-padding" >
        <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Ready to ship smarter?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Join 10,000+ engineers building cost-optimized infrastructure with Costra AI.</p>

            <div className="flex flex-col items-center gap-6">
              <Link
                href="/analyze"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-white text-primary font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                Analyze my app for free
                <ArrowRight size={20} />
              </Link>
              <div className="font-mono text-sm text-white/60 bg-black/20 px-4 py-2 rounded-lg">
                $ npm install -g costra-cli
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
