import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { BlogCard } from '@/components/blog-card'
import { getAllBlogPosts } from '@/lib/blog-data'
import { Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - IPTV Polska',
  description: 'Przeczytaj najnowsze artykuły, poradniki i wiadomości o IPTV. Dowiedz się, jak maksymalnie wykorzystać IPTV Polska.',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const categories = ['Wszystkie', ...Array.from(new Set(posts.map(p => p.category)))]

  return (
    <main className="min-h-screen bg-[#0f0f1a]">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Blog <span className="text-amber-500">IPTV Polska</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Porady, poradniki i artykuły dotyczące IPTV. Odkryj, jak maksymalnie wykorzystać naszą usługę.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
            <input
              type="text"
              placeholder="Szukaj artykułów..."
              className="w-full pl-12 pr-4 py-3 bg-[#1a1a2e] border border-purple-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">Brak artykułów do wyświetlenia</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/10 to-amber-500/10 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gotowy do rozpoczęcia?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Zapoznaj się z naszymi poradnikami i zacznij korzystać z IPTV Polska dzisiaj.
          </p>
          <a
            href="https://wa.me/212707711512?text=Cześć!%20Chciałbym%20poprosić%20o%20darmowy%20test%20IPTV%20Polska"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all"
          >
            Spróbuj Teraz
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
