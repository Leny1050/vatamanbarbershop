import { BUSINESS, TEXTS } from "@/lib/content"
import { BookingButton } from "@/components/booking-button"
import { cn } from "@/lib/utils"

export function FooterCta() {
  const year = new Date().getFullYear()
  const copyright = TEXTS.copyrightTemplate
    .replace("{year}", String(year))
    .replace("{name}", BUSINESS.name)
    .replace("{city}", BUSINESS.city)

  return (
    <section className="relative overflow-hidden border-t border-border/70">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1000px 600px at 50% 10%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%), linear-gradient(180deg, transparent, rgba(0,0,0,0.55))",
        }}
      />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="brand-text font-display text-[9rem] sm:text-[12rem] font-bold uppercase whitespace-nowrap opacity-[0.06]">
          VATAMAN
        </span>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="flex items-center gap-4 mb-10 justify-center">
          <div className="h-px flex-1 max-w-20 bg-border/60" />
          <p
            className="font-display text-sm uppercase tracking-[0.4em] text-primary"
          >
            {TEXTS.careerCta}
          </p>
          <div className="h-px flex-1 max-w-20 bg-border/60" />
        </div>

        <div className="max-w-lg mx-auto text-center">
          <h3 className="font-display text-3xl font-bold uppercase tracking-wide mb-2 sm:text-4xl">
            Programează-te
          </h3>
          <h3 className="brand-text font-display text-3xl font-bold uppercase tracking-wide mb-8 sm:text-4xl">
            acum online
          </h3>
          <BookingButton className={cn("mx-auto max-w-sm")} />
        </div>

        <p className="mt-16 text-center font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
          {copyright}
        </p>
      </div>
    </section>
  )
}