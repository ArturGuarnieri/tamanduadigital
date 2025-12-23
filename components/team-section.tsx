"use client";

import { useLanguage } from "@/contexts/language-context";
import { teamTitle, teamMembers } from "@/content/team";
import { TeamMemberCard } from "./team-member-card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useCallback } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

function TeamCarouselComponent() {
  const { language } = useLanguage();
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <>
      <div className="md:hidden relative">
        <Carousel setApi={setApi} plugins={[plugin.current]} opts={{ loop: true }}>
          <CarouselContent>
            {teamMembers.map((member) => (
              <CarouselItem key={member.id}>
                <TeamMemberCard
                  member={{
                    ...member,
                    description: member.description[language],
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="absolute left-2 top-20 z-10 size-10 rounded-full border-2 border-foreground bg-transparent hover:bg-foreground/10 text-foreground"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="size-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="absolute right-2 top-20 z-10 size-10 rounded-full border-2 border-foreground bg-transparent hover:bg-foreground/10 text-foreground"
          aria-label="Próximo slide"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>

      <div className="hidden md:flex flex-col gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={{
              ...member,
              description: member.description[language],
            }}
          />
        ))}
      </div>
    </>
  );
}

export function TeamSection() {
  const { language } = useLanguage();

  return (
    <section id="who-we-are" className="w-full mt-12 md:mt-16">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[var(--color-primary-blue)]">
          {teamTitle[language]}
        </h2>
      </div>
      <TeamCarouselComponent />
    </section>
  );
}
