<script lang="ts">
  import { siteConfig } from "$lib/config";
</script>

<footer class="site-footer">
  <div class="container">
    <div class="footer-content">
      <span class="name">{siteConfig.name}</span>
      <div class="links">
        <a href="/about">About</a>
        <a href="/now">Now</a>
        <a href="/blog">Blog</a>
        <a href="https://github.com/dagmawi-y-hailu" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/dagmawi-y-hailu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:daggyohannes@gmail.com">Email</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    padding: 4rem 2rem;
    border-top: 1px solid var(--surface-2);
  }

  .container {
    max-width: 720px;
    margin: 0 auto;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.01em;
  }

  .links {
    display: flex;
    gap: 1.5rem;
  }

  .links a {
    font-size: 0.8rem;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s;
  }

  .links a:hover {
    color: var(--text-primary);
  }

  @media (max-width: 640px) {
    .footer-content {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    .links {
      gap: 1rem;
    }
  }
</style>
