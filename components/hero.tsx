import { CONTACTS, TEXTS } from "@/lib/content"
import { BookingButton } from "@/components/booking-button"
import { LogoMark } from "@/components/logo-mark"
import { Instagram, MapPin, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col bg-[#080807]">

      {/* Top radial glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 65%)",
        }}
        aria-hidden
      />

      {/* Left accent line */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-px -z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(180deg, transparent 8%, color-mix(in oklab, var(--primary) 45%, transparent) 40%, color-mix(in oklab, var(--primary) 45%, transparent) 60%, transparent 92%)",
        }}
        aria-hidden
      />

      {/* Diagonal decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.018] hidden lg:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(62deg, color-mix(in oklab, var(--primary) 90%, white) 0px, transparent 1px, transparent 90px, color-mix(in oklab, var(--primary) 90%, white) 91px)",
        }}
        aria-hidden
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:pt-20">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT ── */}
          <div className="order-2 lg:order-1 flex flex-col gap-8 sm:gap-9">

            {/* Eyebrow */}
            <p
              className="text-center sm:text-left font-sans text-[10px] uppercase tracking-[0.6em]"
              style={{ color: "color-mix(in oklab, var(--primary) 90%, white)" }}
            >
              {TEXTS.taglineRo}
            </p>

            {/* Logo + Name */}
            <div className="flex flex-col items-center gap-7 sm:flex-row sm:items-center sm:gap-8 lg:items-start">
              <div className="relative shrink-0">
                <div
                  className="absolute -inset-4 rounded-full blur-2xl opacity-25"
                  style={{ background: "color-mix(in oklab, var(--primary) 80%, transparent)" }}
                  aria-hidden
                />
                <LogoMark size={78} priority className="relative sm:hidden" />
                <LogoMark size={92} priority className="relative hidden sm:inline-flex" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="font-display font-bold uppercase leading-[0.88]">
                  <span
                    className="block text-[3.25rem] tracking-tight sm:text-[5.2rem] lg:text-[7rem]"
                    style={{
                      background:
                        "linear-gradient(135deg, #f0ebe3 30%, color-mix(in oklab, var(--primary) 75%, white) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Vataman
                  </span>
                  <span className="mt-2 block font-sans text-xs font-light tracking-[0.35em] text-foreground/55 sm:text-base sm:tracking-[0.45em]">
                    Barbershop · Ciocana
                  </span>
                </h1>
              </div>
            </div>

            {/* Divider */}
            <div
              className="mx-auto w-12 h-px sm:mx-0"
              style={{
                background:
                  "linear-gradient(90deg, color-mix(in oklab, var(--primary) 50%, transparent), color-mix(in oklab, var(--primary) 80%, white), color-mix(in oklab, var(--primary) 50%, transparent))",
              }}
              aria-hidden
            />

            {/* About */}
            <p className="mx-auto max-w-md text-center font-sans text-[14px] leading-relaxed text-foreground/55 sm:mx-0 sm:text-left sm:text-[15px]">
              {TEXTS.about}
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-5">
              <BookingButton className="w-full max-w-full sm:w-auto" />
              <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-foreground/35 text-center sm:text-left max-w-[12rem] leading-loose">
                {TEXTS.bookingNote}
              </span>
            </div>

            {/* Hours / city chips */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 sm:justify-start">
              <div className="text-center sm:text-left">
                <p className="font-sans text-[9px] uppercase tracking-[0.5em] text-foreground/35">Program</p>
                <p className="mt-1 font-sans text-sm tracking-wider text-foreground/70">
                  {CONTACTS.hours[0]?.days} · {CONTACTS.hours[0]?.time}
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-sans text-[9px] uppercase tracking-[0.5em] text-foreground/35">Locație</p>
                <p className="mt-1 font-sans text-sm tracking-wider text-foreground/70">Ciocana, Chișinău</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT — contact card ── */}
          <div className="order-1 lg:order-2 hidden lg:block">
            <div
              className="relative mx-auto w-full max-w-md overflow-hidden lg:max-w-none"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "0.5px solid rgba(255,255,255,0.07)",
                borderRadius: "2px",
                boxShadow: "0 48px 100px rgba(0,0,0,0.7)",
              }}
            >
              {/* Top shimmer line */}
              <div
                className="absolute top-0 inset-x-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 55%, white), transparent)",
                }}
                aria-hidden
              />

              <div className="relative p-5 sm:p-8 flex flex-col gap-5 sm:gap-6">
                {/* Label + Instagram */}
                <div className="flex items-center justify-between">
                  <p className="font-sans text-[9px] uppercase tracking-[0.55em] text-foreground/40">
                    Rezervare &amp; locație
                  </p>
                  <a
                    href={CONTACTS.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 font-sans text-[9px] uppercase tracking-[0.3em] text-foreground/40 transition-colors hover:text-primary"
                    style={{ border: "0.5px solid rgba(255,255,255,0.07)" }}
                  >
                    <Instagram className="h-3 w-3" />
                    Instagram
                  </a>
                </div>

                {/* Phone */}
                <a
                  href={CONTACTS.phone.href}
                  className="group flex items-center gap-4 p-4 transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "0.5px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center text-primary"
                    style={{
                      border: "0.5px solid color-mix(in oklab, var(--primary) 35%, transparent)",
                    }}
                  >
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-foreground/38 mb-0.5">
                      Telefon
                    </p>
                    <p className="font-display text-xl font-semibold tracking-wide text-foreground">
                      {CONTACTS.phone.display}
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div
                  className="flex items-start gap-4 p-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "0.5px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center text-primary mt-0.5"
                    style={{
                      border: "0.5px solid color-mix(in oklab, var(--primary) 35%, transparent)",
                    }}
                  >
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-foreground/38 mb-1">
                      Adresă
                    </p>
                    <p className="font-sans text-sm leading-relaxed text-foreground/70">
                      {CONTACTS.address.replace("📍", "")}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-5"
                  style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: "color-mix(in oklab, var(--primary) 90%, white)",
                      }}
                    />
                    <span className="font-sans text-xs tracking-widest text-foreground/50">
                      {CONTACTS.hours[0]?.days} · {CONTACTS.hours[0]?.time}
                    </span>
                  </div>
                  <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-foreground/30">
                    {CONTACTS.instagram.handle}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}