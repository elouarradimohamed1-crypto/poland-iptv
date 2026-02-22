import { MetadataRoute } from 'next'

// هاد الفانكشن هي اللي كتحكم في التحديث التلقائي
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://appoloiptv.com'

  // هنا تقدر تزيد "Fetch" من الـ API أو الـ Database ديالك إيلا كان عندك Blog
  // مثال: const posts = await getPosts() 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // إيلا زدتي صفحات ديناميكية، كدير ليهم Map هنا
    // ...posts.map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: post.updatedAt }))
  ]
}
