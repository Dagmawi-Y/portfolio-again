<script>
  import Hero from "$lib/components/Hero.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Interests from "$lib/components/Interests.svelte";
  import { siteConfig } from "$lib/config";
</script>

<svelte:head>
  <title>{siteConfig.name} — {siteConfig.title}</title>
  <meta name="description" content={siteConfig.description} />
</svelte:head>

<main>
  <Hero />

  <section id="work" class="section">
    <div class="container">
      <h2 class="section-title">Selected Work</h2>
      <div class="grid">
        {#each siteConfig.projects as project, i}
          <ProjectCard {project} index={i} />
        {/each}
      </div>
    </div>
  </section>

  <div id="lab">
    <Interests />
  </div>
</main>

<style>
  .section {
    padding: 8rem 2rem;
    min-height: 100vh;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .section-title::after {
    content: "";
    height: 1px;
    flex-grow: 1;
    background: var(--surface-2);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
</style>
