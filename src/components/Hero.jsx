import { ArrowRight, ShieldCheck, Gauge, Handshake } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_400px_at_20%_0%,rgba(16,185,129,0.2),transparent)]" />
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Noleggio Lungo Termine auto per privati e aziende
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mt-6">
            Zero anticipo, manutenzione inclusa e un consulente dedicato che ti guida nella scelta dell'auto ideale per le tue esigenze.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#preventivo" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition">
              Richiedi un preventivo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#offerte" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl">
              Vedi le offerte
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-slate-200"><ShieldCheck className="text-green-400"/> Assicurazione</div>
            <div className="flex items-center gap-3 text-slate-200"><Gauge className="text-yellow-300"/> Km inclusi</div>
            <div className="flex items-center gap-3 text-slate-200"><Handshake className="text-blue-300"/> Consulenza</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop" alt="Auto in noleggio" className="w-full h-full object-cover opacity-80" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/10 text-white p-4 rounded-xl backdrop-blur border border-white/10">
            Canone fisso mensile, tutto incluso
          </div>
        </div>
      </div>
    </section>
  )
}
