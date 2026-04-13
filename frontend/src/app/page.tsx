import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  Cloud,
  Cpu,
  Zap,
  Shield,
  TrendingDown,
  Database,
  Globe,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 grid-bg animate-grid-pulse" />
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent_70%)] -top-24 -right-36 blur-[60px] animate-float" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12),transparent_70%)] -bottom-24 -left-24 blur-[60px] animate-float [animation-direction:reverse]" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[80px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-[820px] px-6">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary-light mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-glow" />
            AI-Powered Cloud Architecture
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.05] mb-6 animate-fade-in-up [animation-delay:100ms]">
            Ship faster.
            <br />
            <span className="gradient-text-glow">Spend less.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-text-secondary max-w-[560px] mx-auto mb-10 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Describe your app idea and get an instant, cost-optimized cloud
            architecture with real-time pricing across AWS, GCP, and Azure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
            <Link
              href="/analyze"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white font-semibold text-base shadow-lg shadow-primary-glow hover:shadow-2xl hover:shadow-primary-glow/50 transition-all hover:-translate-y-0.5"
            >
              <Sparkles size={18} />
              Analyze My App Idea
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-surface border border-border-default text-text-primary font-semibold text-base hover:bg-surface-hover hover:border-border-hover transition-all"
            >
              <BarChart3 size={18} />
              View Pricing Intel
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-12 mt-16 animate-fade-in-up [animation-delay:400ms]">
            {[
              { value: "40–60%", label: "Cost Savings" },
              { value: "3", label: "Cloud Providers" },
              { value: "<30s", label: "Analysis Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-text-tertiary mt-1 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-24 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-primary-light uppercase tracking-[0.1em] mb-4 block">
              Features
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Everything you need to <span className="gradient-text">optimize costs</span>
            </h2>
            <p className="text-base text-text-secondary max-w-[520px] mx-auto">
              From idea to production-ready architecture, Costra AI handles the
              complexity so you can focus on building.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Cpu size={22} />,
                color: "bg-primary/12 text-primary-light",
                title: "AI Architecture Engine",
                desc: "Describe your app in plain English. Our AI breaks it into components and maps each to the optimal cloud services.",
              },
              {
                icon: <TrendingDown size={22} />,
                color: "bg-accent/12 text-accent-light",
                title: "Real-Time Pricing RAG",
                desc: "Retrieval-Augmented Generation over scraped pricing data. Always up-to-date, never hallucinated numbers.",
              },
              {
                icon: <BarChart3 size={22} />,
                color: "bg-success/12 text-success",
                title: "Multi-Cloud Comparison",
                desc: "Side-by-side cost comparison across AWS, GCP, and Azure. Find the cheapest, balanced, or best-performance option.",
              },
              {
                icon: <Shield size={22} />,
                color: "bg-warning/12 text-warning",
                title: "Free Tier Maximizer",
                desc: "Automatically identifies and recommends free tier services to minimize your MVP costs to near-zero.",
              },
              {
                icon: <Database size={22} />,
                color: "bg-primary/12 text-primary-light",
                title: "Stack Recommendations",
                desc: "Get specific technology recommendations — databases, caching, queues, and hosting — all justified with reasoning.",
              },
              {
                icon: <Globe size={22} />,
                color: "bg-accent/12 text-accent-light",
                title: "Export & Deploy",
                desc: "Export your architecture as PDF, Markdown, or Terraform. Go from idea to deployment in minutes.",
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="glass-card glass-card-hover p-8 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-text-tertiary leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 bg-bg-secondary relative">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-primary-light uppercase tracking-[0.1em] mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              From idea to architecture in <span className="gradient-text">4 steps</span>
            </h2>
            <p className="text-base text-text-secondary max-w-[520px] mx-auto">
              No more hours of research. Just describe what you want to build.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "1",
                title: "Describe Your Idea",
                desc: "Tell us about your app in plain English — what it does, expected users, and features.",
              },
              {
                num: "2",
                title: "AI Analyzes",
                desc: "Our AI extracts requirements and maps them to cloud services using RAG-powered pricing data.",
              },
              {
                num: "3",
                title: "Compare Options",
                desc: "See side-by-side cost comparisons across providers with the cheapest, balanced, and premium options.",
              },
              {
                num: "4",
                title: "Ship It",
                desc: "Export your architecture plan, grab the recommended stack, and start building immediately.",
              },
            ].map((step, i) => (
              <div key={step.num} className="relative text-center p-8">
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-[44px] right-[-20%] w-[40%] h-[2px] bg-gradient-to-r from-primary-glow to-transparent" />
                )}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-extrabold text-base mx-auto mb-6 shadow-lg shadow-primary-glow">
                  {step.num}
                </div>
                <h3 className="text-base font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-text-tertiary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROVIDERS ===== */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-primary-light uppercase tracking-[0.1em] mb-4 block">
              Supported Providers
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Compare across <span className="gradient-text">major clouds</span>
            </h2>
            <p className="text-base text-text-secondary max-w-[520px] mx-auto">
              Real-time pricing intelligence from the top cloud providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Amazon Web Services",
                emoji: "🟠",
                services: "Lambda, EC2, RDS, S3, DynamoDB, ECS, CloudFront",
                color: "from-orange-500/10 to-transparent",
              },
              {
                name: "Google Cloud Platform",
                emoji: "🔵",
                services: "Cloud Run, Compute Engine, Cloud SQL, GCS, Firestore",
                color: "from-blue-500/10 to-transparent",
              },
              {
                name: "Microsoft Azure",
                emoji: "🟢",
                services: "Functions, VMs, Azure SQL, Blob Storage, Cosmos DB",
                color: "from-emerald-500/10 to-transparent",
              },
            ].map((provider) => (
              <div
                key={provider.name}
                className="glass-card glass-card-hover p-8 text-center relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${provider.color} opacity-50`} />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{provider.emoji}</div>
                  <h3 className="text-xl font-bold mb-2">{provider.name}</h3>
                  <p className="text-sm text-text-tertiary leading-relaxed">
                    {provider.services}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COST PREVIEW ===== */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-primary-light uppercase tracking-[0.1em] mb-4 block">
              Cost Intelligence
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Know your costs <span className="gradient-text">before you build</span>
            </h2>
          </div>

          {/* Cost comparison mock */}
          <div className="glass-card p-8 max-w-[900px] mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-sm font-semibold text-text-secondary">
                Sample Analysis: SaaS MVP with Auth + Database + API
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: "🏆 Cheapest",
                  provider: "PaaS Stack",
                  detail: "Vercel + Railway + Neon",
                  cost: "$5–11",
                  color: "border-success/30 bg-success/5",
                  badge: "bg-success/15 text-success",
                },
                {
                  label: "⚖️ Balanced",
                  provider: "GCP",
                  detail: "Cloud Run + Cloud SQL + GCS",
                  cost: "$25–40",
                  color: "border-primary/30 bg-primary/5",
                  badge: "bg-primary/15 text-primary-light",
                },
                {
                  label: "🚀 Performance",
                  provider: "AWS",
                  detail: "Lambda + RDS + S3 + CloudFront",
                  cost: "$45–80",
                  color: "border-warning/30 bg-warning/5",
                  badge: "bg-warning/15 text-warning",
                },
              ].map((option) => (
                <div
                  key={option.label}
                  className={`rounded-xl border p-6 ${option.color} transition-all hover:scale-[1.02]`}
                >
                  <span
                    className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${option.badge}`}
                  >
                    {option.label}
                  </span>
                  <h4 className="text-lg font-bold mb-1">{option.provider}</h4>
                  <p className="text-xs text-text-tertiary mb-4">
                    {option.detail}
                  </p>
                  <div className="text-3xl font-extrabold tracking-tight gradient-text">
                    {option.cost}
                    <span className="text-sm text-text-tertiary font-normal ml-1">
                      /mo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 px-6">
        <div className="max-w-[1000px] mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/15 p-16 text-center relative overflow-hidden">
          {/* Orbs */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent)] blur-[60px] -top-24 -right-20" />
          <div className="absolute w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.1),transparent)] blur-[40px] -bottom-16 -left-12" />

          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Ready to <span className="gradient-text">optimize</span>?
            </h2>
            <p className="text-base text-text-secondary mb-10 max-w-[500px] mx-auto leading-relaxed">
              Stop overpaying for cloud infrastructure. Get your AI-powered
              architecture recommendation in under 30 seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/analyze"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white font-semibold shadow-lg shadow-primary-glow hover:shadow-2xl transition-all hover:-translate-y-0.5"
              >
                <Zap size={18} />
                Start Free Analysis
                <ChevronRight size={16} />
              </Link>
              <span className="text-sm text-text-tertiary">
                No credit card required
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
