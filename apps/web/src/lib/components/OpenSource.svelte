<script>
  import { siteConfig } from "$lib/config";
  import {
    GitPullRequest,
    Package,
    FlaskConical,
    ArrowUpRight,
  } from "lucide-svelte";
</script>

<div class="os-wrapper">
  <div class="os-header">
    <h2 class="os-title">Code</h2>
    <div class="divider"></div>
  </div>

  <div class="vertical-layout">
    <!-- CONTRIBUTIONS -->
    <section class="section-group">
      <h3 class="section-label">
        <GitPullRequest size={16} />
        Contributions
      </h3>
      <div class="contrib-list">
        {#each siteConfig.openSource.contributions as item}
          <a href={item.link} class="contrib-item" target="_blank">
            <div class="contrib-header">
              <span class="repo">{item.project}</span>
              <span class="status {item.status.toLowerCase()}"
                >{item.status}</span
              >
            </div>
            <p class="desc">{item.description}</p>
          </a>
        {/each}
      </div>
    </section>

    <!-- LIBRARIES -->
    <section class="section-group">
      <h3 class="section-label">
        <Package size={16} />
        Libraries
      </h3>
      <div class="lib-list">
        {#each siteConfig.openSource.libraries as lib}
          <a href={lib.link} class="lib-item" target="_blank">
            <div class="lib-top">
              <span class="lib-name">{lib.name}</span>
              <span class="lib-stats">{lib.stats}</span>
            </div>
            <p class="desc">{lib.description}</p>
          </a>
        {/each}
      </div>
    </section>

    <!-- EXPERIMENTS -->
    <section class="section-group experiments-group">
      <h3 class="section-label">
        <FlaskConical size={16} />
        Experiments
      </h3>
      <div class="exp-grid">
        {#each siteConfig.experiments as exp}
          <a href={exp.link} class="exp-card" target="_blank">
            <div class="exp-header">
              <span class="exp-name">{exp.name}</span>
              <ArrowUpRight size={14} class="arrow" />
            </div>
            <p class="desc">{exp.description}</p>
            <div class="tags">
              {#each exp.tags as tag}
                <span class="tag">#{tag}</span>
              {/each}
            </div>
          </a>
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  .os-wrapper {
    padding: 0 2rem 8rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .os-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .os-title {
    font-size: 4rem;
    font-weight: 900;
    margin: 0;
    letter-spacing: -0.05em;
    color: var(--text-primary);
    line-height: 1;
  }

  .divider {
    flex: 1;
    height: 1px;
    background: var(--surface-2);
  }

  /* Single Column Layout */
  .vertical-layout {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-secondary);
    margin: 0 0 1.5rem 0;
    opacity: 0.9;
  }

  /* CONTRIBUTIONS */
  .contrib-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contrib-item {
    display: block;
    padding: 1.25rem;
    border-radius: 8px;
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .contrib-item:hover {
    background: var(--surface-2);
    transform: translateX(4px);
    border-color: var(--text-secondary);
  }

  .contrib-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .repo {
    font-family: "JetBrains Mono", monospace; /* Fallback to system monospace if not avail */
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .status {
    font-size: 0.65rem;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .status.merged {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
  }

  /* LIBRARIES */
  .lib-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }

  .lib-item {
    display: block;
    padding: 1.25rem;
    border-radius: 8px;
    background: transparent;
    border: 1px solid var(--surface-2);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .lib-item:hover {
    border-color: var(--text-primary);
    background: var(--surface-1);
  }

  .lib-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.75rem;
  }

  .lib-name {
    font-family: monospace;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .lib-stats {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
  }

  /* EXPERIMENTS */
  .exp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .exp-card {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: linear-gradient(
      135deg,
      var(--surface-1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    border: 1px solid var(--surface-2);
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .exp-card:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: var(--accent-1);
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .exp-name {
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-primary);
  }

  .arrow {
    color: var(--text-secondary);
    transition: transform 0.2s;
  }

  .exp-card:hover .arrow {
    transform: translate(2px, -2px);
    color: var(--accent-1);
  }

  .tags {
    margin-top: auto;
    padding-top: 1.5rem;
    display: flex;
    gap: 0.5rem;
  }

  .tag {
    font-size: 0.75rem;
    font-family: monospace;
    color: var(--accent-1);
    opacity: 0.8;
  }
</style>
