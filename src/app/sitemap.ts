import { MetadataRoute } from 'next';
import { projects } from '../data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rishvinreddy.vercel.app';
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

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' || route === '/portfolio' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/portfolio' ? 0.9 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.dateUpdated),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
