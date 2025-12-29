<script>
  import { Motion } from "svelte-motion";
  import { ArrowUpRight } from "lucide-svelte";

  export let title;
  export let subtitle;
  export let period;
  export let description = undefined;
  export let logo = undefined;
  export let link = "#";
  export let showDivider = false;
</script>

<div class="item-row-wrapper">
  <a href={link} class="item-row" target="_blank" rel="noopener noreferrer">
    <div class="item-header">
      <div class="title-group">
        <h3 class="title">{title}</h3>
        <div class="subtitle-info">
          {#if logo}
            <img src={logo} alt={subtitle} class="logo-img" />
          {/if}
          <span class="subtitle-name">{subtitle}</span>
        </div>
        <span class="period">{period}</span>
      </div>

      <div class="meta-group">
        {#if link && link !== "#"}
          <div class="link-circle">
            <ArrowUpRight size={14} />
          </div>
        {/if}
      </div>
    </div>

    {#if description}
      <div class="item-body">
        <p class="description-text">{description}</p>
      </div>
    {/if}
  </a>

  {#if showDivider}
    <div class="item-divider"></div>
  {/if}
</div>

<style>
  .item-row-wrapper {
    position: relative;
    padding: 0.75rem 0;
  }

  /* Structural Indicator Dot (PKM Style) */
  .item-row-wrapper::before {
    content: "";
    position: absolute;
    left: -2rem;
    top: 1.4rem;
    width: 6px;
    height: 6px;
    background: var(--surface-2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    transition: all 0.3s ease;
    z-index: 5;
  }

  .item-row-wrapper:hover::before {
    background: var(--accent-1);
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.5);
    box-shadow: 0 0 8px var(--accent-1);
  }

  .item-row {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    text-decoration: none;
    color: inherit;
    position: relative;
    padding-bottom: 0.25rem;
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .title-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
  }

  .title {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.03em;
    line-height: 1.2;
    transition: all 0.3s ease;
  }

  .item-row:hover .title {
    color: var(--accent-1);
  }

  .subtitle-info {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    transition: all 0.3s ease;
  }

  .item-row:hover .subtitle-info {
    color: var(--text-primary);
  }

  .logo-img {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: var(--surface-1);
    transition: all 0.3s ease;
  }

  .item-row:hover .logo-img {
    transform: scale(1.15);
  }

  .subtitle-name {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
    opacity: 0.9;
  }

  .meta-group {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 1.8rem;
  }

  .period {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--text-secondary);
    letter-spacing: 0.05em;
    white-space: nowrap;
    opacity: 0.6;
    transition: all 0.3s ease;
  }

  .item-row:hover .period {
    opacity: 0.9;
  }

  .link-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid var(--surface-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 0;
    transform: scale(0.8);
  }

  .item-row:hover .link-circle {
    opacity: 1;
    transform: scale(1);
    background: var(--text-primary);
    color: var(--bg-color);
    border-color: var(--text-primary);
  }

  .item-body {
    max-width: 650px;
    margin-top: 0.6rem;
    padding-left: 0.25rem;
    border-left: 1px solid transparent;
    transition: all 0.3s ease;
  }

  .item-row:hover .item-body {
    border-left-color: var(--accent-1);
    padding-left: 0.75rem;
  }

  .description-text {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
    transition: all 0.3s ease;
  }

  .item-row:hover .description-text {
    color: var(--text-primary);
  }

  :global(.dark) .description-text {
    color: var(--text-secondary);
  }

  :global(.dark) .item-row:hover .description-text {
    color: var(--text-primary);
  }

  .item-divider {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }

  :global(.dark) .item-divider {
    background: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 640px) {
    .item-header {
      flex-direction: column;
      gap: 1rem;
    }
    .meta-group {
      align-items: flex-start;
      order: -1;
    }
    .title {
      font-size: 1.25rem;
    }
  }
</style>
