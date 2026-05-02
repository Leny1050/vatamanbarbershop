import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { PriceList } from "@/components/price-list"
import { Contacts } from "@/components/contacts"
import { FooterCta } from "@/components/footer-cta"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Gallery />
        <PriceList />
        <Contacts />
        <FooterCta />
      </main>
    </div>
  )
}
