import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.hidromembrana.cl'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'], // Bloqueamos rutas de API o admin si existieran
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
