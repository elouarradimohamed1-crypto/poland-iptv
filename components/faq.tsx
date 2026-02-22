'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Jak mogę zapłacić?',
    answer: 'Akceptujemy PayPal i karty kredytowe (Visa, Mastercard, American Express). Wszystkie transakcje są bezpieczne i szyfrowane.',
  },
  {
    question: 'Czy potrzebuję VPN?',
    answer: 'Nie, nie potrzebujesz VPN. Usługa IPTV Polska jest w pełni dostępna bez konieczności używania VPN.',
  },
  {
    question: 'Czy oferujecie usługi resellerskie?',
    answer: 'Tak, oferujemy atrakcyjne warunki dla reselerów. Skontaktuj się z nami bezpośrednio, aby poznać szczegóły programu partnerskiego.',
  },
  {
    question: 'Jak długo trwa aktywacja?',
    answer: 'Aktywacja zwykle trwa 15 minut od momentu dokonania płatności. W rzadkich przypadkach może to potrwać do 1 godziny.',
  },
  {
    question: 'Czy moge zmienić serwer?',
    answer: 'Tak, możesz bezpłatnie zmienić serwer w dowolnym momencie. Po prostu skontaktuj się z naszym wsparciem technicznym.',
  },
  {
    question: 'Czy jest gwarancja zwrotu pieniędzy?',
    answer: 'Tak! Oferujemy 30-dniową gwarancję zwrotu pieniędzy. Jeśli nie będziesz zadowolony, zwrócimy Ci 100% zapłaty bez pytań.',
  },
  {
    question: 'Jak się zalogować do aplikacji?',
    answer: 'Po aktywacji otrzymasz dane logowania. Po prostu zainstaluj aplikację na swoim urządzeniu i zaloguj się za pomocą otrzymanych danych.',
  },
  {
    question: 'Ile użytkowników mogę mieć na jednym koncie?',
    answer: 'Zazwyczaj każde konto można używać na 2-3 urządzeniach jednocześnie. W razie potrzeby skontaktuj się z nami.',
  },
  {
    question: 'Jakie kanały są dostępne?',
    answer: 'Mamy ponad 55,000 kanałów z całego świata, w tym wszystkie główne polskie kanały TV, sport, rozrywkę i wiele więcej.',
  },
  {
    question: 'Czy mogę obejrzeć filmy na żądanie?',
    answer: 'Tak! Mamy bibliotekę ponad 90,000 filmów na żądanie (VOD) w różnych gatunkach, od dramatów po komedie i horrory.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto" id="faq">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Najczęstsze <span className="text-amber-500">Pytania</span>
        </h2>
        <p className="text-center text-slate-400 text-lg">
          Tutaj znajdziesz odpowiedzi na najbardziej popularne pytania
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-purple-500/20 rounded-lg overflow-hidden hover:border-amber-500/50 transition-colors bg-[#1a1a2e]"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 bg-[#1a1a2e] hover:bg-[#2d2d4a] flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              aria-expanded={openIndex === index}
            >
              <span className="font-bold text-white text-left text-lg">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`text-amber-500 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 py-5 bg-[#0f0f1a] border-t border-purple-500/20 text-slate-300 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
