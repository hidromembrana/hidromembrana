import { MetadataRoute } from 'next'
import { PRODUCTS } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.hidromembrana.cl'

    // Rutas estáticas principales
    const routes = [
        '',
        '/nosotros',
        '/productos',
        '/servicios',
        '/proyectos',
        '/cotizar',
        '/contacto',
        '/terminos',
        '/privacidad',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Rutas dinámicas de productos
    const productRoutes = PRODUCTS
        .filter(product => product.href.startsWith('/productos/'))
        .map((product) => ({
            url: `${baseUrl}${product.href}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }))

    return [...routes, ...productRoutes]
}
