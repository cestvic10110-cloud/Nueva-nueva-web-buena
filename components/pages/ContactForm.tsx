'use client'

import { useState, type FormEvent } from 'react'
import { CATEGORIES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const WHATSAPP_NUMBER = '34679286178'

interface Fields {
  empresa:  string
  email:    string
  telefono: string
  producto: string
  cantidad: string
  mensaje:  string
}

const EMPTY: Fields = { empresa: '', email: '', telefono: '', producto: '', cantidad: '', mensaje: '' }

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [sent,    setSent]    = useState(false)
  const [sending, setSending] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      if (!res.ok) throw new Error('Error al enviar el mensaje')
      
      setSent(true)
    } catch (err) {
      setError('Hubo un problema al enviar su solicitud. Por favor, inténtelo de nuevo o contacte por WhatsApp.')
      console.error(err)
    } finally {
      setSending(false)
    }
  }

  const inputBase = `
    w-full bg-bark border border-border-dark hover:border-border-dark/70 focus:border-gold/50
    rounded-lg px-4 py-3 font-body text-sm text-cream/85 placeholder:text-cream/28
    outline-none transition-colors duration-200 focus:ring-1 focus:ring-gold/20
  `

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-6 py-8">
        <div className="h-px bg-gold/40 w-12" />
        <h3
          className="font-display italic-serif text-cream leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
        >
          Mensaje enviado.<br />Gracias por contactar.
        </h3>
        <p className="font-body text-cream/62 leading-relaxed" style={{ maxWidth: '28rem' }}>
          Hemos recibido su solicitud correctamente. Un agente de nuestro equipo revisará 
          la información y le contactará en menos de 24 horas laborables.
        </p>
        <button
          onClick={() => { setSent(false); setFields(EMPTY) }}
          className="font-sans text-[0.65rem] text-cream/45 hover:text-cream/75 transition-colors
                     tracking-[0.15em] uppercase underline underline-offset-4"
        >
          Enviar otra consulta
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Empresa */}
      <div>
        <label htmlFor="empresa" className="block font-sans text-[0.6rem] text-cream/55 tracking-[0.15em] uppercase mb-2">
          Empresa / Nombre *
        </label>
        <input
          id="empresa"
          type="text"
          required
          placeholder="Nombre de su empresa"
          value={fields.empresa}
          onChange={set('empresa')}
          className={cn(inputBase)}
        />
      </div>

      {/* Email + Teléfono */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block font-sans text-[0.6rem] text-cream/55 tracking-[0.15em] uppercase mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="empresa@ejemplo.com"
            value={fields.email}
            onChange={set('email')}
            className={cn(inputBase)}
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block font-sans text-[0.6rem] text-cream/55 tracking-[0.15em] uppercase mb-2">
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            placeholder="+34 600 000 000"
            value={fields.telefono}
            onChange={set('telefono')}
            className={cn(inputBase)}
          />
        </div>
      </div>

      {/* Producto + Cantidad */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="producto" className="block font-sans text-[0.6rem] text-cream/55 tracking-[0.15em] uppercase mb-2">
            Tipo de producto
          </label>
          <select
            id="producto"
            value={fields.producto}
            onChange={set('producto')}
            className={cn(inputBase, 'cursor-pointer appearance-none')}
          >
            <option value="">Seleccionar categoría…</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.slug} value={cat.labelPlural}>
                {cat.labelPlural}
              </option>
            ))}
            <option value="Varios / Sin definir">Varios / Sin definir</option>
          </select>
        </div>
        <div>
          <label htmlFor="cantidad" className="block font-sans text-[0.6rem] text-cream/55 tracking-[0.15em] uppercase mb-2">
            Cantidad aproximada
          </label>
          <input
            id="cantidad"
            type="text"
            placeholder="Ej: 500 unidades"
            value={fields.cantidad}
            onChange={set('cantidad')}
            className={cn(inputBase)}
          />
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className="block font-sans text-[0.6rem] text-cream/55 tracking-[0.15em] uppercase mb-2">
          Detalles adicionales
        </label>
        <textarea
          id="mensaje"
          rows={4}
          placeholder="Medidas específicas, fecha de entrega, personalización…"
          value={fields.mensaje}
          onChange={set('mensaje')}
          className={cn(inputBase, 'resize-none leading-relaxed')}
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={!fields.empresa || !fields.email || sending}
          className="w-full sm:w-auto font-sans text-[0.7rem] font-medium text-ink
                     bg-gold hover:bg-gold-light disabled:opacity-40 disabled:cursor-not-allowed
                     transition-colors duration-300 px-8 py-3.5 squircle-sm
                     tracking-[0.1em] uppercase min-w-[180px]"
        >
          {sending ? 'Enviando…' : 'Enviar mensaje →'}
        </button>
        
        {error && (
          <p className="font-body text-[0.75rem] text-red-400 mt-3">
            {error}
          </p>
        )}

        {!error && (
          <p className="font-body text-[0.62rem] text-cream/38 mt-3 leading-relaxed">
            Su mensaje se enviará directamente a nuestro equipo comercial. Respondemos en menos de 24 h.
          </p>
        )}
      </div>

    </form>
  )
}
