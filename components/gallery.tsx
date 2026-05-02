import Image from "next/image"
import { Section } from "@/components/section"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { GALLERY } from "@/lib/content"
import { cn } from "@/lib/utils"

export function Gallery() {
  return (
    <Section id="galerie" eyebrow="Lucrările noastre" title="Galerie">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative w-full"
      >
        <CarouselContent className="-ml-3">
          {GALLERY.map((item, idx) => (
            <CarouselItem
              key={`${item.file}-${idx}`}
              className="pl-3 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div
                className={cn(
                  "group relative overflow-hidden rounded-2xl",
                  "border border-border/70 bg-card/40",
                  "shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
                  "aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/4.8]",
                )}
              >
                <div
                  className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.45))",
                  }}
                />

                <Image
                  src={`/${item.file}`}
                  alt={item.alt ?? ""}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={cn(
                    "object-cover transition-transform duration-500",
                    "group-hover:scale-105",
                  )}
                  priority={idx < 3}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 sm:left-3 border-border/70 bg-background/70 backdrop-blur hover:bg-background/90" />
        <CarouselNext className="right-2 sm:right-3 border-border/70 bg-background/70 backdrop-blur hover:bg-background/90" />
      </Carousel>
    </Section>
  )
}