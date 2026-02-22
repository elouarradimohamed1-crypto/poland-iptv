import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Pricing } from '@/components/pricing'
import { SocialProof } from '@/components/social-proof'
import { HowToBuy } from '@/components/how-to-buy'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <SocialProof />
      <HowToBuy />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
