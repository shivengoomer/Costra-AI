"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Loader2,
} from "lucide-react";

export default function AnalyzePage() {
  const [idea, setIdea] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!idea.trim()) return;
    setIsAnalyzing(true);
    await new Promise((r) => setTimeout(r, 2500));
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen pt-[90px] bg-[#080808] text-white relative overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/20 to-green-400/20 blur-[120px] opacity-40" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 blur-[100px]" />

      {/* HEADER */}
      <div className="relative text-center px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
          Build smarter. <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">
            Analyze before you deploy.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-[560px] mx-auto leading-relaxed">
          Describe your product and instantly get a{" "}
          <span className="text-white font-medium">
            cost-optimized architecture
          </span>{" "}
          with infrastructure, pricing, and scaling insights.
        </p>
      </div>

      {/* INPUT CARD */}
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

          {/* subtle top glow */}
          <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />

          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your app idea... (SaaS, AI tool, marketplace, etc.)"
            className="w-full min-h-[160px] bg-black/40 border border-white/10 rounded-xl p-5 text-gray-200 placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all outline-none text-[15px] leading-relaxed"
          />

          <div className="flex items-center justify-between mt-5">
            <span className="text-xs text-gray-500">
              {idea.length} characters
            </span>

            <button
              onClick={handleAnalyze}
              disabled={!idea.trim() || isAnalyzing}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
              bg-gradient-to-r from-blue-500 to-green-400 
              text-white font-semibold 
              shadow-lg shadow-blue-500/20 
              hover:scale-[1.04] hover:shadow-xl 
              transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Thinking...
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

      {/* LOADING UI */}
      {isAnalyzing && (
        <div className="relative max-w-3xl mx-auto px-6 mt-10">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Loader2 className="animate-spin text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Analyzing your idea...
                </h3>
                <p className="text-sm text-gray-400">
                  Generating architecture & cost breakdown
                </p>
              </div>
            </div>

            {/* animated steps */}
            <div className="space-y-3 text-sm text-gray-400">
              <p className="animate-pulse">✔ Extracting requirements</p>
              <p className="animate-pulse delay-100">✔ Matching architecture</p>
              <p className="animate-pulse delay-200">✔ Optimizing cost</p>
              <p className="animate-pulse delay-300">⏳ Finalizing output</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}