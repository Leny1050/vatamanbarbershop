import type { Metadata } from "next"
import { Oswald, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { META } from "@/lib/content"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${oswald.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <div className="page-sheen" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
