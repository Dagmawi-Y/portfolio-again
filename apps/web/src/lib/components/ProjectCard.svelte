<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  let { project, index = 0 }: { project: any; index?: number } = $props();
</script>

<a
  href={project.link}
  class="project-row"
  target="_blank"
  rel="noopener noreferrer"
>
  <div class="project-header">
    <div class="image-preview">
      <img src={project.image} alt={project.title} class="project-img" />
      {#if project.stats}
        <div class="stats-badge">{project.stats}</div>
      {/if}
    </div>

    <div class="content-group">
      <h3 class="title">{project.title}</h3>
      <p class="description">{project.description}</p>

      <div class="footer-meta">
        <div class="tags">
          {#each project.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
        <div class="link-icon">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  </div>
</a>

<style>
  .project-row {
    display: block;
    padding: 1rem 0;
    border-bottom: 1px solid var(--surface-2);
    text-decoration: none;
    color: inherit;
    transition: border-color 0.2s;
  }

  .project-row:hover {
    border-bottom-color: var(--accent-1);
  }

  .project-header {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1.25rem;
    align-items: flex-start;
  }

  .image-preview {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 6px;
    overflow: hidden;
    background: var(--surface-2);
  }

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) brightness(0.85);
    transition: filter 0.3s;
  }

  .project-row:hover .project-img {
    filter: grayscale(0%) brightness(1);
  }

  .stats-badge {
    position: absolute;
    bottom: 4px;
    right: 4px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.15rem 0.35rem;
    border-radius: 3px;
    font-size: 0.55rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .content-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-top: 0.1rem;
  }

  .title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
    line-height: 1.2;
    transition: color 0.2s;
  }

  .project-row:hover .title {
    color: var(--accent-1);
  }

  .description {
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--text-secondary);
    margin: 0;
  }

  .footer-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
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

  .link-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .project-row:hover .link-icon {
    opacity: 1;
    color: var(--accent-1);
  }

  @media (max-width: 640px) {
    .project-header {
      grid-template-columns: 80px 1fr;
      gap: 1rem;
    }

    .image-preview {
      aspect-ratio: 1;
      height: 80px;
    }

    .title {
      font-size: 1.05rem;
    }

    .description {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 0.8rem;
    }
  }
</style>
