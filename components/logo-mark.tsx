import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  size?: number
  priority?: boolean
}

export function LogoMark({ className, size = 44, priority }: Props) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center rounded-full",
        "border border-border/70 bg-background/40 backdrop-blur",
        "shadow-[0_18px_55px_rgba(0,0,0,0.55)]",
        className,
      )}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(120px 120px at 30% 20%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%), color-mix(in oklab, black 35%, transparent)",
      }}
    >
      <span
        className="absolute inset-0 rounded-full opacity-70"
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.55)",
        }}
        aria-hidden="true"
      />
      <Image
        src="/vatamanlogo.jpg"
        alt="Vataman Barbershop"
        width={size * 2}
        height={size * 2}
        className="h-[72%] w-[72%] rounded-full object-cover"
        priority={priority}
      />
    </span>
  )
}

