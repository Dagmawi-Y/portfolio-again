<script lang="ts">
  import SEO from "$lib/components/SEO.svelte";

  export let data;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
</script>

<SEO title="Brain Dump — Notes & Thoughts" description="Occasional notes on code, engineering, and life by Dagmawi Yohannes." />


<div class="blog-container">
  <header class="blog-header">
    <h1 class="title">Brain Dump</h1>
    <p class="subtitle">Occasional notes on code and life.</p>
  </header>

  <div class="posts-list">
    {#each data.posts as post, i}
      <a href="/blog/{post.slug}" class="post-item">
        <div class="post-meta">
          <time class="post-date">{formatDate(post.date)}</time>
        </div>
        <div class="post-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-desc">{post.description}</p>
        </div>
        <div class="post-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-container {
    max-width: 720px;
    margin: 0 auto;
    padding: 6rem 2rem;
  }

  .blog-header {
    margin-bottom: 3rem;
  }

  .title {
    font-size: 2.25rem;
    font-weight: 800;
    margin: 0 0 0.4rem 0;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: var(--text-primary);
  }

  .subtitle {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .posts-list {
    display: flex;
    flex-direction: column;
  }

  .post-item {
    display: grid;
    grid-template-columns: 90px 1fr auto;
    gap: 1.5rem;
    padding: 1.5rem 0;
    text-decoration: none;
    border-bottom: 1px solid var(--surface-2);
    transition: padding-left 0.2s;
    position: relative;
  }

  .post-item:hover {
    padding-left: 0.5rem;
  }

  .post-meta {
    padding-top: 0.2rem;
  }

  .post-date {
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.6;
  }

  .post-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0 0.3rem 0;
    color: var(--text-primary);
    line-height: 1.25;
  }

  .post-desc {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
    max-width: 520px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .post-arrow {
    opacity: 0;
    transform: translateX(-8px);
    color: var(--text-primary);
    transition: opacity 0.2s, transform 0.2s;
    align-self: center;
  }

  .post-item:hover .post-arrow {
    opacity: 0.6;
    transform: translateX(0);
  }

  @media (max-width: 640px) {
    .blog-container {
      padding: 4rem 1.5rem;
    }

    .title {
      font-size: 1.75rem;
    }

    .post-item {
      grid-template-columns: 1fr;
      gap: 0.4rem;
      padding: 1.25rem 0;
    }

    .post-item:hover {
      padding-left: 0;
    }

    .post-arrow {
      display: none;
    }
  }
</style>
