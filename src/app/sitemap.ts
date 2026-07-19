import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rishvinreddy.github.io';
  const lastModified = new Date();

  // All the primary routes in the application
  const routes = [
    '',
    '/about',
    '/portfolio',
    '/services',
    '/resume',
    '/contact',
    '/skills',
    '/awards',
    '/blog',
    '/faq',
    '/ide',
    '/universe',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' || route === '/portfolio' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/portfolio' ? 0.9 : 0.8,
  }));
}
