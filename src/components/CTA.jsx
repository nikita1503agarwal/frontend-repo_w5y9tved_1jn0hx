import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative bg-black py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-orange-500/20 via-amber-300/10 to-white/10 p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,165,0,0.15),transparent_40%)]" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to launch high-converting campaigns?</h3>
            <p className="mt-3 text-white/80 max-w-2xl">Book a 20-minute walkthrough and get a custom audit of your funnel with actionable recommendations.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex justify-center rounded-full bg-white px-6 py-3 font-semibold text-black hover:shadow-lg transition">Book a demo</a>
              <a href="#" className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">View pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
