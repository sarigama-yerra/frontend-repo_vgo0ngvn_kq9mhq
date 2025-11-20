import { Fuel, Gauge, Calendar, Euro } from 'lucide-react'

export default function OfferCard({ offer, onQuote }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-blue-500/40 transition overflow-hidden">
      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
        <img src={offer.image_url || `https://source.unsplash.com/800x600/?${offer.brand}%20${offer.model}%20car`} alt={`${offer.brand} ${offer.model}`} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="mt-4">
        <h3 className="text-white text-lg font-semibold">{offer.brand} {offer.model}</h3>
        <div className="flex items-center gap-3 text-slate-300 text-sm mt-2">
          <div className="inline-flex items-center gap-1"><Fuel className="w-4 h-4"/> {offer.fuel_type}</div>
          <div className="inline-flex items-center gap-1"><Gauge className="w-4 h-4"/> {offer.annual_km.toLocaleString()} km/anno</div>
          <div className="inline-flex items-center gap-1"><Calendar className="w-4 h-4"/> {offer.term_months} mesi</div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="text-slate-200">Anticipo: <span className="font-medium">{offer.upfront?.toLocaleString()} €</span></div>
          <div className="text-right">
            <div className="text-slate-300 text-xs">a partire da</div>
            <div className="text-2xl font-bold text-white inline-flex items-center gap-1"><Euro className="w-5 h-5"/>{offer.monthly_price.toLocaleString()}<span className="text-sm font-normal">/mese</span></div>
          </div>
        </div>
        <button onClick={() => onQuote(offer)} className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-xl transition">Richiedi preventivo</button>
      </div>
    </div>
  )
}
