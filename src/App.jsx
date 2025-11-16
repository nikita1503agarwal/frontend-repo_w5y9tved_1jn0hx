import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <footer id="contact" className="border-t border-white/10 bg-black py-10 text-center text-white/60">
          <p>© {new Date().getFullYear()} AeroMark. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
