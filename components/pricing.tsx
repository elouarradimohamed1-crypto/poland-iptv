'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import { PaymentIcons } from './payment-icons'

const plans = [
  {
    name: 'Testowy',
    duration: '3 Miesiące',
    price: '32€',
    popular: false,
    whatsappLink: 'https://wa.me/212707711512?text=Dzień%20dobry!%20Chcę%20zamówić%20pakiet%20IPTV%203%20Miesiące%20(32€)',
  },
  {
    name: 'Popularny',
    duration: '6 Miesięcy',
    price: '42€',
    popular: true,
    whatsappLink: 'https://wa.me/212707711512?text=Dzień%20dobry!%20Chcę%20zamówić%20pakiet%20IPTV%206%20Miesięcy%20(42€)',
  },
  {
    name: 'VIP',
    duration: '12 Miesięcy',
    price: '62€',
    popular: false,
    whatsappLink: 'https://wa.me/212707711512?text=Dzień%20dobry!%20Chcę%20zamówić%20pakiet%20VIP%2012%20Miesięcy%20(62€)',
  },
]

const features = [
  '55,000+ kanałów',
  '90,000+ filmów na żądanie (VOD)',
  'Wszystkie kanały polskie',
  'Premium Sports',
  '4K/UHD jakość',
  'EPG (Guide)',
  'Bez VPN potrzebnego',
  '7-dniowa gwarancja zwrotu pieniędzy',
]



export function Pricing() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="pricing">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Nasze <span className="text-accent-primary">Plany Cenowe</span>
        </h2>
        <p className="text-center text-neutral-400 max-w-2xl mx-auto text-lg">
          Wybierz plan, który najlepiej odpowiada Twoim potrzebom
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border transition-all hover:scale-105 ${
              plan.popular
                ? 'bg-[#1a1a2e] border-amber-500/30 shadow-2xl'
                : 'bg-[#1a1a2e] border-purple-500/20'
            }`}
            style={
              plan.popular
                ? {
                    boxShadow: '0 0 40px rgba(212, 175, 55, 0.3), 0 0 20px rgba(91, 33, 182, 0.2)',
                  }
                : undefined
            }
          >
            {/* Discount Badge */}
            <div className="absolute -top-4 right-8">
              <span className="bg-amber-500 text-slate-900 text-sm font-bold px-4 py-1 rounded-full">
                65% OFF
              </span>
            </div>

            {plan.popular && (
              <div className="absolute top-4 left-4">
                <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                  POPULARNE
                </span>
              </div>
            )}

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-4">{plan.duration}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-amber-500">{plan.price}</span>
              </div>

              <a
                href={plan.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background mb-8 text-center ${
                  plan.popular
                    ? 'bg-amber-500 text-slate-900 hover:shadow-lg focus:ring-amber-500'
                    : 'border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10 focus:ring-amber-500'
                }`}
              >
                Kup Teraz
              </a>
              <PaymentIcons />

              <div className="space-y-3 mt-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Money Back Guarantee */}
      <div className="mt-20 bg-gradient-to-r from-amber-500/15 to-purple-600/15 border border-amber-500/30 rounded-2xl p-10 text-center">
        <h3 className="text-3xl font-bold text-white mb-3">
          100% Gwarancja Zwrotu Pieniędzy
        </h3>
        <p className="text-slate-300 text-lg">
          Jeśli nie będziesz zadowolony, zwrócimy Ci pieniądze w ciągu 30 dni. Bez pytań.
        </p>
      </div>
    </section>
  )
}
