<script>
  import { Motion } from "svelte-motion";
  import { ArrowUpRight } from "lucide-svelte";

  export let project;
  export let index = 0;
</script>

<div class="project-row-wrapper">
  <Motion
    whileHover={{ x: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    let:motion
  >
    <a
      href={project.link}
      class="project-row"
      target="_blank"
      rel="noopener noreferrer"
      use:motion
    >
      <div class="project-header">
        <div class="image-preview">
          <img src={project.image} alt={project.title} class="project-img" />
          <div class="stats-badge">{project.stats}</div>
        </div>

        <div class="content-group">
          <div class="meta-label">
            <span class="category">{project.category}</span>
            <span class="dot">·</span>
            <span class="type">{project.type}</span>
          </div>

          <h3 class="title">{project.title}</h3>

          <div class="project-body">
            <p class="description">{project.description}</p>
          </div>

          <div class="footer-meta">
            <div class="tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>

            <div class="link-affordance">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </a>
  </Motion>
</div>

<style>
  .project-row-wrapper {
    position: relative;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--surface-2);
    transition: all 0.3s ease;
  }

  .project-row-wrapper:hover {
    border-bottom-color: var(--accent-1);
  }

  .project-row {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    position: relative;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .project-header {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 3rem;
    align-items: flex-start;
  }

  .image-preview {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    border-radius: 12px;
    overflow: hidden;
    background: var(--surface-2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) brightness(0.85);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .project-row:hover .image-preview {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .project-row:hover .project-img {
    filter: grayscale(0%) brightness(1);
    transform: scale(1.1);
  }

  .stats-badge {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    color: white;
    padding: 0.35rem 0.75rem;
    border-radius: 8px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border: 1px solid rgba(255, 255, 255, 0.1);
    opacity: 0.9;
    z-index: 2;
  }

  .content-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .meta-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent-1);
    opacity: 0.8;
  }

  .dot {
    opacity: 0.3;
    color: var(--text-primary);
  }

  .type {
    color: var(--text-secondary);
  }

  .title {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.04em;
    line-height: 1.1;
    transition: all 0.3s ease;
  }

  .project-row:hover .title {
    color: var(--accent-1);
    transform: translateX(4px);
  }

  .project-body {
    max-width: 500px;
    margin-top: 0.5rem;
    padding-left: 0.25rem;
    border-left: 1px solid transparent;
    transition: all 0.3s ease;
  }

  .project-row:hover .project-body {
    border-left-color: var(--accent-1);
    padding-left: 1rem;
  }

  .description {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
    transition: all 0.3s ease;
  }

  .project-row:hover .description {
    color: var(--text-primary);
  }

  .footer-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px dashed var(--surface-2);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--text-secondary);
    background: var(--surface-1);
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    border: 1px solid var(--surface-2);
    transition: all 0.2s ease;
  }

  .project-row:hover .tag {
    border-color: var(--accent-1);
    color: var(--text-primary);
  }

  .link-affordance {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .project-row:hover .link-affordance {
    background: var(--text-primary);
    color: var(--bg-color);
    border-color: var(--text-primary);
    transform: rotate(0deg) scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 850px) {
    .project-header {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .image-preview {
      aspect-ratio: 16 / 9;
    }

    .title {
      font-size: 2rem;
    }
  }
</style>
