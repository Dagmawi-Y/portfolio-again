<script lang="ts">
  import { onMount } from "svelte";
  import TableOfContents from "$lib/components/TableOfContents.svelte";
  import SEO from "$lib/components/SEO.svelte";

  export let data;

  let scrollProgress = 0;

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    scrollProgress = (winScroll / height) * 100;
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
</script>

<SEO title={data.meta.title} description={data.meta.description} />

<div class="progress-wrap">
  <div class="progress-bar" style="width: {scrollProgress}%"></div>
</div>

<div class="reader-page">
  <div class="reader-container">
    <article class="post-article">
      <header class="post-header">
        <div class="post-meta">
          <span class="category">{data.meta.category || "Insight"}</span>
          <span class="dot">•</span>
          <time datetime={data.meta.date}>{formatDate(data.meta.date)}</time>
        </div>
        <h1 class="post-title">{data.meta.title}</h1>
        <p class="post-description">{data.meta.description}</p>
      </header>

      <div class="post-content markdown-body">
        <svelte:component this={data.content} />
      </div>
    </article>

    <aside class="reader-sidebar-right">
      <TableOfContents />
    </aside>
  </div>
</div>

<style>
  .progress-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--surface-2);
    z-index: 1000;
  }

  .progress-bar {
    height: 100%;
    background: var(--accent-1);
    width: 0%;
    transition: width 0.1s linear;
  }

  .reader-page {
    --bg-color: #fafafa;
    --text-primary: #171717;
    --text-secondary: #525252;
    --surface-1: rgba(0, 0, 0, 0.03);
    --surface-2: rgba(0, 0, 0, 0.06);
    --accent-1: #404040;

    background: var(--bg-color);
    min-height: 100vh;
    padding-top: 4rem;
    color: var(--text-primary);
  }

  :global(.dark) .reader-page {
    --bg-color: #0a0a0a;
    --text-primary: #e5e5e5;
    --text-secondary: #737373;
    --surface-1: rgba(255, 255, 255, 0.05);
    --surface-2: rgba(255, 255, 255, 0.08);
    --accent-1: #a3a3a3;
  }

  .reader-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 4rem;
    align-items: start;
  }

  .reader-sidebar-right {
    position: sticky;
    top: 6rem;
    height: fit-content;
  }

  .post-article {
    max-width: 680px;
    margin: 0 auto;
    width: 100%;
  }

  .post-header {
    margin-bottom: 4rem;
    text-align: center;
  }

  .post-meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    color: var(--text-secondary);
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 1.25rem;
  }

  .category {
    color: var(--accent-1);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .dot { opacity: 0.3; }

  .post-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.04em;
    margin: 0 0 1.25rem;
    color: var(--text-primary);
  }

  .post-description {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 560px;
    margin: 0 auto;
  }

  :global(.markdown-body) {
    font-size: 1.15rem;
    line-height: 1.8;
    color: var(--text-primary);
  }

  :global(.markdown-body p) {
    margin-bottom: 1.75rem;
    opacity: 0.92;
  }

  :global(.markdown-body h2) {
    font-size: 1.75rem;
    font-weight: 800;
    margin: 3.5rem 0 1.25rem;
    letter-spacing: -0.02em;
  }

  :global(.markdown-body h3) {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 2.5rem 0 1rem;
  }

  :global(.markdown-body .code-block) {
    position: relative;
    margin: 2.5rem 0;
    width: 100%;
  }

  :global(.markdown-body .code-block[data-lang]::before) {
    content: attr(data-lang);
    position: absolute;
    top: 10px;
    right: 14px;
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #6e7681;
    z-index: 1;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }

  :global(.markdown-body .code-block pre) {
    background: #0d1117 !important;
    padding: 2rem 1.25rem 1.25rem;
    border-radius: 12px;
    border: 1px solid rgba(48, 54, 61, 0.5);
    overflow-x: auto;
    margin: 0;
  }

  :global(.markdown-body .code-block pre::before) {
    content: "";
    position: absolute;
    top: 12px;
    left: 14px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ff5f57;
    box-shadow:
      18px 0 0 #febc2e,
      36px 0 0 #28c840;
  }

  :global(.markdown-body .code-block code) {
    font-size: 0.9rem;
    line-height: 1.7;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    display: block;
    background: transparent !important;
  }

  :global(.markdown-body code:not(pre code)) {
    background: var(--surface-1);
    color: var(--accent-1);
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-size: 0.85em;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }

  :global(.markdown-body img) {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    margin: 2.5rem 0;
    border: 1px solid var(--surface-2);
  }

  :global(.markdown-body blockquote) {
    margin: 3rem 0;
    padding: 2rem;
    background: var(--surface-1);
    border-radius: 16px;
    border: none;
    font-style: italic;
    font-size: 1.2rem;
    color: var(--text-secondary);
  }

  :global(.markdown-body blockquote::before) {
    content: "\201C";
    position: absolute;
    top: -16px;
    left: 16px;
    font-size: 5rem;
    color: var(--accent-1);
    opacity: 0.15;
    font-family: serif;
  }

  @media (max-width: 960px) {
    .reader-container {
      grid-template-columns: 1fr;
    }
    .reader-sidebar-right {
      display: none;
    }
    .post-article {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .reader-container {
      padding: 0 1.25rem;
    }
    .post-title {
      font-size: 2rem;
    }
    .post-header {
      margin-bottom: 2.5rem;
    }
  }
</style>
