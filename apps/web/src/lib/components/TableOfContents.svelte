<script lang="ts">
  import { onMount } from "svelte";

  let { containerSelector = ".markdown-body" }: { containerSelector?: string } = $props();

  interface Heading {
    id: string;
    text: string;
    level: number;
  }

  let headings: Heading[] = $state([]);
  let activeId: string = $state("");

  const extractHeadings = () => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const headingElements = container.querySelectorAll("h2, h3, h4");
    const rawHeadings = Array.from(headingElements);

    headings = rawHeadings.map((el, index) => {
      const text = el.textContent || "";
      const level = parseInt(el.tagName.substring(1));

      if (!el.id) {
        el.id =
          text
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "") +
          "-" +
          index;
      }

      return { id: el.id, text, level };
    });

    updateActiveHeading();
  };

  const updateActiveHeading = () => {
    if (headings.length === 0) return;

    let currentActiveId = "";
    const scrollThreshold = 150;

    for (const heading of headings) {
      const element = document.getElementById(heading.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= scrollThreshold) {
          currentActiveId = heading.id;
        }
      }
    }

    if (!currentActiveId && headings.length > 0) {
      currentActiveId = headings[0].id;
    }

    activeId = currentActiveId;
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  onMount(() => {
    const timer = setTimeout(extractHeadings, 200);
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updateActiveHeading);
    };
  });
</script>

{#if headings.length > 0}
  <nav class="toc-nav">
    <div class="toc-header">On this page</div>
    <div class="toc-tree">
      <ul class="toc-list">
        {#each headings as heading (heading.id)}
          <li
            class="toc-item level-{heading.level}"
            class:active={activeId === heading.id}
          >
            <button
              type="button"
              onclick={() => scrollToHeading(heading.id)}
              class="toc-button"
              style="padding-left: {(heading.level - 2) * 1.1 + 0.5}rem"
            >
              <span class="active-indicator"></span>
              <span class="text">{heading.text}</span>
            </button>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
{/if}

<style>
  .toc-nav {
    padding: 0 0.75rem;
    user-select: none;
  }

  .toc-header {
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-secondary);
    margin-bottom: 1.25rem;
    opacity: 0.4;
  }

  .toc-tree {
    position: relative;
    border-left: 1px solid var(--surface-2);
  }

  .toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .toc-item {
    position: relative;
    display: flex;
    align-items: center;
  }

  .toc-button {
    all: unset;
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    color: var(--text-secondary);
    font-size: 0.75rem;
    line-height: 1.5;
    padding: 0.4rem 0;
    transition: color 0.15s;
    position: relative;
  }

  .active-indicator {
    width: 2px;
    height: 0;
    background: var(--accent-1);
    position: absolute;
    left: -0.5px;
    top: 50%;
    transform: translateY(-50%);
    transition: height 0.25s ease;
    border-radius: 4px;
    z-index: 5;
  }

  .toc-item.active .active-indicator {
    height: 60%;
  }

  .toc-button:hover {
    color: var(--text-primary);
  }

  .toc-item.active .text {
    color: var(--text-primary);
    font-weight: 600;
  }

  .text {
    transition: color 0.15s;
  }

  @media (max-width: 1200px) {
    .toc-nav {
      display: none;
    }
  }
</style>
