import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { Mail, Phone, Clock } from 'lucide-react'

export const metadata = {
  title: 'Skontaktuj się z nami – IPTV Polska',
  description: 'Skontaktuj się z nami – IPTV Polska. Wsparcie 24/7: telefon, e-mail, chat i WhatsApp. Szybka pomoc techniczna i obsługa klienta w Polsce.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
            Skontaktuj się z nami – <span className="text-amber-500">IPTV Polska</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nasz zespół wsparcia jest dostępny 24/7, aby odpowiedzieć na wszystkie Twoje pytania i udzielić pomocy technicznej. Skomentuj na nas – Wsparcie 24/7: telefon, e-mail, chat i WhatsApp.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl p-6 text-center">
            <Clock className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">24/7 Wsparcie</h3>
            <p className="text-slate-400">Dostępni przez całą dobę, 7 dni w tygodniu</p>
          </div>
          <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl p-6 text-center">
            <Mail className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Szybka Odpowiedź</h3>
            <p className="text-slate-400">Odpowiadamy w ciągu 2 godzin</p>
          </div>
          <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl p-6 text-center">
            <Phone className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Wiele Kanałów</h3>
            <p className="text-slate-400">Telefon, e-mail, WhatsApp i chat</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ContactForm />
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-purple-600/10 to-amber-500/10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pytania Najczęściej Zadawane
          </h2>
          <p className="text-slate-400 text-lg">
            Nie znaleźliście odpowiedzi? Skontaktujcie się bezpośrednio z naszym zespołem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Jak mogę zmienić plan abonamentu?</h3>
            <p className="text-slate-300">
              Możesz zmienić swój plan w dowolnym momencie. Skontaktuj się z naszym zespołem wsparcia, a pomogą Ci w wyborze najlepszego planu.
            </p>
          </div>
          <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Jaki jest okres bezpłatnego testu?</h3>
            <p className="text-slate-300">
              Oferujemy 3-dniowy bezpłatny test dla nowych użytkowników. Aby uaktywniać, wyślij wiadomość przez WhatsApp.
            </p>
          </div>
          <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Ile urządzeń mogę jednocześnie używać?</h3>
            <p className="text-slate-300">
              W zależności od planu, możesz używać 2-6 urządzeń jednocześnie. Szczegóły dostępne w opisie każdego planu.
            </p>
          </div>
          <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Czy mogę zmienić hasło?</h3>
            <p className="text-slate-300">
              Tak! W każdej chwili możesz zmienić hasło. Kontakt z wsparciem w przypadku problemów.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
