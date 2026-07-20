'use client'

import { motion } from 'motion/react'
import { services } from '@/lib/quote-data'
import { ServiceCard } from '@/components/service-card'

export function ServicesSection() {
  return (
    <section id="servicos" className="scroll-mt-20 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Serviços
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Escolha os serviços do seu orçamento
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Toque em adicionar para montar seu pacote personalizado. O resumo
          atualiza em tempo real.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}
