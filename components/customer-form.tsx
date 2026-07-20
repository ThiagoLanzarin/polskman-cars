'use client'

import { motion } from 'motion/react'
import { User } from 'lucide-react'
import { useQuote, type CustomerInfo } from '@/components/quote-context'

const fields: {
  key: keyof CustomerInfo
  label: string
  placeholder: string
  full?: boolean
  textarea?: boolean
  required?: boolean
}[] = [
  {
    key: 'name',
    label: 'Nome',
    placeholder: 'Seu nome completo',
    full: true,
    required: true,
  },
  {
    key: 'model',
    label: 'Carro',
    placeholder: 'Ex: Honda Civic',
    required: true,
  },
  { key: 'year', label: 'Ano', placeholder: 'Ex: 2022' },
  { key: 'color', label: 'Cor', placeholder: 'Ex: Preto', required: true },
  {
    key: 'notes',
    label: 'Observações',
    placeholder: 'Alguma informação adicional?',
    full: true,
    textarea: true,
  },
]

const inputClass =
  'w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'

export function CustomerForm() {
  const { customer, setCustomerField } = useQuote()

  return (
    <section id="contato" className="scroll-mt-20 pb-4 pt-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border bg-card p-6 card-shadow md:p-8"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-muted text-primary">
            <User className="size-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold tracking-tight">Seus dados</h2>
            <p className="text-sm text-muted-foreground">
              Campos com <span className="text-primary">*</span> são
              obrigatórios para enviar o orçamento.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {fields.map((field) => (
            <div
              key={field.key}
              className={field.full ? 'sm:col-span-2' : undefined}
            >
              <label
                htmlFor={field.key}
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                {field.label}
                {field.required && <span className="ml-0.5 text-primary">*</span>}
              </label>
              {field.textarea ? (
                <textarea
                  id={field.key}
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder={field.placeholder}
                  value={customer[field.key]}
                  onChange={(e) => setCustomerField(field.key, e.target.value)}
                />
              ) : (
                <input
                  id={field.key}
                  type="text"
                  className={inputClass}
                  placeholder={field.placeholder}
                  value={customer[field.key]}
                  onChange={(e) => setCustomerField(field.key, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
