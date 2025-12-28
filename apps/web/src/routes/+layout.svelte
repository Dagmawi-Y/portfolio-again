<script>
  import "../app.css";
  import FloatingDock from "$lib/components/FloatingDock.svelte";
  import Grain from "$lib/components/Grain.svelte";
  import { isDark } from "$lib/stores/theme";
</script>

<div class="app-layout" class:dark={$isDark}>
  <div class="background-layer">
    {#if $isDark}
      <!-- Moonlit Fog Pattern -->
      <div
        class="bg-absolute fog"
        style:background-image="radial-gradient(circle at 70% 30%, rgba(255,
        255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 30% 70%,
        rgba(176, 196, 222, 0.15) 0%, transparent 50%), linear-gradient(135deg,
        #2c3e50 0%, #3a506b 25%, #435e79 50%, #516b87 75%, #5f7995 100%)"
        style:background-blend-mode="soft-light, screen, normal"
        style:filter="brightness(1.05) contrast(1.05)"
      ></div>
    {:else}
      <!-- Crystal Maze Pattern -->
      <div
        class="bg-absolute crystal"
        style:background-image="repeating-linear-gradient(60deg, transparent
        0px, transparent 1px, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255,
        0.05) 2px), repeating-linear-gradient(-60deg, transparent 0px,
        transparent 1px, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255,
        0.05) 2px), linear-gradient(60deg, rgba(43, 108, 176, 0.4) 0%, rgba(72,
        126, 176, 0.4) 33%, rgba(95, 142, 176, 0.4) 66%, rgba(116, 157, 176,
        0.4) 100%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2)
        0%, transparent 50%)"
        style:background-blend-mode="overlay, overlay, normal, screen"
        style:animation="crystal-shimmer 15s ease-in-out infinite"
      ></div>
    {/if}
  </div>

  <Grain />

  <FloatingDock />

  <main class="content-area">
    <slot />
  </main>
</div>

<style>
  /* Global Layout */
  .app-layout {
    min-height: 100vh;
    position: relative;
    color: var(--text-primary);
  }

  /* No offset needed for floating dock */
  .content-area {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  /* Backgrounds */
  .background-layer {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .bg-absolute {
    position: absolute;
    inset: 0;
    transition: opacity 0.5s ease;
    background-size: cover;
  }

  /* Dark Mode Styles */
  .fog {
    background-color: #0d0d0d; /* Fallback */
  }

  /* Light Mode Styles */
  .crystal {
    background-color: #f8fafc; /* Fallback */
  }

  @keyframes crystal-shimmer {
    0%,
    100% {
      background-position:
        0% 0%,
        0% 0%,
        0% 0%,
        50% 50%;
      background-size:
        10px 10px,
        10px 10px,
        200% 200%,
        200% 200%;
    }
    50% {
      background-position:
        1px 1px,
        -1px -1px,
        100% 100%,
        50% 50%;
      background-size:
        12px 12px,
        12px 12px,
        200% 200%,
        180% 180%;
    }
  }

  /* Theme Variable Injection */
  .app-layout.dark {
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --surface-1: rgba(30, 41, 59, 0.6);
    --surface-2: rgba(51, 65, 85, 0.4);
    --accent-1: #38bdf8;
  }

  .app-layout:not(.dark) {
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --surface-1: rgba(255, 255, 255, 0.85);
    --surface-2: rgba(255, 255, 255, 0.5);
    --accent-1: #0ea5e9;
  }
</style>
