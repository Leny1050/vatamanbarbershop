import Link from "next/link"
import { BUSINESS, NAV } from "@/lib/content"
import { BookingButton } from "@/components/booking-button"
import { LogoMark } from "@/components/logo-mark"
import { cn } from "@/lib/utils"

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "border-b border-border/70 bg-background/55 backdrop-blur supports-[backdrop-filter]:bg-background/35",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <LogoMark size={40} priority />
            <div className="leading-none">
              <span className="brand-text font-display text-lg font-bold tracking-wide">
                {BUSINESS.name}
              </span>
              <div className="mt-1 hidden font-display text-[10px] uppercase tracking-[0.55em] text-muted-foreground sm:block">
                {BUSINESS.city}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-[11px] uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <BookingButton
              className={cn(
                "w-auto px-5 py-2.5 text-sm tracking-[0.25em]",
                "sm:px-6 sm:py-3 sm:text-base",
              )}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

