import { useState } from 'react'

export default function LeadForm({ defaultValues = {}, onSubmitted }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', type: 'privato', brand: defaultValues.brand || '', model: defaultValues.model || '', offer_id: defaultValues.id || '', preferred_term: '', preferred_km: '', budget: '', message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Invio in corso...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          preferred_term: form.preferred_term ? Number(form.preferred_term) : undefined,
          preferred_km: form.preferred_km ? Number(form.preferred_km) : undefined,
          budget: form.budget ? Number(form.budget) : undefined
        })
      })
      if (!res.ok) throw new Error('Errore invio')
      const data = await res.json()
      setStatus('✅ Richiesta inviata! Ti contatteremo al più presto.')
      setForm({ name: '', email: '', phone: '', type: 'privato', brand: '', model: '', offer_id: '', preferred_term: '', preferred_km: '', budget: '', message: '' })
      onSubmitted && onSubmitted(data)
    } catch (e) {
      setStatus('❌ Errore durante l\'invio, riprova più tardi.')
    }
  }

  return (
    <section id="preventivo" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Richiedi un preventivo</h2>
      <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nome e cognome" className="bg-white/10 px-3 py-2 rounded" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="bg-white/10 px-3 py-2 rounded" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefono" className="bg-white/10 px-3 py-2 rounded" required />
        <select name="type" value={form.type} onChange={handleChange} className="bg-white/10 px-3 py-2 rounded">
          <option value="privato">Privato</option>
          <option value="azienda">Azienda</option>
        </select>
        <input name="brand" value={form.brand} onChange={handleChange} placeholder="Marca desiderata" className="bg-white/10 px-3 py-2 rounded" />
        <input name="model" value={form.model} onChange={handleChange} placeholder="Modello desiderato" className="bg-white/10 px-3 py-2 rounded" />
        <input name="preferred_term" value={form.preferred_term} onChange={handleChange} placeholder="Durata (mesi)" className="bg-white/10 px-3 py-2 rounded" />
        <input name="preferred_km" value={form.preferred_km} onChange={handleChange} placeholder="Km/anno" className="bg-white/10 px-3 py-2 rounded" />
        <input name="budget" value={form.budget} onChange={handleChange} placeholder="Budget mensile" className="bg-white/10 px-3 py-2 rounded" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Note" className="bg-white/10 px-3 py-2 rounded md:col-span-2" rows="4" />
        <button className="md:col-span-2 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg">Invia richiesta</button>
        {status && <div className="md:col-span-2 text-slate-200">{status}</div>}
      </form>
    </section>
  )
}
