'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, ShieldCheck, Sparkles, Droplets, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = [
  { icon: ShieldCheck, label: 'Proteção' },
  { icon: Droplets, label: 'Higienização' },
  { icon: Sparkles, label: 'Polimento' },
  { icon: Star, label: 'Brilho' },
]

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.png"
          alt="Carro preto de luxo com pintura brilhante espelhada"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pb-24 pt-28 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            <Sparkles className="size-3.5" />
            Estética Automotiva de Alto Padrão
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Estética Automotiva{' '}
            <span className="text-primary text-glow">Premium</span>
          </h1>

          <p className="mt-5 text-pretty text-lg font-medium text-muted-foreground sm:text-xl">
            Proteção • Higienização • Polimento • Brilho
          </p>

          <p className="mt-3 max-w-xl text-pretty text-base text-muted-foreground/80">
            Cuidado técnico e acabamento impecável para o seu veículo. Monte seu
            orçamento em segundos e receba tudo pronto no WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#servicos">
              <Button
                size="lg"
                className="h-12 gap-2 rounded-full px-7 text-base font-semibold hover:bg-primary/85"
              >
                Solicitar orçamento
                <ArrowRight className="size-4" />
              </Button>
            </a>
            <a href="#pacotes">
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-border/80 px-7 text-base font-semibold"
              >
                Ver pacotes
              </Button>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <item.icon className="size-4 text-primary" />
                {item.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
