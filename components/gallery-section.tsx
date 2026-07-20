'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const items = [
  { src: '/images/gallery-1.png', label: 'Espelhamento de pintura' },
  { src: '/images/gallery-2.png', label: 'Polimento técnico' },
  { src: '/images/gallery-3.png', label: 'Higienização interna' },
  { src: '/images/gallery-4.png', label: 'Restauração de faróis' },
]

export function GallerySection() {
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
          Antes e Depois
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Resultados que falam por si
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Um pouco do nosso trabalho em detalhes que transformam qualquer veículo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border card-shadow"
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-foreground">
              {item.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
