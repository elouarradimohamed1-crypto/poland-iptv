'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { PaymentIcons } from './payment-icons'

export function Hero() {
  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            <span className="text-accent-primary">IPTV Polska</span>
            {' '}- Otwórz Drzwi do Świata Nieskończonej Rozrywki
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed">
            Ciesz się dostępem do ponad <span className="text-amber-500 font-semibold">55 000 kanałów</span> oraz{' '}
            <span className="text-amber-500 font-semibold">90 000 filmów na żądanie (VOD)</span>. Gwarancja 100% dostępności.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="https://wa.me/212707711512?text=Cześć!%20Chciałbym%20poprosić%20o%20darmowy%20test%20IPTV%20Polska"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-slate-900 font-bold px-10 py-4 rounded-lg hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-background text-center text-lg"
            >
              Zamów przez WhatsApp
            </a>
            <a
              href="#pricing"
              className="border-2 border-amber-500 text-amber-500 font-semibold px-10 py-4 rounded-lg hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center gap-2 text-lg"
            >
              <Play size={24} />
              Dowiedz się więcej
            </a>
          </div>
          <PaymentIcons />
        </div>

        <div className="relative">
          <div className="relative w-full aspect-video bg-gradient-to-br from-purple-600/20 to-slate-800 rounded-2xl overflow-hidden border border-amber-500/30">
            <Image
              src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80"
              alt="IPTV Polska - Streaming Service"
              fill
              priority
              fetchPriority="high"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
