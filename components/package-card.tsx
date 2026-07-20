'use client'

import { motion } from 'motion/react'
import { Plus, Minus, Check, Crown, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useQuote } from '@/components/quote-context'
import { formatBRL, type Package } from '@/lib/quote-data'
import { cn } from '@/lib/utils'

export function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  const { packageQty, addPackage, removePackage } = useQuote()
  const qty = packageQty[pkg.id] ?? 0
  const selected = qty > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        'relative flex flex-col rounded-2xl border bg-card p-6 card-shadow transition-all duration-300',
        selected
          ? 'border-primary glow-border'
          : pkg.highlighted
            ? 'border-primary/40'
            : 'border-border hover:-translate-y-1',
      )}
    >
      {pkg.highlighted && !selected && (
        <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
          <Crown className="size-3.5" />
          Mais Popular
        </span>
      )}
      {selected && (
        <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-3.5" strokeWidth={3} />
        </span>
      )}

      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{pkg.tagline}</p>

      <div className="mt-4 flex items-end gap-1">
        <span className="text-3xl font-bold text-primary">
          {formatBRL(pkg.price)}
        </span>
      </div>

      <ul className="mt-5 flex-1 space-y-2.5">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>

      {selected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 overflow-hidden rounded-xl border border-primary/40 bg-primary/10 p-3"
        >
          <p className="flex items-center gap-1.5 text-xs font-semibold text-primary">
            <Info className="size-3.5" />
            Pacote adicionado
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Este pacote já inclui: {pkg.includes.join(', ')}. Você não precisa
            adicionar esses serviços separadamente.
          </p>
        </motion.div>
      )}

      <div className="mt-5">
        {selected ? (
          <div className="flex items-center justify-between rounded-full border border-primary/40 bg-primary/10 p-1">
            <Button
              size="icon"
              variant="ghost"
              className="size-9 rounded-full text-primary hover:bg-primary/20 hover:text-primary"
              onClick={() => removePackage(pkg.id)}
              aria-label={`Remover pacote ${pkg.name}`}
            >
              <Minus className="size-4" />
            </Button>
            <span className="min-w-8 text-center text-sm font-bold text-foreground">
              {qty}
            </span>
            <Button
              size="icon"
              variant="ghost"
              className="size-9 rounded-full text-primary hover:bg-primary/20 hover:text-primary"
              onClick={() => addPackage(pkg.id)}
              aria-label={`Adicionar pacote ${pkg.name}`}
            >
              <Plus className="size-4" />
            </Button>
          </div>
        ) : (
          <Button
            className="h-11 w-full gap-2 rounded-full font-semibold hover:bg-primary/85"
            onClick={() => addPackage(pkg.id)}
          >
            <Plus className="size-4" />
            Adicionar pacote
          </Button>
        )}
      </div>
    </motion.div>
  )
}
