<script lang="ts">
  import { onMount } from "svelte";
  import { stickyObserver } from "$lib/actions/sticky";
  import { activeSection } from "$lib/stores/ui";
  import HeroContent from "./hero/HeroContent.svelte";

  function handleStuck({ isStuck }: { isStuck: boolean }) {
    if (isStuck) activeSection.set("home");
  }
</script>

<div
  class="hero-sentinel"
  use:stickyObserver={{ onStuck: handleStuck }}
></div>

<section class="hero">
  <div class="container">
    <HeroContent />
  </div>
</section>

<style>
  .hero-sentinel {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    visibility: hidden;
    pointer-events: none;
  }

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    position: relative;
  }

  .container {
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
  }
</style>
