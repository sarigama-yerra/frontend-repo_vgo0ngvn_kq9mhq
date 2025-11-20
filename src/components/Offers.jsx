import { useEffect, useState } from 'react'
import OfferCard from './OfferCard'

export default function Offers({ onQuote }) {
  const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ brand: '', budget: '', fuel: '' })

  useEffect(() => {
    fetchOffers()
  }, [])

  const fetchOffers = async () => {
    setLoading(true)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const params = new URLSearchParams()
      if (filters.brand) params.append('brand', filters.brand)
      if (filters.budget) params.append('budget_max', filters.budget)
      if (filters.fuel) params.append('fuel', filters.fuel)

      const res = await fetch(`${baseUrl}/api/offers?${params.toString()}`)
      const data = await res.json()
      setOffers(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const applyFilters = () => fetchOffers()

  return (
    <section id="offerte" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Le nostre offerte</h2>
          <p className="text-slate-300">Scegli tra le migliori proposte del momento</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full md:w-auto">
          <input name="brand" value={filters.brand} onChange={handleChange} placeholder="Marca" className="bg-white/10 text-white placeholder:text-slate-400 px-3 py-2 rounded-lg" />
          <select name="fuel" value={filters.fuel} onChange={handleChange} className="bg-white/10 text-white px-3 py-2 rounded-lg">
            <option value="">Carburante</option>
            <option value="benzina">Benzina</option>
            <option value="diesel">Diesel</option>
            <option value="ibrida">Ibrida</option>
            <option value="elettrica">Elettrica</option>
          </select>
          <input name="budget" value={filters.budget} onChange={handleChange} placeholder="Budget max" className="bg-white/10 text-white placeholder:text-slate-400 px-3 py-2 rounded-lg" />
          <button onClick={applyFilters} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">Filtra</button>
        </div>
      </div>

      {loading ? (
        <div className="text-slate-300">Caricamento offerte...</div>
      ) : offers.length === 0 ? (
        <div className="text-slate-300">Nessuna offerta trovata.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o) => (
            <OfferCard key={o.id} offer={o} onQuote={onQuote} />
          ))}
        </div>
      )}
    </section>
  )
}
