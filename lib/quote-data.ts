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
    description: 'Lavagem detalhada da parte externa com produtos premium.',
    price: 60,
    icon: Droplets,
  },
  {
    id: 'lavagem-externa-cera',
    name: 'Lavagem Externa + Cera',
    description: 'Lavagem externa com aplicação de cera para brilho e proteção.',
    price: 80,
    icon: Sparkles,
  },
  {
    id: 'lavagem-completa',
    name: 'Lavagem Completa',
    description: 'Higienização completa interna e externa do veículo.',
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
    description: 'Proteção UV e brilho para os plásticos externos.',
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
    description: 'Tratamento que deixa os vidros com aspecto de cristal.',
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
    description: 'Correção de micro riscos e marcas superficiais na pintura.',
    price: 50,
    icon: Eraser,
  },
  {
    id: 'polimento-comercial',
    name: 'Polimento Comercial',
    description: 'Polimento de realce para renovar o brilho da pintura.',
    price: 350,
    icon: Disc3,
  },
  {
    id: 'polimento-tecnico',
    name: 'Polimento Técnico',
    description: 'Correção profunda de defeitos e espelhamento da pintura.',
    price: 700,
    icon: Gem,
  },
  {
    id: 'polimento-farois',
    name: 'Polimento de Faróis',
    description: 'Restauração da transparência e brilho dos faróis.',
    price: 120,
    icon: Lightbulb,
  },
  {
    id: 'lavagem-motor',
    name: 'Lavagem de Motor',
    description: 'Limpeza segura e detalhada do compartimento do motor.',
    price: 120,
    icon: Cog,
  },
  {
    id: 'hidratacao-couro',
    name: 'Hidratação de Couro',
    description: 'Limpeza e hidratação profunda dos bancos de couro.',
    price: 100,
    icon: Armchair,
  },
  {
    id: 'higienizacao-teto',
    name: 'Higienização do Teto',
    description: 'Limpeza profunda do forro e teto interno do veículo.',
    price: 80,
    icon: Wind,
  },
]

export const packages: Package[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: 150,
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
    price: 250,
    tagline: 'Limpeza e proteção reforçadas.',
    includes: [
      'Lavagem Completa',
      'Proteção dos Plásticos Internos',
      'Proteção dos Plásticos Externos',
      'Descontaminação dos Vidros',
      'Higienização do Teto',
    ],
  },
  {
    id: 'ouro',
    name: 'Ouro',
    price: 350,
    tagline: 'Brilho e cuidado completo.',
    highlighted: true,
    includes: [
      'Lavagem Completa',
      'Descontaminação + Cristalização de Vidros',
      'Hidratação de Couro',
      'Polimento de Faróis',
      'Higienização do Teto',
      'Proteção dos Plásticos Externos',
    ],
  },
  {
    id: 'diamante',
    name: 'Diamante',
    price: 650,
    tagline: 'Experiência premium definitiva.',
    includes: [
      'Lavagem Completa',
      'Polimento Técnico',
      'Cristalização dos Vidros',
      'Descontaminação + Cristalização de Vidros',
      'Hidratação de Couro',
      'Polimento de Faróis',
      'Lavagem de Motor',
      'Higienização do Teto',
    ],
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
