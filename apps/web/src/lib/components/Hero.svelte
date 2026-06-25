<script lang="ts">
  import HeroContent from "./hero/HeroContent.svelte";
</script>

<section class="hero">
  <div class="container">
    <HeroContent />
  </div>
</section>

<style>
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
