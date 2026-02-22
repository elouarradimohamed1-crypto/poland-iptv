'use client'

import { ShoppingCart, User, Zap } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Złóż zamówienie',
    description: 'Wybierz plan, który Ci odpowiada i dokonaj płatności',
    icon: ShoppingCart,
  },
  {
    number: '2',
    title: 'Załóż konto',
    description: 'Utworz konto w naszym panelu i zainstaluj aplikację',
    icon: User,
  },
  {
    number: '3',
    title: 'Ciesz się usługą!',
    description: 'Zaloguj się i ciesz się 55,000+ kanałami',
    icon: Zap,
  },
]

export function HowToBuy() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="configuration">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Jak kupić abonament <span className="text-amber-500">IPTV Polska</span>
        </h2>
        <p className="text-center text-slate-400 text-lg">
          Zaledwie 3 proste kroki do nieograniczonej rozrywki
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => {
          const Icon = step.icon
          return (
            <div key={step.number} className="relative">
              {/* Connection line for desktop */}
              {steps.indexOf(step) < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[55%] right-[-25%] h-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
              )}

              <div className="relative bg-[#1a1a2e] border border-purple-500/20 rounded-2xl p-10 text-center hover:border-amber-500/50 transition-all hover:scale-105">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="bg-amber-500 text-slate-900 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold border-4 border-slate-900">
                    {step.number}
                  </div>
                </div>

                <Icon className="w-14 h-14 text-amber-500 mx-auto mb-6 mt-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-base">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
