<script lang="ts">
  import { ArrowDown } from "lucide-svelte";
  import SocialLinks from "./SocialLinks.svelte";
</script>

<div class="content">
  <h1 class="headline">
    Modern products.<br />
    <span class="accent">No bullshit.</span>
  </h1>

  <p class="intro">
    I'm <strong>Dagmawi</strong>. I build mobile apps that people actually enjoy
    using. Obsessed with the details that get ignored — 120fps animations,
    rock-solid architecture, and making software feel as good as it looks.
  </p>

  <div class="specs">
    <span class="spec">React Native</span>
    <span class="spec-dot"></span>
    <span class="spec">Architecture</span>
    <span class="spec-dot"></span>
    <span class="spec">Performance</span>
  </div>

  <div class="actions">
    <a href="#work" class="btn-primary">
      View Work <ArrowDown size={16} />
    </a>
    <a href="mailto:daggyohannes@gmail.com" class="btn-secondary">
      Get in Touch
    </a>
  </div>

  <SocialLinks />
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .headline {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.03em;
    color: var(--text-primary);
  }

  .accent {
    color: var(--accent-1);
  }

  .intro {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--text-secondary);
    max-width: 520px;
    margin: 0 0 2rem 0;
  }

  .intro strong {
    color: var(--text-primary);
    font-weight: 600;
  }

  .specs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
  }

  .spec {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .spec-dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--text-secondary);
    opacity: 0.4;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
  }

  .btn-primary,
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.2s;
    font-family: inherit;
  }

  .btn-primary {
    background: var(--text-primary);
    color: var(--bg-color);
  }

  .btn-secondary {
    background: var(--surface-1);
    color: var(--text-primary);
    border: 1px solid var(--surface-2);
  }

  .btn-primary:hover,
  .btn-secondary:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    .headline {
      font-size: 2.25rem;
    }

    .intro {
      font-size: 1rem;
    }

    .specs {
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .actions {
      justify-content: center;
    }
  }
</style>
