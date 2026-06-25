<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import { siteConfig } from "$lib/config";
  import { ArrowUpRight } from "lucide-svelte";

  const featured = siteConfig.projects.slice(0, 5);
</script>

<svelte:head>
  <title>{siteConfig.name} — {siteConfig.title}</title>
  <meta name="description" content={siteConfig.description} />
</svelte:head>

<main>
  <Hero />

  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Selected Work</h2>
        <a href="/work" class="view-all">View all <ArrowUpRight size={14} /></a>
      </div>

      <div class="project-list">
        {#each featured as project}
          <a href={project.link} class="project-row" target="_blank" rel="noopener noreferrer">
            <div class="project-info">
              <h3 class="project-title">{project.title}</h3>
              <p class="project-desc">{project.description}</p>
            </div>
            <div class="project-meta">
              <div class="tags">
                {#each project.tags.slice(0, 2) as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
              <ArrowUpRight size={14} class="arrow" />
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>
</main>

<style>
  .section {
    padding: 4rem 2rem 6rem;
  }

  .container {
    max-width: 640px;
    margin: 0 auto;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent-1);
    margin: 0;
  }

  .view-all {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: color 0.2s;
  }

  .view-all:hover {
    color: var(--text-primary);
  }

  .project-list {
    display: flex;
    flex-direction: column;
  }

  .project-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--surface-2);
    text-decoration: none;
    color: inherit;
    transition: padding-left 0.2s;
  }

  .project-row:first-child {
    border-top: 1px solid var(--surface-2);
  }

  .project-row:hover {
    padding-left: 0.5rem;
  }

  .project-info {
    flex: 1;
  }

  .project-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 0.2rem 0;
    letter-spacing: -0.01em;
    transition: color 0.2s;
  }

  .project-row:hover .project-title {
    color: var(--accent-1);
  }

  .project-desc {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
  }

  .project-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .tags {
    display: flex;
    gap: 0.3rem;
  }

  .tag {
    font-size: 0.6rem;
    font-weight: 600;
    color: var(--text-secondary);
    background: var(--surface-1);
    padding: 0.1rem 0.35rem;
    border-radius: 3px;
    border: 1px solid var(--surface-2);
  }

  :global(.arrow) {
    color: var(--text-secondary);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .project-row:hover :global(.arrow) {
    opacity: 1;
  }

  @media (max-width: 640px) {
    .project-row {
      flex-direction: column;
      gap: 0.5rem;
    }

    .project-meta {
      flex-direction: row;
      align-items: center;
    }
  }
</style>
