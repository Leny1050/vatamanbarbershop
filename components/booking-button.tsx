import { Scissors } from "lucide-react"
import { BUSINESS, TEXTS } from "@/lib/content"
import { cn } from "@/lib/utils"

type Props = {
  label?: string
  className?: string
}

export function BookingButton({ label = TEXTS.bookingButton, className }: Props) {
  return (
    <a
      href={BUSINESS.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative inline-flex w-full items-center justify-center gap-2 overflow-hidden",
        "rounded-full px-8 py-4 font-display text-base font-semibold uppercase tracking-[0.2em]",
        "bg-foreground text-background transition-all duration-300",
        "hover:bg-primary hover:text-primary-foreground",
        "sm:text-lg",
        className,
      )}
      style={{
        boxShadow: "inset 0 1px 0 oklch(0.90 0 0 / 0.3), inset 0 -1px 0 oklch(0.30 0 0 / 0.5)"
      }}
    >
      <Scissors className="h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  )
}