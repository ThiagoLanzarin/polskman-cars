'use client'

import { MessageCircle, Sparkles } from 'lucide-react'
import { useQuote } from '@/components/quote-context'
import { Button } from '@/components/ui/button'

export function SiteFooter() {
  const { buildWhatsappUrl } = useQuote()

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="size-5" />
            </span>
            <span className="text-base font-bold tracking-tight">
              POLSKMAN<span className="text-primary">.</span> Cars
            </span>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Estética automotiva premium. Proteção, higienização, polimento e
            brilho de alto padrão para o seu veículo.
          </p>

          <a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="h-12 gap-2 rounded-full px-7 font-semibold hover:bg-primary/85"
            >
              <MessageCircle className="size-5" />
              WhatsApp (46) 99131-0752
            </Button>
          </a>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Polskman Cars. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  )
}
