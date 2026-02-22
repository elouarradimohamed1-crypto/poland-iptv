'use client'

import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/212707711512?text=Dzień%20dobry!%20Chciałbym%20zamówić%20IPTV%20Polska"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-background animate-bounce"
      aria-label="Skontaktuj się z nami przez WhatsApp"
      title="Kontakt przez WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
