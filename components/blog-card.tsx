'use client'

import Link from 'next/link'
import { BlogPost } from '@/lib/blog-data'
import { Clock, Folder } from 'lucide-react'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all hover:scale-105 cursor-pointer group h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-48 bg-gradient-to-br from-purple-600/20 to-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category and Date */}
          <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-500 text-xs font-bold px-2 py-1 rounded-full">
              <Folder size={12} />
              {post.category}
            </span>
            <span className="text-slate-500 text-xs">{formattedDate}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-amber-500 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
            <span className="text-slate-500 text-xs">{post.author}</span>
            <span className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
              <Clock size={14} />
              {post.readTime} min
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
