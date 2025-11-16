import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Scale your growth with interactive, conversion-first landing pages
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
          >
            AeroMark blends fintech-grade analytics with modern travel aesthetics. Engage visitors with a 3D boarding-pass hero and drive measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-semibold shadow hover:shadow-lg transition">
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/10 transition">
              See Features
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
    </section>
  )
}
