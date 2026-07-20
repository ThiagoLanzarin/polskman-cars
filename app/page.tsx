'use client'

import { QuoteProvider } from '@/components/quote-context'
import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { PackagesSection } from '@/components/packages-section'
import { CustomerForm } from '@/components/customer-form'
import { OrderSummary, MobileSummaryBar } from '@/components/order-summary'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <QuoteProvider>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main>
          <HeroSection />

          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="min-w-0">
                <ServicesSection />
                <PackagesSection />
                <CustomerForm />
              </div>
              <div className="pt-20 md:pt-28">
                <OrderSummary />
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
        <div className="h-20 lg:hidden" aria-hidden />
        <MobileSummaryBar />
      </div>
    </QuoteProvider>
  )
}
