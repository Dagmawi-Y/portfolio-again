<script>
  import { siteConfig } from "$lib/config";
  import { Github, Twitter, Linkedin, Mail } from "lucide-svelte";

  const iconMap = {
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin,
    email: Mail,
  };
</script>

<footer>
  <div class="container">
    <div class="top">
      <div class="brand">
        <h3>{siteConfig.name}</h3>
        <p>Crafting digital experiences with code and curiosity.</p>
      </div>

      <div class="links">
        {#each Object.entries(siteConfig.socials) as [key, url]}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={key}
          >
            <svelte:component this={iconMap[key]} size={20} />
          </a>
        {/each}
      </div>
    </div>

    <div class="bottom">
      <p>
        &copy; {new Date().getFullYear()}
        {siteConfig.name}. All rights reserved.
      </p>
      <p class="credit">Built with SvelteKit & Motion.</p>
    </div>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--surface-2);
    padding: 4rem 2rem 2rem;
    margin-top: 4rem;
    background: var(--bg-color);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4rem;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .brand h3 {
    font-size: 1.5rem;
    margin: 0 0 0.5rem;
  }

  .brand p {
    color: var(--text-secondary);
    max-width: 300px;
    margin: 0;
  }

  .links {
    display: flex;
    gap: 1.5rem;
  }

  .links a {
    color: var(--text-secondary);
    transition:
      color 0.2s,
      transform 0.2s;
  }

  .links a:hover {
    color: var(--text-primary);
    transform: translateY(-3px);
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    color: var(--surface-2); /* Very subtle text for copyright */
    font-size: 0.875rem;
  }

  .bottom p {
    margin: 0;
  }
  .credit {
    color: var(--text-secondary);
    opacity: 0.5;
  }
</style>
