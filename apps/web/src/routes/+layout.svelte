<script>
  import "../app.css";
  import FloatingDock from "$lib/components/FloatingDock.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { isDark } from "$lib/stores/theme";
</script>

<div class="app-layout" class:dark={$isDark}>
  <FloatingDock />

  <main class="content-area">
    <slot />
  </main>

  <Footer />
</div>

<style>
  .app-layout {
    min-height: 100vh;
    position: relative;
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .content-area {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  .app-layout.dark {
    background-color: var(--bg-color);
    --bg-color: #0a0a0a;
    --text-primary: #e5e5e5;
    --text-secondary: #737373;
    --surface-1: rgba(255, 255, 255, 0.05);
    --surface-2: rgba(255, 255, 255, 0.08);
    --accent-1: #a3a3a3;
  }

  .app-layout:not(.dark) {
    background-color: #fafafa;
    --bg-color: #fafafa;
    --text-primary: #171717;
    --text-secondary: #525252;
    --surface-1: rgba(0, 0, 0, 0.03);
    --surface-2: rgba(0, 0, 0, 0.06);
    --accent-1: #404040;
  }
</style>
