<script>
  import { isDark } from "$lib/stores/theme";
  import {
    Home,
    Briefcase,
    FlaskConical,
    BookOpen,
    Mail,
    Sun,
    Moon,
  } from "lucide-svelte";
  import { Motion } from "svelte-motion";

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Briefcase, label: "Work", href: "/#work" },
    { icon: FlaskConical, label: "Lab", href: "/#lab" },
    { icon: BookOpen, label: "Notes", href: "/blog" },
    { icon: Mail, label: "Contact", href: "mailto:hello@example.com" },
  ];
</script>

<aside class="vertical-nav">
  <div class="nav-group">
    {#each navItems as item}
      <a href={item.href} class="nav-item group" aria-label={item.label}>
        <div class="icon-container">
          <svelte:component this={item.icon} size={24} strokeWidth={1.5} />
        </div>

        <!-- Tooltip -->
        <span class="tooltip">{item.label}</span>
      </a>
    {/each}
  </div>
</aside>

<style>
  .vertical-nav {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    z-index: 50;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(0, 0, 0, 0.1); /* Slight tint just to catch events */
    backdrop-filter: blur(2px);
  }

  .nav-group,
  .bottom-group {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .nav-item {
    position: relative;
    color: var(--text-secondary);
    transition: color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
  }

  .nav-item:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.05);
  }

  /* Active state logic would require page store, skipping for simplicity but hover is enough */

  .tooltip {
    position: absolute;
    left: 60px;
    background: var(--surface-2);
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-10px);
    transition: all 0.2s ease;
    white-space: nowrap;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
  }

  .nav-item:hover .tooltip {
    opacity: 1;
    transform: translateX(0);
  }
</style>
