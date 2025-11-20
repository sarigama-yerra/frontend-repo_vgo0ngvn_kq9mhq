import { CheckCircle, FileText, SteeringWheel, Handshake, Calendar, CreditCard } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: FileText, title: 'Analisi esigenze', text: 'Ti ascoltiamo per capire budget, percorrenza e preferenze.' },
    { icon: SteeringWheel, title: 'Selezione veicolo', text: 'Ti proponiamo i modelli migliori in base al tuo profilo.' },
    { icon: Calendar, title: 'Durata e km', text: 'Definiamo insieme durata del contratto e chilometraggio annuo.' },
    { icon: CreditCard, title: 'Canone fisso', text: 'Tutto incluso: bollo, assicurazione, manutenzione ordinaria e straordinaria.' },
    { icon: Handshake, title: 'Consegna', text: 'Pensiamo a tutto noi fino alla consegna dell’auto.' },
  ]

  return (
    <section id="come-funziona" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Come funziona</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-slate-200">
            <Icon className="w-6 h-6 text-blue-400" />
            <h3 className="text-white font-semibold mt-3">{title}</h3>
            <p className="text-sm text-slate-300 mt-1">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-slate-300 text-sm inline-flex items-center gap-2"><CheckCircle className="text-green-400"/> Nessun imprevisto: canone chiaro e trasparente</div>
    </section>
  )
}
