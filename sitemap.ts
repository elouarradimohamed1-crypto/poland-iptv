import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://appoloiptv.com/'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/apollo-iptv`, // إيلا زدتي صفحة أبولو
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // زيد أي صفحة أخرى هنا بنفس الطريقة
  ]
}
