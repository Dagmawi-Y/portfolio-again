<script lang="ts">
  import { page } from "$app/stores";

  // Svelte 5 props
  let {
    title = "",
    description = "",
    keywords = "",
    ogType = "website",
    ogImage = "/me.png",
    canonicalUrl = "",
  }: {
    title?: string;
    description?: string;
    keywords?: string;
    ogType?: string;
    ogImage?: string;
    canonicalUrl?: string;
  } = $props();

  // Construct actual fields with excellent defaults optimized for the user's goals
  const defaultTitle =
    "Dagmawi Yohannes — Software Engineer in Ethiopia | Best Developer";
  const defaultDescription =
    "Dagmawi Yohannes is a leading full-stack software engineer and developer in Addis Ababa, Ethiopia. Founder of Edopia and builder of high-scale mobile and web apps, including work with Adot Technologies.";
  const defaultKeywords =
    "dagmawi, dagmawi yohannes, software engineer in ethiopia, software engineer in ethiopa, ethiopian developer, best developer in ethiopia, best developer in ethiopa, edopia, adot technologies, full stack developer, react native, sveltekit";

  let finalTitle = $derived(
    title ? `${title} — Dagmawi Yohannes` : defaultTitle,
  );
  let finalDescription = $derived(description || defaultDescription);
  let finalKeywords = $derived(keywords || defaultKeywords);

  // Derive absolute URL
  let currentUrl = $derived(
    canonicalUrl || ($page && $page.url ? $page.url.href : ""),
  );

  // JSON-LD Person Schema structured data for Google Personal Panel and rich snippets
  let jsonLdString = $derived(
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Dagmawi Yohannes",
      alternateName: ["Dagmawi", "Daggy"],
      url: currentUrl || "https://dagmawi.dev",
      image: "https://dagmawi.dev/me.png",
      jobTitle: "Software Engineer & Ethiopian Developer",
      worksFor: [
        {
          "@type": "Organization",
          name: "Edopia",
          url: "https://getedopia.com",
        },
        {
          "@type": "Organization",
          name: "Adot Technologies",
        },
      ],
      knowsAbout: [
        "Software Engineering",
        "Full-stack Development",
        "React Native",
        "SvelteKit",
        "Mobile App Development",
        "Artificial Intelligence",
        "Local-First Software",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "Ethiopia",
      },
      description:
        "Full-stack engineer and founder of Edopia. Building local-first, AI-powered mobile and web apps in Ethiopia.",
      sameAs: [
        "https://github.com/dagmawi-y-hailu",
        "https://www.linkedin.com/in/dagmawi-y-hailu",
        "https://twitter.com/dagmawi_y",
      ],
    }),
  );
</script>

<svelte:head>
  <!-- Basic Meta Tags -->
  <title>{finalTitle}</title>
  <meta name="description" content={finalDescription} />
  <meta name="keywords" content={finalKeywords} />
  <meta name="author" content="Dagmawi Yohannes" />
  <meta name="robots" content="index, follow" />

  <!-- Canonical URL -->
  {#if currentUrl}
    <link rel="canonical" href={currentUrl} />
  {/if}

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={ogType} />
  <meta property="og:title" content={finalTitle} />
  <meta property="og:description" content={finalDescription} />
  {#if currentUrl}
    <meta property="og:url" content={currentUrl} />
  {/if}
  {#if ogImage}
    <meta property="og:image" content={ogImage} />
  {/if}
  <meta property="og:site_name" content="Dagmawi Yohannes Portfolio" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={finalTitle} />
  <meta name="twitter:description" content={finalDescription} />
  {#if ogImage}
    <meta name="twitter:image" content={ogImage} />
  {/if}

  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
    {@html jsonLdString}
  </script>
</svelte:head>
