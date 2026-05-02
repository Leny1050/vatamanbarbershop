'use client'

import Link from "next/link"
import { BUSINESS, CONTACTS, NAV, TEXTS } from "@/lib/content"
import { BookingButton } from "@/components/booking-button"
import { LogoMark } from "@/components/logo-mark"
import { cn } from "@/lib/utils"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Instagram, MapPin, Phone, Clock } from "lucide-react"

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
              <span className="brand-text font-display text-base font-bold tracking-wide sm:text-lg">
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
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="md:hidden rounded-full border-border/70 bg-background/40 backdrop-blur"
                  aria-label="Open menu"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-border/70 p-0">
                <SheetHeader className="border-b border-border/60 p-5">
                  <div className="flex items-center gap-3">
                    <LogoMark size={44} />
                    <div className="leading-none">
                      <SheetTitle className="brand-text font-display text-lg font-bold tracking-wide">
                        {BUSINESS.name}
                      </SheetTitle>
                      <p className="mt-1 font-display text-[10px] uppercase tracking-[0.55em] text-muted-foreground">
                        {BUSINESS.city}
                      </p>
                    </div>
                  </div>
                </SheetHeader>

                <div className="p-5 space-y-6">
                  <div className="grid gap-2">
                    {NAV.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <a
                          href={item.href}
                          className="rounded-xl border border-border/60 bg-card/25 px-4 py-3 font-display text-[11px] uppercase tracking-[0.45em] text-foreground/85 hover:border-primary/40 hover:text-primary transition-colors"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-card/20 overflow-hidden">
                    <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border/60">
                      <p className="font-sans text-[9px] uppercase tracking-[0.55em] text-foreground/45">
                        {TEXTS.bookingNote}
                      </p>
                      <a
                        href={CONTACTS.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 font-sans text-[9px] uppercase tracking-[0.3em] text-foreground/55 transition-colors hover:text-primary"
                        style={{ border: "0.5px solid rgba(255,255,255,0.09)" }}
                      >
                        <Instagram className="h-3 w-3" />
                        Instagram
                      </a>
                    </div>

                    <a
                      href={CONTACTS.phone.href}
                      className="flex items-center gap-3 px-4 py-4 hover:bg-background/20 transition-colors"
                    >
                      <span className="flex h-10 w-10 items-center justify-center text-primary"
                        style={{ border: "0.5px solid color-mix(in oklab, var(--primary) 35%, transparent)" }}>
                        <Phone className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-foreground/40">
                          Telefon
                        </p>
                        <p className="font-display text-lg font-semibold tracking-wide text-foreground">
                          {CONTACTS.phone.display}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 px-4 pb-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-primary mt-0.5"
                        style={{ border: "0.5px solid color-mix(in oklab, var(--primary) 35%, transparent)" }}>
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-foreground/40">
                          Adresă
                        </p>
                        <p className="mt-1 font-sans text-sm leading-relaxed text-foreground/70">
                          {CONTACTS.address.replace("📍", "")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-border/60">
                      <div className="flex items-center gap-2 text-foreground/55">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-sans text-xs tracking-widest">
                          {CONTACTS.hours[0]?.days} · {CONTACTS.hours[0]?.time}
                        </span>
                      </div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-foreground/35">
                        {CONTACTS.instagram.handle}
                      </span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <BookingButton
              className={cn(
                "hidden md:inline-flex w-auto rounded-full px-4 py-2 text-[12px] tracking-[0.22em]",
                "sm:px-6 sm:py-3 sm:text-base sm:tracking-[0.25em]",
              )}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

