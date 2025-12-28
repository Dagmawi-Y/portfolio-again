<script>
  export let data;
</script>

<div class="blog-container">
  <header class="header">
    <a href="/" class="back-link">← Back Home</a>
    <h1>Brain Dumps</h1>
    <p>Thoughts, tutorials, and rants.</p>
  </header>

  <div class="posts-grid">
    {#each data.posts as post}
      <a href="/blog/{post.slug}" class="post-card">
        <span class="date">{post.date}</span>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .header {
    margin-bottom: 4rem;
  }

  .back-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    margin-bottom: 2rem;
    display: block;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #fff, #aaa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .posts-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .post-card {
    display: block;
    text-decoration: none;
    padding: 2rem;
    border: 1px solid var(--surface-2);
    border-radius: var(--radius-lg);
    background: var(--surface-1);
    transition: all 0.2s;
  }

  .post-card:hover {
    transform: scale(1.02);
    border-color: var(--text-secondary);
  }

  .date {
    font-family: monospace;
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  .post-card h2 {
    color: var(--text-primary);
    margin: 0.5rem 0;
  }

  .post-card p {
    color: var(--text-secondary);
    margin: 0;
  }
</style>
