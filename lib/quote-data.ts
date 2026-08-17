import {
  Droplets,
  Sparkles,
  Car,
  Shield,
  ShieldCheck,
  Eye,
  Umbrella,
  Eraser,
  Disc3,
  Gem,
  Lightbulb,
  Cog,
  Armchair,
  Wind,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  id: string
  name: string
  description: string
  price: number
  icon: LucideIcon
}

export type Package = {
  id: string
  name: string
  price: number
  tagline: string
  includes: string[]
  highlighted?: boolean
}

export const services: Service[] = [
  {
    id: 'lavagem-externa',
    name: 'Lavagem Externa',
    description: 'Lavagem detalhada da parte externa.',
    price: 60,
    icon: Droplets,
  },
  {
    id: 'lavagem-externa-cera',
    name: 'Lavagem Externa +  Aplicação de Cera.',
    description: 'Lavagem externa com aplicação de cera para brilho e proteção.',
    price: 80,
    icon: Sparkles,
  },
  {
    id: 'lavagem-completa',
    name: 'Lavagem Completa',
    description: 'Higienização completa interna e externa do veículo com aplicação de cera.',
    price: 120,
    icon: Car,
  },
  {
    id: 'protecao-plasticos-internos',
    name: 'Proteção dos Plásticos Internos',
    description: 'Revitalização e proteção dos plásticos do interior.',
    price: 40,
    icon: Shield,
  },
  {
    id: 'protecao-plasticos-externos',
    name: 'Proteção dos Plásticos Externos',
    description: 'Revitalização e proteção dos plásticos do exterior.',
    price: 40,
    icon: ShieldCheck,
  },
  {
    id: 'descontaminacao-vidros',
    name: 'Descontaminação dos Vidros',
    description: 'Remoção de impurezas e manchas dos vidros.',
    price: 60,
    icon: Eye,
  },
  {
    id: 'cristalizacao-vidros',
    name: 'Cristalização dos Vidros',
    description: 'Repelencia e proteção dos vidros.',
    price: 60,
    icon: Sparkles,
  },
  {
    id: 'descontaminacao-glaco',
    name: 'Descontaminação + Cristalização de Vidros',
    description: 'Descontaminação com aplicação de cristalização de vidros.',
    price: 110,
    icon: Umbrella,
  },
  {
    id: 'remocao-riscos-leves',
    name: 'Remoção de Riscos Leves',
    description: 'Remoção de riscos locais superficiais da pintura.',
    price: 50,
    icon: Eraser,
  },
  {
    id: 'polimento-comercial',
    name: 'Polimento Comercial',
    description: 'Polimento de realce para renovar o brilho da pintura e remoção de riscos leves.',
    price: 350,
    icon: Disc3,
  },
  {
    id: 'polimento-tecnico',
    name: 'Polimento Técnico',
    description: 'Correção profunda de defeitos e espelhamento da pintura.',
    price: 650,
    icon: Gem,
  },
  {
    id: 'polimento-farois',
    name: 'Polimento de Faróis',
    description: 'brilho e leves correções de riscos nos faróis.',
    price: 120,
    icon: Lightbulb,
  },
  {
    id: 'hidratacao-couro',
    name: 'Hidratação de Couro',
    description: 'Limpeza e hidratação profunda dos bancos de couro.',
    price: 80,
    icon: Armchair,
  }
]

export const packages: Package[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: 170,
    tagline: 'O essencial para o dia a dia.',
    includes: [
      'Lavagem Completa',
      'Proteção dos Plásticos Internos',
      'Proteção dos Plásticos Externos',
    ],
  },
  {
    id: 'prata',
    name: 'Prata',
    price: 280,
    tagline: 'Limpeza e proteção reforçadas.',
    includes: [
      'Lavagem Completa',
      'Proteção dos Plásticos Internos + Externos',
      'Descontaminação dos Vidros + Cristalização dos Vidros',
    ],
  },
  {
    id: 'ouro',
    name: 'Ouro',
    price: 450,
    tagline: 'Brilho e cuidado completo.',
    highlighted: true,
    includes: [
      'Lavagem Completa',
      'Descontaminação + Cristalização de Vidros',
      'Polimento de Faróis',
      'Proteção dos Plásticos Externos + Internos',
      'Riscos leves de pintura',
    ],
  },
  {
    id: 'diamante',
    name: 'Diamante',
    price: 730,
    tagline: 'Experiência premium definitiva.',
    includes: [
      'Lavagem Completa',
      'Polimento comercial',
      'Descontaminação + Cristalização de Vidros',
      'Polimento de Faróis',
      'Proteção dos Plásticos Externos + Internos',],
  },
]

export const WHATSAPP_NUMBER = '5546991310752'

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}
