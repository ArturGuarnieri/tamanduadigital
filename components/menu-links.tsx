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

export default function MenuLinks({ style }: { style: string }) {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className={style}>
      <Link
        className="hover:text-foreground hover:underline underline-offset-2 transition-opacity"
        href="/"
      >
        {t("home")}
      </Link>
      <Link
        className="hover:text-foreground hover:underline underline-offset-2 transition-opacity"
        href="/services"
      >
        {t("ourServices")}
      </Link>
      <Link
        className="hover:text-foreground hover:underline underline-offset-2 transition-opacity"
        href="/who-we-are"
      >
        {t("whoWeAre")}
      </Link>
      <Link
        className="hover:text-foreground hover:underline underline-offset-2 transition-opacity"
        href="/contact-us"
      >
        {t("contactUs")}
      </Link>
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
