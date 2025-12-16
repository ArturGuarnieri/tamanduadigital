"use client";

import * as React from "react";

type Language = "en" | "pt";

type Translations = {
  [key: string]: {
    en: string;
    pt: string;
  };
};

const translations: Translations = {
  home: { en: "home", pt: "início" },
  ourServices: { en: "our services", pt: "nossos serviços" },
  whoWeAre: { en: "who we are", pt: "quem somos" },
  contactUs: { en: "contact us", pt: "fale conosco" },
  settings: { en: "Settings", pt: "Configurações" },
  language: { en: "Language", pt: "Idioma" },
  theme: { en: "Theme", pt: "Tema" },
  dark: { en: "Dark", pt: "Escuro" },
  light: { en: "Light", pt: "Claro" },
  english: { en: "English", pt: "Inglês" },
  portuguese: { en: "Portuguese", pt: "Português" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  mounted: boolean;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Language>("en");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    if (!mounted) return translations[key]?.en || key;
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t, mounted }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
