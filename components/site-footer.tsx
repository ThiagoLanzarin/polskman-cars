'use client'

import { Camera, MessageCircle, MapPin, Clock, Sparkles } from 'lucide-react'
import { useQuote } from '@/components/quote-context'

export function SiteFooter() {
  const { buildWhatsappUrl } = useQuote()

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sparkles className="size-5" />
              </span>
              <span className="text-base font-bold tracking-tight">
                APEX<span className="text-primary">.</span> Detailing
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Estética automotiva premium. Proteção, higienização, polimento e
              brilho de alto padrão para o seu veículo.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Camera className="size-4 text-primary" />
                  @apexdetailing
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <MessageCircle className="size-4 text-primary" />
                  (46) 99131-0752
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Localização</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                Av. das Palmeiras, 1200 — Centro
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Horário de atendimento
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  Seg — Sex: 08h às 18h
                  <br />
                  Sábado: 08h às 13h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Apex Detailing. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  )
}
