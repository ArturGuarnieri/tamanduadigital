"use client";

import React from "react";
import { useLanguage } from "@/contexts/language-context";
import { serviceCards, servicesTitle, servicesDescription } from "@/content/services";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function ServicesCarouselComponent() {
  const { language, mounted } = useLanguage();
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
    });
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  if (!mounted) return null;

  return (
    <div className="w-full relative">
      <Carousel 
        setApi={setApi}
        className="w-full" 
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full border-2 border-foreground bg-transparent hover:bg-foreground/10 text-foreground"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="size-5 md:size-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full border-2 border-foreground bg-transparent hover:bg-foreground/10 text-foreground"
          aria-label="Próximo slide"
        >
          <ChevronRight className="size-5 md:size-6" />
        </Button>

        <CarouselContent className="px-4 md:px-12 lg:px-16">
          {serviceCards.map((service) => (
            <CarouselItem
              key={service.id}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div
                className="h-full rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative w-full h-64 md:h-80">
                  <Image
                    src={service.image}
                    alt={service.title[language]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div 
                  className="bg-white dark:bg-[#2B2B2B] px-6 py-6 flex-grow flex flex-col"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-[var(--color-primary-orange)]">
                    {service.title[language]}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 dark:text-white">
                    {service.description[language]}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export function ServicesCarousel() {
  const { language } = useLanguage();

  return (
    <section id="services" className="w-full mt-6 md:mt-8">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[var(--color-primary-blue)]">
          {servicesTitle[language]}
        </h2>
      </div>
      <ServicesCarouselComponent />
      <div className="mt-8">
        <p className="text-base md:text-lg text-muted-foreground text-justify m-0">
          {servicesDescription[language]}
        </p>
      </div>
    </section>
  );
}
