export const GET = async () => {
  const website = "https://dagmawi.dev"; // Dagmawi's primary domain placeholder / production domain
  
  // Get all markdown posts to include in sitemap
  const paths = import.meta.glob("/src/posts/*.md", { eager: true });
  const slugs = Object.entries(paths).map(([path]) => {
    return path.split("/").pop()?.replace(".md", "") || "";
  }).filter(Boolean);

  const pages = [
    "",
    "about",
    "now",
    "resume",
    "blog",
    ...slugs.map(slug => `blog/${slug}`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
    .map((page) => {
      return `
  <url>
    <loc>${website}/${page ? `/${page}` : ""}</loc>
    <changefreq>${page === "" ? "daily" : "weekly"}</changefreq>
    <priority>${page === "" ? "1.0" : page.startsWith("blog/") ? "0.6" : "0.8"}</priority>
  </url>
      `;
    })
    .join("").trim()}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=0, s-maxage=3600"
    }
  });
};
