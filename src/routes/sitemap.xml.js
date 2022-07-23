export async function get() {
    const headers = {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    }
    return {
      headers,
      body: `<?xml version="1.0" encoding="UTF-8"?>
      <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
      
      
      <url>
        <loc>https://hamidrezakhoramrokh.ir/</loc>
        <lastmod>2022-07-21T11:05:50+00:00</lastmod>
      </url>
      
      
      </urlset>`,
    }
  }