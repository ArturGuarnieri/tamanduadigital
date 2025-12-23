"use client";

import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  image: string;
  description: string;
  linkedin?: string;
  github?: string;
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start flex-shrink-0 w-full md:w-auto">
      <div className="flex-shrink-0 w-32 md:w-48">
        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 items-center md:items-start text-center md:text-left">
        <h3 className="text-lg md:text-3xl font-bold mb-2 md:mb-4 text-[var(--color-primary-orange)]">
          {member.name}
        </h3>

        <p className="text-xs md:text-base text-muted-foreground md:text-justify mb-4 md:mb-8 leading-relaxed flex-1">
          {member.description}
        </p>

        <div className="flex gap-4">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-200"
              style={{ 
                '--hover-color': "var(--color-primary-orange)" 
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-primary-orange)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted-foreground)';
              }}
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin size={20} className="md:w-6 md:h-6" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-200"
              style={{ 
                '--hover-color': "var(--color-primary-orange)" 
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-primary-orange)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted-foreground)';
              }}
              aria-label={`${member.name} GitHub`}
            >
              <Github size={20} className="md:w-6 md:h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
