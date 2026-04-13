import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analyze Your App Idea",
  description:
    "Describe your app idea and get an instant, cost-optimized cloud architecture with real-time pricing across AWS, GCP, and Azure.",
};

export default function AnalyzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
