import { motion } from 'framer-motion'
import { BarChart3, Megaphone, Target, Zap } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'Track conversions, attribution, and ROI with precision dashboards.'
  },
  {
    icon: Megaphone,
    title: 'Omni-channel Campaigns',
    desc: 'Launch coordinated ads across search, social, and email in a click.'
  },
  {
    icon: Target,
    title: 'AI Audience Targeting',
    desc: 'Segment by behavior and intent to reach the right customers.'
  },
  {
    icon: Zap,
    title: 'Lightning-fast Pages',
    desc: 'Optimized performance with CDN, edge rendering, and A/B testing.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to convert</h2>
          <p className="mt-3 text-white/70">Built for marketers who care about speed, flexibility, and outcomes.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
                {f.icon && <f.icon className="h-5 w-5" />}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
