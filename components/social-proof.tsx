'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Anna M.',
    rating: 5,
    text: 'Najlepszy IPTV w Polsce! Szybko, niezawodnie i pełno kanałów. Polecam wszystkim!',
  },
  {
    name: 'Piotr K.',
    rating: 5,
    text: 'Świetna obsługa klienta i doskonała jakość transmisji. Warto każdego grosza.',
  },
  {
    name: 'Maria S.',
    rating: 5,
    text: 'Bardzo zadowolona z usługi. Działa bezawaryjna i ma wszystkie kanały, które chciałam.',
  },
  {
    name: 'Tomasz W.',
    rating: 5,
    text: 'Przełączyłem się z innego dostawcy i nie żałuję. To naprawdę profesjonalna usługa.',
  },
  {
    name: 'Katarzyna L.',
    rating: 5,
    text: 'Szybka aktywacja, proste ustawienia, niesamowita ilość zawartości. Super!',
  },
  {
    name: 'Robert P.',
    rating: 5,
    text: 'Polecam serdecznie! Najstabilniejszy IPTV, jaki do tej pory używałem.',
  },
]

const devices = [
  { name: 'Smart TV', emoji: '📺' },
  { name: 'Android', emoji: '🤖' },
  { name: 'Firestick', emoji: '🔥' },
  { name: 'Apple TV', emoji: '🍎' },
  { name: 'PC', emoji: '💻' },
]

export function SocialProof() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Testimonials */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Co mówią nasze <span className="text-amber-500">użytkownicy?</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all hover:scale-105"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed text-lg">"{testimonial.text}"</p>
              <p className="text-amber-500 font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compatibility */}
      <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-2xl p-12">
        <h3 className="text-3xl font-bold text-center mb-12 text-white">
          Kompatybilne z <span className="text-amber-500">Wszystkimi Urządzeniami</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {devices.map((device) => (
            <div
              key={device.name}
              className="flex flex-col items-center justify-center p-8 bg-[#0f0f1a] rounded-lg hover:bg-[#2d2d4a] transition-all hover:scale-110 group"
            >
              <span className="text-6xl mb-4 group-hover:scale-125 transition-transform">{device.emoji}</span>
              <p className="text-neutral-300 text-center font-semibold">{device.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
