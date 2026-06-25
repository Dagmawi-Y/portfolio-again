<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import {
    Home,
    Briefcase,
    User,
    Clock,
    NotebookPen,
    Sun,
    Moon,
    ArrowLeft,
  } from "lucide-svelte";
  import { isDark } from "$lib/stores/theme";
  import { activeSection } from "$lib/stores/ui";

  const navItems = [
    { id: "home", icon: Home, label: "Home", href: "/" },
    { id: "resume", icon: Briefcase, label: "Resume", href: "/resume" },
    { id: "about", icon: User, label: "About", href: "/about" },
    { id: "now", icon: Clock, label: "Now", href: "/now" },
    { id: "notes", icon: NotebookPen, label: "Notes", href: "/blog" },
  ];

  let visible = true;
  let y = 0;
  let lastScrollY = 0;
  let scrollLockId: string | null = null;
  let scrollLockTimer: ReturnType<typeof setTimeout>;

  $: activeId = (() => {
    const path = $page.url.pathname;
    if (scrollLockId) return scrollLockId;
    if (path.startsWith("/blog")) return "notes";
    if (path === "/about") return "about";
    if (path === "/now") return "now";
    if (path === "/resume") return "resume";
    if (path === "/") {
      if (y < 100) return "home";
      return $activeSection;
    }
    return $activeSection;
  })();

  $: isDeepRoute = $page.url.pathname.split("/").filter(Boolean).length > 1;

  function toggleTheme() {
    $isDark = !$isDark;
  }

  function handleScroll() {
    y = window.scrollY;
    if (y < 100) {
      visible = true;
      if ($activeSection !== "home") {
        activeSection.set("home");
      }
    } else if (y > lastScrollY + 10) {
      visible = false;
    } else if (y < lastScrollY - 10) {
      visible = true;
    }
    lastScrollY = y;
  }

  function handleNavClick(e: MouseEvent, id: string) {
    if (id === "back") {
      e.preventDefault();
      if (typeof window !== "undefined" && window.history.length > 1) {
        window.history.back();
      }
      return;
    }

    scrollLockId = id;
    clearTimeout(scrollLockTimer);
    scrollLockTimer = setTimeout(() => {
      scrollLockId = null;
    }, 1000);

    activeSection.set(id);
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<div
  class="dock-wrapper"
  class:hidden={!visible}
  transition:fly={{ y: 80, duration: 300, easing: cubicOut }}
>
  <nav class="dock">
    {#if isDeepRoute}
      <a
        href="/"
        class="dock-item"
        onclick={(e) => handleNavClick(e, "back")}
        aria-label="Go Back"
      >
        <ArrowLeft size={18} />
        <span class="tooltip">Back</span>
      </a>
      <div class="divider"></div>
    {/if}

    {#each navItems as item}
      {#if !isDeepRoute}
        <a
          href={item.href}
          class="dock-item"
          class:active={activeId === item.id}
          onclick={(e) => handleNavClick(e, item.id)}
          aria-label={item.label}
        >
          <svelte:component this={item.icon} size={18} strokeWidth={activeId === item.id ? 2.5 : 2} />
          {#if activeId === item.id}
            <div class="active-dot"></div>
          {/if}
          <span class="tooltip">{item.label}</span>
        </a>
      {/if}
    {/each}

    {#if !isDeepRoute}
      <div class="divider"></div>
    {/if}

    <button class="dock-item" onclick={toggleTheme} aria-label="Toggle Theme">
      {#if $isDark}
        <Moon size={16} />
      {:else}
        <Sun size={16} />
      {/if}
    </button>
  </nav>
</div>

<style>
  .dock-wrapper {
    position: fixed;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    width: max-content;
  }

  .dock-wrapper.hidden {
    pointer-events: none;
  }

  .dock {
    display: flex;
    align-items: center;
    gap: 0.15rem;
    padding: 0.35rem 0.5rem;
    background: var(--surface-1);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--surface-2);
    border-radius: 14px;
  }

  .dock-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 10px;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s, background 0.2s;
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  .dock-item:hover {
    background: var(--surface-2);
    color: var(--text-primary);
  }

  .dock-item.active {
    color: var(--text-primary);
  }

  .active-dot {
    position: absolute;
    bottom: 4px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--text-primary);
  }

  .divider {
    width: 1px;
    height: 18px;
    background: var(--surface-2);
    margin: 0 0.15rem;
  }

  .tooltip {
    position: absolute;
    top: -36px;
    background: var(--text-primary);
    color: var(--bg-color);
    padding: 0.3rem 0.5rem;
    border-radius: 6px;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0;
    pointer-events: none;
    transform: translateY(4px);
    transition: opacity 0.15s, transform 0.15s;
    white-space: nowrap;
  }

  .dock-item:hover .tooltip {
    opacity: 1;
    transform: translateY(0);
  }
</style>
