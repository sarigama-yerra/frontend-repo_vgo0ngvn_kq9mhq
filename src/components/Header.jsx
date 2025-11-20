import { useState } from 'react'
import { Menu, Phone, Car, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <Car className="w-6 h-6 text-blue-400" />
          <span className="font-semibold tracking-tight">Broker Noleggio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a href="#offerte" className="hover:text-white">Offerte</a>
          <a href="#come-funziona" className="hover:text-white">Come funziona</a>
          <a href="#contatti" className="hover:text-white">Contatti</a>
          <a href="#preventivo" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition">
            <Phone className="w-4 h-4" /> Richiedi preventivo
          </a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#offerte" className="block text-slate-200">Offerte</a>
          <a href="#come-funziona" className="block text-slate-200">Come funziona</a>
          <a href="#contatti" className="block text-slate-200">Contatti</a>
          <a href="#preventivo" className="block text-white bg-blue-600 px-4 py-2 rounded-lg">Richiedi preventivo</a>
        </div>
      )}
    </header>
  )
}
