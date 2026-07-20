'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  services,
  packages,
  formatBRL,
  WHATSAPP_NUMBER,
  type Service,
  type Package,
} from '@/lib/quote-data'

export type CustomerInfo = {
  name: string
  model: string
  year: string
  color: string
  notes: string
}

type SelectedLine = {
  id: string
  name: string
  price: number
  quantity: number
  type: 'service' | 'package'
}

type QuoteContextValue = {
  serviceQty: Record<string, number>
  packageQty: Record<string, number>
  customer: CustomerInfo
  setCustomerField: (field: keyof CustomerInfo, value: string) => void
  addService: (id: string) => void
  removeService: (id: string) => void
  addPackage: (id: string) => void
  removePackage: (id: string) => void
  selectedServices: SelectedLine[]
  selectedPackages: SelectedLine[]
  totalItems: number
  total: number
  requiredMissing: string[]
  buildWhatsappUrl: () => string
}

const QuoteContext = createContext<QuoteContextValue | null>(null)

const emptyCustomer: CustomerInfo = {
  name: '',
  model: '',
  year: '',
  color: '',
  notes: '',
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [serviceQty, setServiceQty] = useState<Record<string, number>>({})
  const [packageQty, setPackageQty] = useState<Record<string, number>>({})
  const [customer, setCustomer] = useState<CustomerInfo>(emptyCustomer)

  const setCustomerField = useCallback(
    (field: keyof CustomerInfo, value: string) => {
      setCustomer((prev) => ({ ...prev, [field]: value }))
    },
    [],
  )

  const bump = (
    setter: React.Dispatch<React.SetStateAction<Record<string, number>>>,
    id: string,
    delta: number,
  ) => {
    setter((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta)
      const updated = { ...prev }
      if (next === 0) delete updated[id]
      else updated[id] = next
      return updated
    })
  }

  const addService = useCallback((id: string) => bump(setServiceQty, id, 1), [])
  const removeService = useCallback((id: string) => bump(setServiceQty, id, -1), [])
  const addPackage = useCallback((id: string) => bump(setPackageQty, id, 1), [])
  const removePackage = useCallback((id: string) => bump(setPackageQty, id, -1), [])

  const selectedServices = useMemo<SelectedLine[]>(() => {
    return services
      .filter((s: Service) => serviceQty[s.id] > 0)
      .map((s) => ({
        id: s.id,
        name: s.name,
        price: s.price,
        quantity: serviceQty[s.id],
        type: 'service' as const,
      }))
  }, [serviceQty])

  const selectedPackages = useMemo<SelectedLine[]>(() => {
    return packages
      .filter((p: Package) => packageQty[p.id] > 0)
      .map((p) => ({
        id: p.id,
        name: `Pacote ${p.name}`,
        price: p.price,
        quantity: packageQty[p.id],
        type: 'package' as const,
      }))
  }, [packageQty])

  const total = useMemo(() => {
    const all = [...selectedServices, ...selectedPackages]
    return all.reduce((sum, line) => sum + line.price * line.quantity, 0)
  }, [selectedServices, selectedPackages])

  const totalItems = useMemo(() => {
    const all = [...selectedServices, ...selectedPackages]
    return all.reduce((sum, line) => sum + line.quantity, 0)
  }, [selectedServices, selectedPackages])

  const requiredMissing = useMemo(() => {
    const missing: string[] = []
    if (!customer.name.trim()) missing.push('Nome')
    if (!customer.model.trim()) missing.push('Carro')
    if (!customer.color.trim()) missing.push('Cor')
    return missing
  }, [customer])

  const buildWhatsappUrl = useCallback(() => {
    const lines: string[] = []
    lines.push('Olá!')
    lines.push('')
    lines.push('Gostaria de solicitar um orçamento.')
    lines.push('')
    lines.push('Serviços escolhidos:')

    const allLines = [...selectedPackages, ...selectedServices]
    if (allLines.length === 0) {
      lines.push('• (nenhum serviço selecionado ainda)')
    } else {
      allLines.forEach((line) => {
        const qtyLabel = line.quantity > 1 ? ` (x${line.quantity})` : ''
        lines.push(
          `• ${line.name}${qtyLabel} — ${formatBRL(line.price * line.quantity)}`,
        )
      })
    }

    lines.push('')
    lines.push('Total estimado:')
    lines.push(formatBRL(total))
    lines.push('')
    lines.push(`Meu nome é: ${customer.name || '—'}`)
    lines.push(
      `Meu veículo é: ${[customer.model, customer.year, customer.color]
        .filter(Boolean)
        .join(' • ') || '—'}`,
    )
    if (customer.notes.trim()) {
      lines.push(`Observações: ${customer.notes.trim()}`)
    }
    lines.push('')
    lines.push('Gostaria de agendar um horário.')
    lines.push('')
    lines.push('Obrigado!')

    const message = encodeURIComponent(lines.join('\n'))
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  }, [selectedPackages, selectedServices, total, customer])

  const value: QuoteContextValue = {
    serviceQty,
    packageQty,
    customer,
    setCustomerField,
    addService,
    removeService,
    addPackage,
    removePackage,
    selectedServices,
    selectedPackages,
    totalItems,
    total,
    requiredMissing,
    buildWhatsappUrl,
  }

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) throw new Error('useQuote must be used within QuoteProvider')
  return ctx
}
