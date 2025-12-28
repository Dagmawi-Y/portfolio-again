<script>
  export let data;
</script>

<svelte:head>
  <title>{data.meta.title} — Brain Dump</title>
</svelte:head>

<div class="article-container">
  <a href="/blog" class="back">← All Posts</a>

  <header>
    <div class="meta">{data.meta.date}</div>
    <h1 class="title">{data.meta.title}</h1>
  </header>

  <article class="markdown-body">
    <svelte:component this={data.content} />
  </article>
</div>

<style>
  .article-container {
    max-width: 740px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .back {
    display: inline-block;
    color: var(--text-secondary);
    text-decoration: none;
    margin-bottom: 3rem;
  }

  header {
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--surface-2);
    padding-bottom: 2rem;
  }

  .meta {
    font-family: monospace;
    color: var(--accent-1);
    margin-bottom: 1rem;
  }

  .title {
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 0;
  }

  /* Markdown Styles */
  :global(.markdown-body) {
    line-height: 1.8;
    font-size: 1.125rem;
    color: #e4e4e7;
  }

  :global(.markdown-body h2) {
    font-size: 1.75rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
    color: white;
  }

  :global(.markdown-body p) {
    margin-bottom: 1.5rem;
  }

  :global(.markdown-body pre) {
    background: var(--surface-1) !important;
    border-radius: var(--radius-md);
    padding: 1.5rem;
    overflow-x: auto;
    border: 1px solid var(--surface-2);
  }

  :global(.markdown-body code) {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.9em;
  }
</style>
