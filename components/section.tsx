import { cn } from "@/lib/utils"

type Props = {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className }: Props) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {(eyebrow || title || description) && (
          <div className="mb-10 sm:mb-12">
            {eyebrow && (
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="h-px w-8"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.55 0 0), oklch(0.95 0 0))",
                  }}
                />
                <span
                  className="font-display text-xs uppercase tracking-[0.4em]"
                  style={{ color: "color-mix(in oklab, var(--primary) 78%, white)" }}
                >
                  {eyebrow}
                </span>
              </div>
            )}
            {title && (
              <h2 className="brand-text font-display text-5xl font-bold uppercase tracking-wide sm:text-6xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

