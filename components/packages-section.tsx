'use client'

import { motion } from 'motion/react'
import { packages } from '@/lib/quote-data'
import { PackageCard } from '@/components/package-card'

export function PackagesSection() {
  return (
    <section id="pacotes" className="scroll-mt-20 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Pacotes
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Combos completos com o melhor custo-benefício
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Economize escolhendo um pacote pronto. Ao adicionar, mostramos tudo o
          que já está incluso.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg, index) => (
          <PackageCard key={pkg.id} pkg={pkg} index={index} />
        ))}
      </div>
    </section>
  )
}
