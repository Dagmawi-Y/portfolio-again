<script lang="ts">
  import { siteConfig } from "$lib/config";
  import StickyHeader from "./StickyHeader.svelte";
  import { Package, FlaskConical, ArrowUpRight, Terminal, GitBranch, Box } from "lucide-svelte";
</script>

<div class="os-wrapper">
  <StickyHeader id="work" title="Code" />

  <div class="vertical-layout">
    <div class="main-spine"></div>

    <section class="section-group">
      <div class="section-label">
        <GitBranch size={14} />
        <span>Contributions</span>
      </div>

      <div class="section-content">
        <div class="workbench">
          <div class="workbench-header">
            <div class="window-controls">
              <span class="dot-red"></span>
              <span class="dot-yellow"></span>
              <span class="dot-green"></span>
            </div>
            <div class="tab">
              <Terminal size={11} />
              <span>contributions.sh</span>
            </div>
          </div>

          <div class="workbench-body code-grid">
            {#each siteConfig.openSource.contributions as item, i}
              <a href={item.link} class="code-block" target="_blank">
                <div class="block-num">0{i + 1}</div>
                <div class="block-content">
                  <div class="block-top">
                    <span class="repo-id">{item.project}</span>
                    <span class="status-pill {item.status.toLowerCase().replace(/\s/g, '-')}">{item.status}</span>
                  </div>
                  <p class="summary">{item.description}</p>
                  <div class="block-footer">
                    <span class="git-info">pinned</span>
                    <ArrowUpRight size={12} class="arrow" />
                  </div>
                </div>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <section class="section-group">
      <div class="section-label">
        <Package size={14} />
        <span>Libraries</span>
      </div>

      <div class="section-content">
        <div class="workbench">
          <div class="workbench-header">
            <div class="tab">
              <Box size={11} />
              <span>registry.json</span>
            </div>
          </div>
          <div class="workbench-body lib-list">
            {#each siteConfig.openSource.libraries as lib}
              <a href={lib.link} class="lib-entry" target="_blank">
                <div class="lib-icon-sq">
                  <Package size={14} />
                </div>
                <div class="lib-main">
                  <div class="lib-row-top">
                    <span class="name">{lib.name}</span>
                  </div>
                  <p class="desc">{lib.description}</p>
                </div>
                <div class="lib-stat-bubble">{lib.stats}</div>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <section class="section-group">
      <div class="section-label">
        <FlaskConical size={14} />
        <span>Experiments</span>
      </div>

      <div class="section-content">
        <div class="workbench">
          <div class="workbench-header">
            <div class="tab">
              <FlaskConical size={11} />
              <span>research_drafts</span>
            </div>
          </div>
          <div class="workbench-body lab-grid">
            {#each siteConfig.experiments as exp}
              <a href={exp.link} class="lab-item" target="_blank">
                <div class="lab-header">
                  <span class="lab-tag">DRAFT</span>
                </div>
                <h4 class="lab-name">{exp.name}</h4>
                <p class="lab-text">{exp.description}</p>
                <div class="lab-footer">
                  {#each exp.tags as tag}
                    <span class="tech">#{tag}</span>
                  {/each}
                </div>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  .os-wrapper {
    padding: 2rem 2rem 8rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .vertical-layout {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    position: relative;
    padding-left: 2rem;
  }

  .main-spine {
    position: absolute;
    left: 0;
    top: 0.5rem;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
      to bottom,
      var(--accent-1) 0%,
      var(--surface-2) 20%,
      var(--surface-2) 80%,
      transparent 100%
    );
    opacity: 0.4;
  }

  .section-group {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    color: var(--accent-1);
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    position: relative;
  }

  .section-label::before {
    content: "";
    position: absolute;
    left: -2rem;
    top: 50%;
    width: 8px;
    height: 8px;
    background: var(--bg-color);
    border: 2px solid var(--accent-1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }

  .section-label::after {
    content: "";
    position: absolute;
    left: -2rem;
    top: 50%;
    width: 1.5rem;
    height: 1px;
    background: var(--accent-1);
    opacity: 0.3;
  }

  .section-content {
    padding-left: 2rem;
    position: relative;
  }

  .section-content::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--surface-2);
    opacity: 0.3;
  }

  .workbench {
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    border-radius: 10px;
    overflow: hidden;
  }

  .workbench-header {
    height: 38px;
    background: var(--surface-1);
    border-bottom: 1px solid var(--surface-2);
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
    gap: 0.75rem;
  }

  .window-controls {
    display: flex;
    gap: 0.35rem;
  }

  .window-controls span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }

  .dot-red { background: #ff5f56; }
  .dot-yellow { background: #ffbd2e; }
  .dot-green { background: #27c93f; }

  .tab {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0 1rem;
    background: var(--bg-color);
    border-left: 1px solid var(--surface-2);
    border-right: 1px solid var(--surface-2);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.7rem;
    color: var(--accent-1);
    margin-bottom: -1px;
  }

  .workbench-body {
    padding: 1.25rem;
    position: relative;
  }

  .workbench-body::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(var(--surface-2) 1px, transparent 1px);
    background-size: 16px 16px;
    opacity: 0.2;
    pointer-events: none;
  }

  .code-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 0.75rem;
  }

  .code-block {
    display: flex;
    gap: 0.75rem;
    padding: 0.75rem;
    background: var(--bg-color);
    border: 1px solid var(--surface-2);
    border-radius: 6px;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.2s;
  }

  .code-block:hover {
    border-color: var(--accent-1);
  }

  .block-num {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.65rem;
    color: var(--accent-1);
    opacity: 0.4;
  }

  .repo-id {
    display: block;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--text-primary);
    margin-bottom: 0.2rem;
  }

  .status-pill {
    font-size: 0.55rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.1rem 0.35rem;
    border-radius: 3px;
    background: var(--surface-2);
    color: var(--text-secondary);
  }

  .status-pill.merged {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
  }

  .summary {
    font-size: 0.8rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0.4rem 0 0.75rem 0;
  }

  .block-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.65rem;
    color: var(--text-secondary);
    opacity: 0.5;
  }

  .arrow { color: var(--accent-1); }

  .lib-list {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .lib-entry {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.6rem 0.75rem;
    background: var(--bg-color);
    border: 1px solid var(--surface-2);
    border-radius: 6px;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.2s;
  }

  .lib-entry:hover {
    border-color: var(--accent-1);
  }

  .lib-icon-sq {
    width: 32px;
    height: 32px;
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-1);
    flex-shrink: 0;
  }

  .lib-main { flex: 1; }

  .lib-row-top {
    display: flex;
    align-items: baseline;
    gap: 0.4rem;
  }

  .name {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .desc {
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .lib-stat-bubble {
    font-size: 0.6rem;
    font-weight: 700;
    color: var(--accent-1);
    background: var(--surface-1);
    padding: 0.15rem 0.5rem;
    border-radius: 100px;
  }

  .lab-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
  }

  .lab-item {
    background: var(--bg-color);
    border: 1px solid var(--surface-2);
    border-radius: 8px;
    padding: 1rem;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.2s;
  }

  .lab-item:hover {
    border-color: var(--accent-1);
  }

  .lab-tag {
    font-size: 0.55rem;
    font-weight: 800;
    color: var(--accent-1);
    letter-spacing: 0.1rem;
  }

  .lab-name {
    font-size: 1rem;
    font-weight: 700;
    margin: 0.4rem 0;
  }

  .lab-text {
    font-size: 0.8rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0 0 0.75rem;
  }

  .lab-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .tech {
    font-size: 0.55rem;
    font-weight: 600;
    color: var(--text-secondary);
    opacity: 0.5;
  }

  @media (max-width: 640px) {
    .os-wrapper {
      padding: 0 1.5rem 6rem;
    }

    .vertical-layout {
      padding-left: 1.5rem;
    }

    .section-content {
      padding-left: 1.25rem;
    }

    .window-controls {
      display: none;
    }

    .code-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
