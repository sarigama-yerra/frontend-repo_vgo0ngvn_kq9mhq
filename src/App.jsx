import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Offers from './components/Offers'
import HowItWorks from './components/HowItWorks'
import LeadForm from './components/LeadForm'

function App() {
  const [selectedOffer, setSelectedOffer] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Header />
      <Hero />
      <Offers onQuote={(o) => setSelectedOffer(o)} />
      <HowItWorks />
      <LeadForm defaultValues={selectedOffer || {}} onSubmitted={() => setSelectedOffer(null)} />
      <footer id="contatti" className="border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-10 text-slate-300 grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-white font-semibold">Broker Noleggio</h3>
            <p className="text-sm mt-2">La tua auto nuova con canone fisso mensile. Consulenza dedicata per privati e aziende.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contatti</h4>
            <p className="text-sm mt-2">Tel. 02 123 456 • info@brokernoleggio.it</p>
            <p className="text-sm">Sede: Milano</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Orari</h4>
            <p className="text-sm mt-2">Lun-Ven 9:00 - 18:00</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
