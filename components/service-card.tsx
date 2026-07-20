'use client'

import { motion } from 'motion/react'
import { Plus, Minus, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useQuote } from '@/components/quote-context'
import { formatBRL, type Service } from '@/lib/quote-data'
import { cn } from '@/lib/utils'

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { serviceQty, addService, removeService } = useQuote()
  const qty = serviceQty[service.id] ?? 0
  const selected = qty > 0
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className={cn(
        'group relative flex flex-col rounded-2xl border bg-card p-5 card-shadow transition-all duration-300',
        selected
          ? 'border-primary glow-border'
          : 'border-border hover:border-border/60 hover:-translate-y-1',
      )}
    >
      {selected && (
        <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-3.5" strokeWidth={3} />
        </span>
      )}

      <div className="flex items-start justify-between">
        <span
          className={cn(
            'flex size-12 items-center justify-center rounded-xl transition-colors',
            selected
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-primary',
          )}
        >
          <Icon className="size-6" />
        </span>
        <span className="text-right">
          <span className="block text-lg font-bold text-foreground">
            {formatBRL(service.price)}
          </span>
        </span>
      </div>

      <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
        {service.name}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <div className="mt-5">
        {selected ? (
          <div className="flex items-center justify-between rounded-full border border-primary/40 bg-primary/10 p-1">
            <Button
              size="icon"
              variant="ghost"
              className="size-9 rounded-full text-primary hover:bg-primary/20 hover:text-primary"
              onClick={() => removeService(service.id)}
              aria-label={`Remover ${service.name}`}
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
              onClick={() => addService(service.id)}
              aria-label={`Adicionar ${service.name}`}
            >
              <Plus className="size-4" />
            </Button>
          </div>
        ) : (
          <Button
            className="h-10 w-full gap-2 rounded-full font-semibold hover:bg-primary/85"
            onClick={() => addService(service.id)}
          >
            <Plus className="size-4" />
            Adicionar
          </Button>
        )}
      </div>
    </motion.div>
  )
}
