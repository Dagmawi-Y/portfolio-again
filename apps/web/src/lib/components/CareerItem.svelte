<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  let {
    title,
    subtitle,
    period = undefined,
    description = undefined,
    logo = undefined,
    link = "#",
    showDivider = false,
    isGroup = false,
    roles = [],
  }: {
    title: string;
    subtitle: string;
    period?: string;
    description?: string | string[];
    logo?: string;
    link?: string;
    showDivider?: boolean;
    isGroup?: boolean;
    roles?: Array<{ role: string; period: string; description: string | string[] }>;
  } = $props();
</script>

<div class="item-row-wrapper" class:is-group={isGroup}>
  {#if !isGroup}
    <a href={link} class="item-row" target="_blank" rel="noopener noreferrer">
      <div class="item-header">
        <div class="header-main-group">
          {#if logo}
            <div class="logo-container">
              <img src={logo} alt={subtitle} class="logo-img" />
            </div>
          {/if}
          <div class="title-group">
            <h3 class="title">{title}</h3>
            <span class="subtitle-name">{subtitle}</span>
            {#if period}
              <span class="period">{period}</span>
            {/if}
          </div>
        </div>

        {#if link && link !== "#"}
          <div class="link-circle">
            <ArrowUpRight size={14} />
          </div>
        {/if}
      </div>

      {#if description}
        <div class="item-body">
          {#if Array.isArray(description)}
            <ul class="bullet-list">
              {#each description as point}
                <li class="bullet-point">{point}</li>
              {/each}
            </ul>
          {:else}
            <p class="description-text">{description}</p>
          {/if}
        </div>
      {/if}
    </a>
  {:else}
    <div class="group-container">
      <div class="group-header">
        {#if logo}
          <div class="group-logo-container">
            <img src={logo} alt={title} class="group-logo" />
          </div>
        {/if}
        <div class="group-info">
          <h3 class="group-company-name">{title}</h3>
          {#if link && link !== "#"}
            <a href={link} class="group-link" target="_blank" rel="noopener noreferrer">
              Visit Website <ArrowUpRight size={12} />
            </a>
          {/if}
        </div>
      </div>

      <div class="roles-list">
        {#each roles as role, i}
          <div class="role-item">
            <div class="role-marker">
              <div class="marker-dot"></div>
              {#if i < roles.length - 1}
                <div class="marker-line"></div>
              {/if}
            </div>
            <div class="role-content">
              <div class="role-header">
                <h4 class="role-title">{role.role}</h4>
                <span class="role-period">{role.period}</span>
              </div>
              {#if role.description}
                {#if Array.isArray(role.description)}
                  <ul class="bullet-list">
                    {#each role.description as point}
                      <li class="bullet-point">{point}</li>
                    {/each}
                  </ul>
                {:else}
                  <p class="role-description">{role.description}</p>
                {/if}
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if showDivider}
    <div class="item-divider"></div>
  {/if}
</div>

<style>
  .item-row-wrapper {
    position: relative;
    padding: 0.5rem 0;
  }

  .item-row-wrapper::before {
    content: "";
    position: absolute;
    left: -2rem;
    top: 1.2rem;
    width: 5px;
    height: 5px;
    background: var(--surface-2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    z-index: 5;
    transition: background 0.2s;
  }

  .item-row-wrapper:hover::before {
    background: var(--accent-1);
    opacity: 1;
  }

  .item-row {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    text-decoration: none;
    color: inherit;
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .header-main-group {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    flex: 1;
  }

  .title-group {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    flex: 1;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
    line-height: 1.2;
    transition: color 0.2s;
  }

  .item-row:hover .title {
    color: var(--accent-1);
  }

  .logo-img {
    width: 38px;
    height: 38px;
    border-radius: 6px;
    background: #ffffff;
    object-fit: contain;
    padding: 3px;
    border: 1px solid var(--surface-2);
    flex-shrink: 0;
  }

  .subtitle-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-primary);
    opacity: 0.85;
  }

  .period {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.03em;
    opacity: 0.6;
  }

  .link-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid var(--surface-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    opacity: 0;
    transition: opacity 0.2s;
    flex-shrink: 0;
  }

  .item-row:hover .link-circle {
    opacity: 1;
  }

  .item-body {
    max-width: 600px;
    margin-top: 0.4rem;
    padding-left: 0.25rem;
  }

  .description-text {
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
  }

  .item-divider {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--surface-2);
    opacity: 0.5;
  }

  .group-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.25rem 0;
  }

  .group-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .group-logo-container {
    width: 38px;
    height: 38px;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid var(--surface-2);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
  }

  .group-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .group-info {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .group-company-name {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .group-link {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--accent-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    opacity: 0.8;
  }

  .group-link:hover {
    opacity: 1;
  }

  .roles-list {
    display: flex;
    flex-direction: column;
    padding-left: 19px;
  }

  .role-item {
    display: flex;
    gap: 1.25rem;
    position: relative;
  }

  .role-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 2px;
    flex-shrink: 0;
  }

  .marker-dot {
    width: 8px;
    height: 8px;
    background: var(--surface-2);
    border: 2px solid var(--bg-color);
    border-radius: 50%;
    margin-top: 5px;
    z-index: 2;
    transition: background 0.2s;
  }

  .role-item:hover .marker-dot {
    background: var(--accent-1);
  }

  .marker-line {
    position: absolute;
    top: 13px;
    bottom: -13px;
    width: 2px;
    background: var(--surface-2);
    opacity: 0.4;
    z-index: 1;
  }

  .role-content {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding-bottom: 1.5rem;
    flex: 1;
  }

  .role-item:last-child .role-content {
    padding-bottom: 0.25rem;
  }

  .role-header {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .role-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
  }

  .role-period {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
    opacity: 0.6;
  }

  .role-description {
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0.15rem 0 0;
    max-width: 600px;
  }

  .bullet-list {
    margin: 0.35rem 0 0 0;
    padding-left: 1.1rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .bullet-point {
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.6;
    color: var(--text-secondary);
    position: relative;
  }

  .bullet-point::before {
    content: "•";
    position: absolute;
    left: -1.1rem;
    color: var(--accent-1);
    font-weight: bold;
    opacity: 0.6;
  }

  @media (max-width: 640px) {
    .header-main-group {
      gap: 0.5rem;
    }

    .logo-img {
      width: 32px;
      height: 32px;
    }

    .group-logo-container {
      width: 32px;
      height: 32px;
    }

    .roles-list {
      padding-left: 16px;
    }

    .role-item {
      gap: 1rem;
    }
  }
</style>
