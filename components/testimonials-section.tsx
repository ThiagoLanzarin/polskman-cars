'use client'

import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rafael Almeida',
    car: 'BMW 320i',
    text: 'Serviço impecável! Meu carro voltou parecendo zero km. O polimento técnico ficou perfeito, sem nenhum risco.',
  },
  {
    name: 'Juliana Costa',
    car: 'Jeep Compass',
    text: 'Atendimento premium do início ao fim. A higienização interna removeu manchas que eu achava impossível. Recomendo demais!',
  },
  {
    name: 'Marcos Ferreira',
    car: 'Toyota Corolla',
    text: 'Profissionais extremamente detalhistas. O brilho da pintura e o Glaco nos vidros fizeram toda a diferença na chuva.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Depoimentos
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Quem confia, recomenda
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative flex flex-col rounded-2xl border border-border bg-card p-6 card-shadow"
          >
            <Quote className="size-8 text-primary/30" />
            <div className="mt-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className="size-4 fill-primary text-primary"
                />
              ))}
            </div>
            <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
              {t.text}
            </p>
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.car}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
