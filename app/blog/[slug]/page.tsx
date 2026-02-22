import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-data'
import { ArrowLeft, Clock, User, Folder } from 'lucide-react'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    }
  }

  return {
    title: `${post.title} - IPTV Polska`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)
  const relatedPosts = getAllBlogPosts().filter(p => p.id !== post?.id).slice(0, 3)

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0f0f1a]">
        <Header />
        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-slate-400 mb-8">Artykuł, którego szukasz, nie istnieje.</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all"
            >
              <ArrowLeft size={20} />
              Wróć do Bloga
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen bg-[#0f0f1a]">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft size={18} />
          Wróć do Bloga
        </Link>
      </section>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime} minut czytania</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder size={18} />
              <span>{post.category}</span>
            </div>
            <time className="text-slate-500">{formattedDate}</time>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-slate-800 rounded-lg overflow-hidden border border-purple-500/20" />
        </header>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-slate-300 leading-relaxed space-y-6 text-lg">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={idx} className="text-4xl font-bold text-white mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h1>
                )
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-amber-500 mt-6 mb-3">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '))
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-slate-300">
                    {items.map((item, i) => (
                      <li key={i} className="text-base">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={idx} className="text-base text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-purple-500/20">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-purple-600 rounded-full flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white">{post.author}</h3>
              <p className="text-slate-400">
                Ekspert z zespołu IPTV Polska pomagający użytkownikom maksymalnie wykorzystać naszą usługę.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-purple-600/10 to-amber-500/10 border border-purple-500/20 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Spróbuj IPTV Polska Teraz</h3>
          <p className="text-slate-300 mb-6">
            Darmowy test 3-dniowy dla nowych użytkowników. Bez karty kredytowej wymagane.
          </p>
          <a
            href="https://wa.me/212707711512?text=Cześć!%20Chciałbym%20poprosić%20o%20darmowy%20test%20IPTV%20Polska"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all"
          >
            Uzyskaj Dostęp
          </a>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]/50 border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12">Powiązane Artykuły</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-lg overflow-hidden hover:border-amber-500/50 transition-all hover:scale-105">
                    <div className="h-32 bg-gradient-to-br from-purple-600/20 to-slate-800" />
                    <div className="p-4">
                      <h3 className="font-bold text-white group-hover:text-amber-500 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-slate-500 text-sm mt-2">{relatedPost.readTime} min czytania</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
