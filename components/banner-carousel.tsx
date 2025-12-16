"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { useLanguage } from "@/contexts/language-context";

type Translated = { en: string; pt: string };
interface BannerSlide {
  id: string | number;
  image: string;
  alt: string;
  title?: string | Translated;
  description?: string | Translated;
}

interface BannerCarouselProps {
  slides: BannerSlide[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function BannerCarousel({
  slides,
  className,
  autoPlay = true,
  autoPlayInterval = 5000,
}: BannerCarouselProps) {
  const { language } = useLanguage();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  React.useEffect(() => {
    if (!api || !autoPlay) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [api, autoPlay, autoPlayInterval]);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className={cn("relative w-full", className)}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full border-2 border-foreground bg-transparent hover:bg-foreground/10 text-foreground"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="size-5 md:size-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full border-2 border-foreground bg-transparent hover:bg-foreground/10 text-foreground"
          aria-label="Próximo slide"
        >
          <ChevronRight className="size-5 md:size-6" />
        </Button>

        <CarouselContent className="ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority
                />
                {(slide.title || slide.description) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 text-white">
                      {slide.title && (
                        <h2 className="text-lg md:text-2xl lg:text-4xl font-bold mb-1 md:mb-2">
                          {typeof slide.title === "string"
                            ? slide.title
                            : slide.title[language]}
                        </h2>
                      )}
                      {slide.description && (
                        <p className="text-sm md:text-base lg:text-lg opacity-90 line-clamp-2">
                          {typeof slide.description === "string"
                            ? slide.description
                            : slide.description[language]}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "size-2.5 md:size-3 rounded-full transition-all duration-300",
                current === index
                  ? "bg-foreground w-6 md:w-8"
                  : "bg-foreground/30 hover:bg-foreground/50"
              )}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
