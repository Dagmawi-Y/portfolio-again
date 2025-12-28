<script>
  import { Motion } from "svelte-motion";
  import { ExternalLink } from "lucide-svelte";

  export let project;
  export let index = 0;
</script>

<Motion
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ delay: index * 0.1, duration: 0.5 }}
  let:motion
>
  <div class="project-card glass" use:motion>
    <div class="card-content">
      <div class="header">
        <h3 class="title">{project.title}</h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="icon-link"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      <p class="description">{project.description}</p>

      <div class="tags">
        {#each project.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    </div>

    <div class="gradient-overlay {project.color}"></div>
  </div>
</Motion>

<style>
  .project-card {
    border-radius: var(--radius-lg);
    overflow: hidden;
    position: relative;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
  }

  .card-content {
    position: relative;
    z-index: 2;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }

  .icon-link {
    color: var(--text-secondary);
    transition: color 0.2s;
  }

  .icon-link:hover {
    color: var(--text-primary);
  }

  .description {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
  }

  .tag {
    font-size: 0.875rem;
    padding: 0.25rem 0.75rem;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: 1;
    transition: opacity 0.3s;
  }

  .project-card:hover .gradient-overlay {
    opacity: 0.2;
  }

  /* Utility classes mapped from config example */
  .from-blue-400 {
    --tw-gradient-from: #60a5fa;
  }
  .to-purple-500 {
    --tw-gradient-to: #a855f7;
  }
  .from-green-400 {
    --tw-gradient-from: #4ade80;
  }
  .to-cyan-500 {
    --tw-gradient-to: #06b6d4;
  }
  .from-orange-400 {
    --tw-gradient-from: #fb923c;
  }
  .to-red-500 {
    --tw-gradient-to: #ef4444;
  }

  .gradient-overlay[class*="from-"] {
    background-image: linear-gradient(
      to bottom right,
      var(--tw-gradient-from),
      var(--tw-gradient-to, rgba(0, 0, 0, 0))
    );
  }
</style>
