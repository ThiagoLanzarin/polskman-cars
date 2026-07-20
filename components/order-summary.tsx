'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ShoppingCart, MessageCircle, X, ChevronUp, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useQuote } from '@/components/quote-context'
import { formatBRL } from '@/lib/quote-data'
import { cn } from '@/lib/utils'

function SummaryLines() {
  const {
    selectedServices,
    selectedPackages,
    removeService,
    removePackage,
  } = useQuote()
  const lines = [...selectedPackages, ...selectedServices]

  if (lines.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border py-10 text-center">
        <ShoppingCart className="size-8 text-muted-foreground/50" />
        <p className="text-sm text-muted-foreground">
          Nenhum serviço selecionado ainda.
        </p>
        <p className="text-xs text-muted-foreground/60">
          Adicione serviços ou um pacote para começar.
        </p>
      </div>
    )
  }

  return (
    <ul className="space-y-2">
      {lines.map((line) => (
        <li
          key={`${line.type}-${line.id}`}
          className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3"
        >
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">
              {line.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {line.quantity} × {formatBRL(line.price)}
            </p>
          </div>
          <span className="text-sm font-semibold text-foreground">
            {formatBRL(line.price * line.quantity)}
          </span>
          <button
            type="button"
            onClick={() =>
              line.type === 'service'
                ? removeService(line.id)
                : removePackage(line.id)
            }
            className="text-muted-foreground/60 transition-colors hover:text-destructive"
            aria-label={`Remover ${line.name}`}
          >
            <Trash2 className="size-4" />
          </button>
        </li>
      ))}
    </ul>
  )
}

function FinalizeButton({ onClick }: { onClick?: () => void }) {
  const { buildWhatsappUrl, totalItems, requiredMissing } = useQuote()
  const [error, setError] = useState<string | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (totalItems === 0) {
      e.preventDefault()
      setError('Selecione ao menos um serviço ou pacote.')
      return
    }
    if (requiredMissing.length > 0) {
      e.preventDefault()
      setError(`Preencha os campos obrigatórios: ${requiredMissing.join(', ')}.`)
      document
        .getElementById('contato')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setError(null)
    onClick?.()
  }

  return (
    <div>
      <a
        href={buildWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-disabled={totalItems === 0}
        className={cn(totalItems === 0 && 'pointer-events-none opacity-50')}
      >
        <Button className="h-14 w-full gap-2 rounded-full text-base font-bold hover:bg-primary/85">
          <MessageCircle className="size-5" />
          Enviar orçamento pelo WhatsApp
        </Button>
      </a>
      {error && (
        <p className="mt-2 text-center text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

function SummaryBody({ onFinalize }: { onFinalize?: () => void }) {
  const { total, totalItems } = useQuote()
  return (
    <>
      <div className="max-h-[38vh] overflow-y-auto pr-1 lg:max-h-[42vh]">
        <SummaryLines />
      </div>

      <div className="mt-4 space-y-2 border-t border-border pt-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Subtotal ({totalItems} itens)</span>
          <span>{formatBRL(total)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold">Total</span>
          <span className="text-2xl font-bold text-primary">
            {formatBRL(total)}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <FinalizeButton onClick={onFinalize} />
      </div>
    </>
  )
}

/* ---------- Desktop sticky sidebar ---------- */
export function OrderSummary() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 rounded-2xl border border-border bg-card p-5 card-shadow">
        <div className="mb-4 flex items-center gap-2">
          <ShoppingCart className="size-5 text-primary" />
          <h2 className="text-lg font-bold tracking-tight">Resumo do Pedido</h2>
        </div>
        <SummaryBody />
      </div>
    </aside>
  )
}

/* ---------- Mobile fixed bottom bar + drawer ---------- */
export function MobileSummaryBar() {
  const { total, totalItems } = useQuote()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur-xl lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex w-full items-center justify-between gap-3 px-4 py-3"
        >
          <span className="flex items-center gap-2">
            <span className="relative flex size-10 items-center justify-center rounded-xl bg-muted text-primary">
              <ShoppingCart className="size-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </span>
            <span className="flex flex-col text-left">
              <span className="text-xs text-muted-foreground">Total</span>
              <span className="text-lg font-bold text-primary">
                {formatBRL(total)}
              </span>
            </span>
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground">
            Ver resumo
            <ChevronUp className="size-4" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] rounded-t-3xl border-t border-border bg-card p-5 lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="size-5 text-primary" />
                  <h2 className="text-lg font-bold tracking-tight">
                    Resumo do Pedido
                  </h2>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="size-9 rounded-full"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar resumo"
                >
                  <X className="size-5" />
                </Button>
              </div>
              <SummaryBody onFinalize={() => setOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
