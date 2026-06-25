<script lang="ts">
  import { Github, Linkedin, Twitter } from "lucide-svelte";
  import { siteConfig } from "$lib/config";
</script>

<div class="socials">
  <a href={siteConfig.socials.github} aria-label="Github" class="social-link" target="_blank" rel="noopener noreferrer">
    <Github size={18} />
  </a>
  <a href={siteConfig.socials.twitter} aria-label="Twitter" class="social-link" target="_blank" rel="noopener noreferrer">
    <Twitter size={18} />
  </a>
  <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" class="social-link" target="_blank" rel="noopener noreferrer">
    <Linkedin size={18} />
  </a>
</div>

<style>
  .socials {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: var(--text-secondary);
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    transition: color 0.2s, border-color 0.2s;
    text-decoration: none;
  }

  .social-link:hover {
    color: var(--text-primary);
    border-color: var(--accent-1);
  }
</style>
