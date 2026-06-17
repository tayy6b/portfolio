import { MascotBunny } from "@/components/mascot"

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <MascotBunny size={26} />
          <span className="font-heading text-sm font-bold text-foreground">
            tayyab<span className="text-primary">.</span>
          </span>
        </div>
        <p className="font-heading text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} Tayyab Hassan · Built with logic & care.`}
        </p>
      </div>
    </footer>
  )
}
