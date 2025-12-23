"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Footer() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark");

  return (
    <footer className={`w-full transition-colors duration-300 ${isDark ? 'bg-[var(--color-footer-dark)]' : 'bg-[var(--color-footer-light)]'}`}>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="relative w-40 h-40 rounded-full flex items-center justify-center">
            <div className="relative w-32 h-32">
              <Image
                src="/logo-rodape.png"
                alt="Tamanduá Digital Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
