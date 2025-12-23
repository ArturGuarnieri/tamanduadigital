"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/language-context";

export default function MenuLinks({ style, onClose }: { style: string; onClose?: () => void }) {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.href;
    const hash = href.substring(href.indexOf("#"));
    
    e.preventDefault();
    
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    onClose?.();
  };

  return (
    <nav className={style}>
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-opacity cursor-pointer"
        href="#home"
        onClick={handleLinkClick}
      >
        {t("home")}
      </a>
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-opacity cursor-pointer"
        href="#services"
        onClick={handleLinkClick}
      >
        {t("ourServices")}
      </a>
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-opacity cursor-pointer"
        href="#who-we-are"
        onClick={handleLinkClick}
      >
        {t("whoWeAre")}
      </a>
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-opacity cursor-pointer"
        href="#contact-us"
        onClick={handleLinkClick}
      >
        {t("contactUs")}
      </a>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Settings className="hover:rotate-90 transition-transform duration-300" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{t("settings")}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setLanguage("en")}>
            {language === "en" && <Check className="mr-2 size-4" />}
            <span className={language !== "en" ? "ml-6" : ""}>{t("english")}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("pt")}>
            {language === "pt" && <Check className="mr-2 size-4" />}
            <span className={language !== "pt" ? "ml-6" : ""}>{t("portuguese")}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            {theme === "dark" && <Check className="mr-2 size-4" />}
            <span className={theme !== "dark" ? "ml-6" : ""}>{t("dark")}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            {theme === "light" && <Check className="mr-2 size-4" />}
            <span className={theme !== "light" ? "ml-6" : ""}>{t("light")}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
