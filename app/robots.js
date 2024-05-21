export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://personal-portfolio-delta-lime-54.vercel.app/sitemap.xml',
    }
  }