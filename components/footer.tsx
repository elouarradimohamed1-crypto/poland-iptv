'use client'

import Link from 'next/link'
import { MessageCircle, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0f0f1a] border-t border-amber-500/20 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Nasza Misja</h3>
            <p className="text-slate-400 leading-relaxed">
              IPTV Polska to usługa streamingowa, która ma za zadanie dostarczać najlepszej jakości rozrywkę
              dostępną dla każdego. Wierzymy w to, że wszyscy powinni mieć dostęp do najlepszych kanałów
              i filmów, bez względu na ich lokalizację czy urządzenie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Linki</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Polityka Prywatności
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Polityka Zwrotów
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-500/20 mt-16 pt-16">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact WhatsApp */}
            <div>
              <h4 className="text-white font-semibold mb-3">WhatsApp</h4>
              <a
                href="https://wa.me/212707711512"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skontaktuj się z nami przez WhatsApp"
                className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors group"
              >
                <MessageCircle size={20} />
                <span className="group-hover:underline">+212 707 711 512</span>
              </a>
            </div>

            {/* Contact Email */}
            <div>
              <h4 className="text-white font-semibold mb-3">Email</h4>
              <a
                href="mailto:goldengateiptv@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors group"
              >
                <Mail size={20} />
                <span className="group-hover:underline">goldengateiptv@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-amber-500/20">
            <p className="text-slate-500 text-sm">
              © 2024 IPTV Polska. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
