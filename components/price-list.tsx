import { CATEGORIES, TEXTS, type Service, type ServiceCategory } from "@/lib/content"
import { Section } from "@/components/section"
import { Clock } from "lucide-react"
import { cn } from "@/lib/utils"

function ServiceRow({ service, last }: { service: Service; last?: boolean }) {
  return (
    <div
      className={cn(
        "grid grid-cols-[1fr_auto_auto] items-center gap-4 py-4 sm:gap-6 sm:py-5",
        !last && "border-b",
        "border-white/[0.05]",
      )}
    >
      {/* Name */}
      <div className="min-w-0">
        <p className="font-sans text-[13px] font-medium text-foreground/85 leading-snug">
          {service.ro}
        </p>
        <p className="mt-0.5 font-sans text-[11px] italic text-foreground/38">
          {service.ru}
        </p>
      </div>

      {/* Duration */}
      {service.duration ? (
        <div className="hidden items-center gap-1.5 sm:flex shrink-0">
          <Clock className="h-3 w-3 text-foreground/25" />
          <span className="font-sans text-[11px] tabular-nums tracking-wider text-foreground/35">
            {service.duration}
          </span>
        </div>
      ) : (
        <span />
      )}

      {/* Price */}
      <div className="text-right shrink-0">
        <span
          className="font-display text-2xl font-bold tabular-nums"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 90%, white), color-mix(in oklab, var(--primary) 60%, white))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {service.price}
        </span>
        <span className="ml-1 font-sans text-[10px] uppercase tracking-widest text-foreground/30">
          {TEXTS.currency}
        </span>
      </div>
    </div>
  )
}

function CategoryCard({ category }: { category: ServiceCategory }) {
  const isPremium = category.id === "top-barber"
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: isPremium
          ? "0.5px solid color-mix(in oklab, var(--primary) 35%, transparent)"
          : "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: "2px",
        boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
      }}
    >
      {/* Top shimmer */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: isPremium
            ? "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 65%, white), transparent)"
            : "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 35%, white), transparent)",
        }}
        aria-hidden
      />

      {/* Header */}
      <div
        className="px-7 py-5 sm:px-8"
        style={{
          borderBottom: isPremium
            ? "0.5px solid color-mix(in oklab, var(--primary) 25%, transparent)"
            : "0.5px solid rgba(255,255,255,0.06)",
          background: isPremium
            ? "linear-gradient(90deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 55%)"
            : undefined,
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-[0.12em] text-foreground/90">
              {category.title}
            </p>
            {category.subtitle && (
              <p className="mt-0.5 font-sans text-[9px] uppercase tracking-[0.5em] text-foreground/35">
                {category.subtitle}
              </p>
            )}
          </div>
          {isPremium && (
            <span
              className="shrink-0 font-sans text-[9px] uppercase tracking-[0.25em] px-3 py-1.5"
              style={{
                border: "0.5px solid color-mix(in oklab, var(--primary) 45%, transparent)",
                color: "color-mix(in oklab, var(--primary) 90%, white)",
                background: "color-mix(in oklab, var(--primary) 8%, transparent)",
              }}
            >
              Premium
            </span>
          )}
        </div>
      </div>

      {/* Services */}
      <div className="px-6 sm:px-8 py-1">
        {category.services.map((s, i) => (
          <ServiceRow
            key={`${category.id}-${s.ro}`}
            service={s}
            last={i === category.services.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export function PriceList() {
  const mainCats = CATEGORIES.filter((c) => c.id !== "epilare")
  const extraCats = CATEGORIES.filter((c) => c.id === "epilare")

  return (
    <Section id="servicii" eyebrow="Meniu" title="Prețuri" description={TEXTS.pricesLabel}>
      <div className="flex flex-col gap-5">
        {/* Barber + TOP Barber side by side */}
        <div className="grid gap-5 lg:grid-cols-2">
          {mainCats.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Epilare — half width on large screens */}
        <div className="grid gap-5 lg:grid-cols-2">
          {extraCats.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
          <div />
        </div>
      </div>
    </Section>
  )
}