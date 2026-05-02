import { MapPin, Phone, Clock, Instagram } from "lucide-react"
import { CONTACTS, TEXTS } from "@/lib/content"
import { Section } from "@/components/section"
import { cn } from "@/lib/utils"

export function Contacts() {
  return (
    <Section id="contacte" eyebrow="Ne găsești" title={TEXTS.contactsTitle}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: <MapPin className="h-5 w-5" />,
            label: "Adresă",
            content: (
              <p className="font-sans text-sm text-foreground leading-relaxed">
                {CONTACTS.address.replace("📍", "")}
              </p>
            ),
          },
          {
            icon: <Phone className="h-5 w-5" />,
            label: "Telefon",
            content: (
              <a
                href={CONTACTS.phone.href}
                className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                {CONTACTS.phone.display}
              </a>
            ),
          },
          {
            icon: <Clock className="h-5 w-5" />,
            label: "Program",
            content: CONTACTS.hours.map((h, i) => (
              <div key={i} className="font-sans text-sm text-foreground">
                <span className="font-semibold text-primary">{h.days}</span>
                <br />
                {h.time}
              </div>
            )),
          },
          {
            icon: <Instagram className="h-5 w-5" />,
            label: "Instagram",
            content: (
              <a
                href={CONTACTS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-base font-bold text-foreground hover:text-primary transition-colors break-all"
              >
                {CONTACTS.instagram.handle}
              </a>
            ),
          },
        ].map((card) => (
          <div
            key={card.label}
            className={cn(
              "group rounded-xl p-6 transition-colors",
              "border border-border/70 bg-card/40",
            )}
          >
            <div className="mb-4 text-primary">{card.icon}</div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              {card.label}
            </p>
            {card.content}
          </div>
        ))}
      </div>
    </Section>
  )
}