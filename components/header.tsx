'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-amber-500/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-amber-500">
            IPTV Polska
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#configuration"
              className="text-slate-300 hover:text-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-background"
            >
              KONFIGURACJA IPTV
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-background"
            >
              Contact Us
            </Link>
            <Link
              href="/blog"
              className="text-slate-300 hover:text-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-background"
            >
              Blog
            </Link>

            <a
              href="https://wa.me/212707711512?text=Cześć!%20Chciałbym%20poprosić%20o%20darmowy%20test%20IPTV%20Polska"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-slate-900 font-bold px-6 py-2 rounded-lg hover:scale-105 transition-all animate-pulse focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-background"
            >
              ZAPISZ SIĘ TERAZ!
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-amber-500 transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`h-0.5 w-full bg-amber-500 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-amber-500 transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-amber-500/20">
            <Link href="#configuration" className="block py-2 text-slate-300 hover:text-amber-500">
              KONFIGURACJA IPTV
            </Link>
            <Link href="/contact" className="block py-2 text-slate-300 hover:text-amber-500">
              Contact Us
            </Link>
            <Link href="/blog" className="block py-2 text-slate-300 hover:text-amber-500">
              Blog
            </Link>
            <a
              href="https://wa.me/212707711512?text=Cześć!%20Chciałbym%20poprosić%20o%20darmowy%20test%20IPTV%20Polska"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-4 bg-amber-500 text-slate-900 font-bold px-6 py-2 rounded-lg hover:scale-105 transition-all animate-pulse text-center"
            >
              ZAPISZ SIĘ TERAZ!
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
