'use client'

import { Zap, ArrowRightLeft, Wifi, Download, Settings, Play } from 'lucide-react'

const features = [
  {
    icon: Wifi,
    title: 'Szybkie i stabilne serwery',
    description: '99.9% uptime dla niezawodnego dostępu do treści',
  },
  {
    icon: ArrowRightLeft,
    title: 'Darmowa zmiana serwera',
    description: 'Zmień serwer na żądanie w dowolnym momencie',
  },
  {
    icon: Zap,
    title: 'Technologia wieloserwerowa',
    description: 'Automatyczne ponowne połączenie i przełączanie',
  },
  {
    icon: Download,
    title: 'Darmowa aktywacja aplikacji',
    description: 'Gotowe do użytku w zaledwie 15 minut',
  },
  {
    icon: Settings,
    title: 'Łatwe do skonfigurowania',
    description: 'Prosty setup dla wszystkich urządzeń',
  },
  {
    icon: Play,
    title: 'Wypróbuj to, zanim kupisz',
    description: 'Bezpłatny okres próbny bez zobowiązań',
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="features">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Dlaczego wybrać <span className="text-amber-500">IPTV Polska?</span>
        </h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto text-lg">
          Poznaj nasze wyjątkowe cechy, które wyróżniają nas od konkurencji
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all hover:bg-[#2d2d4a] group focus:outline-none focus:ring-2 focus:ring-amber-500 hover:scale-105"
              role="article"
            >
              <Icon className="w-14 h-14 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-neutral-400 text-base leading-relaxed">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
