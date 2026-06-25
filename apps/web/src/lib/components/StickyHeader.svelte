<script lang="ts">
  import { stickyObserver, type StickyDetail } from "$lib/actions/sticky";
  import { activeSection } from "$lib/stores/ui";

  let {
    id = "",
    title = "",
    subtitle = "",
    compact = false,
    onstuck = undefined,
  }: {
    id?: string;
    title?: string;
    subtitle?: string;
    compact?: boolean;
    onstuck?: (detail: StickyDetail) => void;
  } = $props();

  let isStuck = $state(false);

  function handleStuck(detail: StickyDetail) {
    isStuck = detail.isStuck;
    if (isStuck && id) {
      activeSection.set(id);
    }
    if (onstuck) onstuck(detail);
  }
</script>

<div
  class="sticky-sentinel"
  use:stickyObserver={{ sectionId: id, onStuck: handleStuck }}
></div>

<div class="sticky-header" class:is-stuck={isStuck} class:compact>
  <div class="content">
    <div class="title-group">
      <div class="normal-title">
        <h2 class="section-title">{title}</h2>
        {#if subtitle}
          <p class="section-subtitle">{subtitle}</p>
        {/if}
      </div>

      <div class="stuck-title">
        <h2 class="section-title stuck-version">{title}</h2>
      </div>
    </div>
  </div>
</div>

<style>
  .sticky-sentinel {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    opacity: 0;
    pointer-events: none;
  }

  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    pointer-events: none;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    pointer-events: auto;
  }

  .title-group {
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;
    position: relative;
  }

  .normal-title {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .is-stuck .normal-title {
    opacity: 0;
    pointer-events: none;
  }

  .stuck-title {
    position: absolute;
    left: -16rem;
    top: 3rem;
    width: 13rem;
    text-align: right;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }

  .is-stuck .stuck-title {
    opacity: 1;
    pointer-events: auto;
    transition-delay: 0.15s;
  }

  .compact .title-group {
    padding-bottom: 1rem;
  }

  .section-title {
    font-size: 2.25rem;
    font-weight: 800;
    margin: 0;
    letter-spacing: -0.04em;
    color: var(--text-primary);
    line-height: 1.2;
  }

  .compact .section-title {
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-secondary);
  }

  .stuck-version {
    font-size: 1rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent-1);
  }

  .compact .stuck-version {
    font-size: 0.8rem;
    color: var(--text-primary);
    opacity: 0.7;
    letter-spacing: 0.15em;
  }

  .section-subtitle {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 0.4rem 0 0 0;
    opacity: 0.7;
  }

  @media (max-width: 1400px) {
    .sticky-header {
      position: relative;
    }

    .sticky-header.is-stuck {
      background: none;
    }

    .is-stuck .title-group {
      position: static;
      padding-bottom: 1.5rem;
      flex-direction: column;
      gap: 0.2rem;
    }

    .is-stuck .section-title {
      font-size: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      text-transform: none;
      color: var(--text-primary);
      opacity: 1;
    }

    .is-stuck.compact .section-title {
      font-size: 0.65rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--text-secondary);
    }

    .stuck-title {
      display: none;
    }

    .normal-title,
    .is-stuck .normal-title {
      opacity: 1;
      pointer-events: auto;
    }

    .is-stuck .section-subtitle {
      display: block;
      opacity: 0.7;
    }
  }

  @media (max-width: 640px) {
    .section-title,
    .is-stuck .section-title {
      font-size: 1.75rem;
    }

    .compact .section-title,
    .is-stuck.compact .section-title {
      font-size: 0.65rem;
    }
  }
</style>
