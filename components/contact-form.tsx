'use client'

import { useState } from 'react'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just show success message
    // In production, you'd send this to an API
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Wyślij nam wiadomość</h3>

        {submitted && (
          <div className="mb-6 p-4 bg-amber-500/20 border border-amber-500/50 rounded-lg">
            <p className="text-amber-500 font-semibold">Dziękujemy! Twoja wiadomość została wysłana.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
              Imię i Nazwisko
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Jan Kowalski"
              className="w-full px-4 py-3 bg-[#0f0f1a] border border-purple-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
              Adres E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="jan@example.com"
              className="w-full px-4 py-3 bg-[#0f0f1a] border border-purple-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
              Temat
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Pytanie dotyczące abonamentu"
              className="w-full px-4 py-3 bg-[#0f0f1a] border border-purple-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Opisz swoją wiadomość..."
              rows={5}
              className="w-full px-4 py-3 bg-[#0f0f1a] border border-purple-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 text-slate-900 font-bold py-3 rounded-lg hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-background"
          >
            Wyślij Wiadomość
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Skontaktuj się z nami</h3>
          <p className="text-slate-400">
            Nasz zespół jest dostępny 24/7, aby odpowiedzieć na Twoje pytania i udzielić pomocy.
          </p>
        </div>

        {/* Email Contact */}
        <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-2xl p-6 hover:border-amber-500/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="bg-amber-500/20 p-4 rounded-lg">
              <Mail size={24} className="text-amber-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Adres E-mail</h4>
              <a
                href="mailto:goldengateiptv@gmail.com"
                className="text-amber-500 hover:text-amber-400 transition-colors font-semibold"
              >
                goldengateiptv@gmail.com
              </a>
              <p className="text-slate-400 text-sm mt-2">Odpowiadamy w ciągu 2 godzin</p>
            </div>
          </div>
        </div>

        {/* Phone Contact */}
        <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-2xl p-6 hover:border-amber-500/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="bg-amber-500/20 p-4 rounded-lg">
              <Phone size={24} className="text-amber-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Numer Telefonu</h4>
              <a
                href="tel:+212707711512"
                className="text-amber-500 hover:text-amber-400 transition-colors font-semibold"
              >
                +212 707 711 512
              </a>
              <p className="text-slate-400 text-sm mt-2">Poniedziałek - Niedziela, 24/7</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-2xl p-6 hover:border-amber-500/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="bg-amber-500/20 p-4 rounded-lg">
              <MessageCircle size={24} className="text-amber-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">WhatsApp</h4>
              <a
                href="https://wa.me/212707711512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors font-semibold"
              >
                +212 707 711 512
              </a>
              <p className="text-slate-400 text-sm mt-2">Szybka odpowiedź w wiadomościach</p>
            </div>
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-gradient-to-r from-amber-500/15 to-purple-600/15 border border-amber-500/30 rounded-2xl p-6">
          <h4 className="text-lg font-bold text-white mb-4">Godziny Wsparcia</h4>
          <div className="space-y-2 text-slate-300">
            <p>Poniedziałek - Piątek: 08:00 - 22:00</p>
            <p>Sobota - Niedziela: 09:00 - 21:00</p>
            <p className="text-amber-500 font-semibold mt-4">Wsparcie awaryjne 24/7 dostępne</p>
          </div>
        </div>
      </div>
    </div>
  )
}
