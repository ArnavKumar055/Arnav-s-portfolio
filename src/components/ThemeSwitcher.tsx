"use client";

import { useTheme } from "@/app/providers"; // Updated to use our new provider
import { Monitor, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Guard against hydration errors by tracking component mount state
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isSaas = theme === "saas";

  return (
    <button
      onClick={() => setTheme(isSaas ? "dark" : "saas")}
      className={`fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-md transition-all duration-300 border ${
        isSaas
          ? "bg-white/20 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:bg-white/30"
          : "bg-black/40 border-white/10 text-gray-300 hover:text-white hover:border-white/30"
      }`}
    >
      {!isSaas ? (
        <>
          <Sparkles size={18} />
          <span className="text-sm font-medium">Switch to SaaS Vibe</span>
        </>
      ) : (
        <>
          <Monitor size={18} />
          <span className="text-sm font-medium">Switch to Dark</span>
        </>
      )}
    </button>
  );
}
