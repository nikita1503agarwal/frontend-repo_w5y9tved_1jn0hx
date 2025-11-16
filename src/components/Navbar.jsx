import { useState } from 'react'
import { Menu, X, Rocket, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 text-white">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 to-amber-300 text-black">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">AeroMark</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#solutions" className="hover:text-white transition">Solutions</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-medium shadow-sm hover:shadow transition">
              <Sparkles className="h-4 w-4" /> Get a Demo
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="mt-2 grid gap-2 text-white/90">
              <a href="#features" className="rounded-lg px-3 py-2 hover:bg-white/10 transition">Features</a>
              <a href="#solutions" className="rounded-lg px-3 py-2 hover:bg-white/10 transition">Solutions</a>
              <a href="#pricing" className="rounded-lg px-3 py-2 hover:bg-white/10 transition">Pricing</a>
              <a href="#contact" className="rounded-lg px-3 py-2 hover:bg-white/10 transition">Contact</a>
              <a href="#cta" className="rounded-lg px-3 py-2 bg-white text-black font-medium text-center">Get a Demo</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
