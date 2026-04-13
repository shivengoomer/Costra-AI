"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Cloud,
  Server,
  Database,
  Globe,
  Loader2,
  CheckCircle2,
  TrendingDown,
  BarChart3,
  Zap,
  Copy,
  Download,
  ChevronDown,
} from "lucide-react";

interface AnalysisResult {
  summary: {
    appType: string;
    scale: string;
    expectedUsers: string;
    dataComplexity: string;
  };
  architecture: {
    frontend: { tech: string; hosting: string; reason: string };
    backend: { tech: string; hosting: string; reason: string };
    database: { tech: string; hosting: string; reason: string };
    extras: { name: string; tech: string; reason: string }[];
  };
  costComparison: {
    cheapest: {
      provider: string;
      stack: string;
      monthlyCost: string;
    };
    balanced: {
      provider: string;
      stack: string;
      monthlyCost: string;
    };
    performance: {
      provider: string;
      stack: string;
      monthlyCost: string;
    };
  };
  recommendations: string[];
}

// Mock analysis for demo
const mockResult: AnalysisResult = {
  summary: {
    appType: "SaaS",
    scale: "MVP / Startup",
    expectedUsers: "100–5,000",
    dataComplexity: "Moderate",
  },
  architecture: {
    frontend: {
      tech: "Next.js 15 (TypeScript)",
      hosting: "Vercel — Hobby (Free)",
      reason:
        "SSR/SSG hybrid for SEO + interactive dashboard. Vercel offers native Next.js support with global CDN.",
    },
    backend: {
      tech: "FastAPI (Python 3.12)",
      hosting: "Railway — Developer ($5/mo)",
      reason:
        "Async-native for handling concurrent API + LLM calls. Docker-native deployment with zero config.",
    },
    database: {
      tech: "PostgreSQL",
      hosting: "Neon — Free Tier (0.5GB)",
      reason:
        "Structured data (users, analyses, pricing) maps perfectly to relational tables. Scale-to-zero saves costs.",
    },
    extras: [
      {
        name: "Cache",
        tech: "Upstash Redis (Free)",
        reason: "LLM response caching to reduce API costs by 40%",
      },
      {
        name: "AI/LLM",
        tech: "Groq — Llama 3.1 70B",
        reason: "Ultra-fast inference at $0.05/1M tokens with free tier",
      },
    ],
  },
  costComparison: {
    cheapest: {
      provider: "PaaS Stack",
      stack: "Vercel + Railway + Neon",
      monthlyCost: "$5–11",
    },
    balanced: {
      provider: "Google Cloud",
      stack: "Cloud Run + Cloud SQL + GCS",
      monthlyCost: "$25–40",
    },
    performance: {
      provider: "AWS",
      stack: "Lambda + RDS + S3 + CloudFront",
      monthlyCost: "$45–80",
    },
  },
  recommendations: [
    "Use Vercel's free hobby tier for frontend — $0/mo with global CDN",
    "Cache LLM responses in Redis to cut AI costs by 40-60%",
    "Start with Neon's free PostgreSQL — scale-to-zero means $0 when idle",
    "Use Groq's free tier for LLM — 30 req/min is enough for MVP",
    "Batch embedding updates with OpenAI Batch API for 50% discount",
  ],
};

export default function AnalyzePage() {
  const [idea, setIdea] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [activeTab, setActiveTab] = useState<"arch" | "cost" | "recs">("arch");

  const handleAnalyze = async () => {
    if (!idea.trim()) return;
    setIsAnalyzing(true);
    setResult(null);

    // Simulate analysis delay
    await new Promise((r) => setTimeout(r, 3000));
    setResult(mockResult);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen pt-[72px]">
      {/* Header */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg animate-grid-pulse" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1),transparent_70%)] -top-48 left-1/2 -translate-x-1/2 blur-[60px]" />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Analyze Your <span className="gradient-text">App Idea</span>
          </h1>
          <p className="text-base text-text-secondary max-w-[500px] mx-auto">
            Describe what you want to build and our AI will generate a
            cost-optimized architecture in seconds.
          </p>
        </div>
      </div>

      {/* Input Section */}
      <div className="max-w-[800px] mx-auto px-6 -mt-4">
        <div className="glass-card p-6 md:p-8">
          <label className="block text-sm font-semibold text-text-secondary mb-3">
            Describe your app idea
          </label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="e.g., I want to build a SaaS platform that helps freelancers track time, send invoices, and manage clients. It should have user authentication, a dashboard with analytics, and integrate with Stripe for payments. Expected users: around 500-1000 in the first year."
            className="w-full min-h-[160px] bg-surface border border-border-default rounded-xl p-4 text-base text-text-primary placeholder:text-text-tertiary focus:border-border-focus focus:ring-2 focus:ring-primary-glow/30 transition-all resize-y outline-none"
          />

          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-text-tertiary">
              {idea.length} characters
            </span>
            <button
              onClick={handleAnalyze}
              disabled={!idea.trim() || isAnalyzing}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white font-semibold shadow-lg shadow-primary-glow hover:shadow-xl transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Analyze
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isAnalyzing && (
        <div className="max-w-[800px] mx-auto px-6 mt-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                <Loader2 size={20} className="text-primary-light animate-spin" />
              </div>
              <div>
                <h3 className="font-bold">Processing your idea...</h3>
                <p className="text-sm text-text-tertiary">
                  Analyzing requirements & fetching pricing data
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Extracting requirements", done: true },
                { label: "Querying pricing database", done: true },
                { label: "Generating architecture", done: false },
                { label: "Comparing costs", done: false },
              ].map((step, i) => (
                <div
                  key={step.label}
                  className="flex items-center gap-3 text-sm"
                  style={{ animationDelay: `${i * 400}ms` }}
                >
                  {step.done ? (
                    <CheckCircle2
                      size={16}
                      className="text-success animate-fade-in"
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-border-default border-t-primary animate-spin" />
                  )}
                  <span
                    className={
                      step.done ? "text-text-secondary" : "text-text-tertiary"
                    }
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="max-w-[1000px] mx-auto px-6 mt-8 pb-24 animate-fade-in-up">
          {/* Result header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-success/15 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-success" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Analysis Complete</h2>
                <p className="text-sm text-text-tertiary">
                  Generated in 2.4 seconds
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-surface border border-border-default hover:bg-surface-hover transition-colors">
                <Copy size={14} />
                Copy
              </button>
              <button className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-surface border border-border-default hover:bg-surface-hover transition-colors">
                <Download size={14} />
                Export PDF
              </button>
            </div>
          </div>

          {/* Summary badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(result.summary).map(([key, value]) => (
              <span
                key={key}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary-light border border-primary/20"
              >
                {key === "appType" && "📱"}
                {key === "scale" && "📐"}
                {key === "expectedUsers" && "👥"}
                {key === "dataComplexity" && "📊"}
                {value}
              </span>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-surface rounded-xl p-1 mb-6 border border-border-default">
            {[
              { id: "arch" as const, label: "Architecture", icon: <Server size={14} /> },
              { id: "cost" as const, label: "Cost Comparison", icon: <BarChart3 size={14} /> },
              { id: "recs" as const, label: "Recommendations", icon: <Zap size={14} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all
                  ${
                    activeTab === tab.id
                      ? "bg-primary/15 text-primary-light shadow-sm"
                      : "text-text-tertiary hover:text-text-secondary"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content: Architecture */}
          {activeTab === "arch" && (
            <div className="space-y-4 animate-fade-in">
              {/* Main stack */}
              {[
                {
                  label: "Frontend",
                  icon: <Globe size={18} />,
                  ...result.architecture.frontend,
                },
                {
                  label: "Backend",
                  icon: <Server size={18} />,
                  ...result.architecture.backend,
                },
                {
                  label: "Database",
                  icon: <Database size={18} />,
                  ...result.architecture.database,
                },
              ].map((item) => (
                <div key={item.label} className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/12 text-primary-light flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                          {item.label}
                        </span>
                      </div>
                      <h4 className="text-base font-bold mb-0.5">
                        {item.tech}
                      </h4>
                      <p className="text-sm text-accent-light mb-2">
                        {item.hosting}
                      </p>
                      <p className="text-sm text-text-tertiary leading-relaxed">
                        {item.reason}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Extras */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {result.architecture.extras.map((extra) => (
                  <div key={extra.name} className="glass-card p-5">
                    <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                      {extra.name}
                    </span>
                    <h4 className="text-sm font-bold mt-1 mb-1">
                      {extra.tech}
                    </h4>
                    <p className="text-xs text-text-tertiary leading-relaxed">
                      {extra.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: Cost Comparison */}
          {activeTab === "cost" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in">
              {[
                {
                  label: "🏆 Cheapest",
                  ...result.costComparison.cheapest,
                  color:
                    "border-success/30 bg-success/5 hover:border-success/50",
                  badge: "bg-success/15 text-success",
                },
                {
                  label: "⚖️ Balanced",
                  ...result.costComparison.balanced,
                  color:
                    "border-primary/30 bg-primary/5 hover:border-primary/50",
                  badge: "bg-primary/15 text-primary-light",
                },
                {
                  label: "🚀 Performance",
                  ...result.costComparison.performance,
                  color:
                    "border-warning/30 bg-warning/5 hover:border-warning/50",
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
                    {option.stack}
                  </p>
                  <div className="text-3xl font-extrabold tracking-tight gradient-text">
                    {option.monthlyCost}
                    <span className="text-sm text-text-tertiary font-normal ml-1">
                      /mo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content: Recommendations */}
          {activeTab === "recs" && (
            <div className="space-y-3 animate-fade-in">
              {result.recommendations.map((rec, i) => (
                <div
                  key={i}
                  className="glass-card p-5 flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-success/15 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingDown size={12} className="text-success" />
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {rec}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
