<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import StickyHeader from "$lib/components/StickyHeader.svelte";
  import Career from "$lib/components/Career.svelte";
  import OpenSource from "$lib/components/OpenSource.svelte";
  import { siteConfig } from "$lib/config";

  let activeFilter = "All";

  const categories = [
    "All",
    ...new Set(siteConfig.projects.map((p) => p.category)),
  ];

  $: filteredProjects =
    activeFilter === "All"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === activeFilter);

  $: projectTypes = [...new Set(filteredProjects.map((p) => p.type))].sort(
    (a: string, b: string) => {
      const order: Record<string, number> = {
        Work: 1,
        Community: 2,
        "Side Projects": 3,
      };
      return (order[a] || 99) - (order[b] || 99);
    }
  );
</script>

<svelte:head>
  <title>{siteConfig.name} — {siteConfig.title}</title>
  <meta name="description" content={siteConfig.description} />
</svelte:head>

<main>
  <Hero />

  <section id="work" class="section">
    <div class="container">
      <StickyHeader
        id="work"
        title="Projects"
        subtitle="Selected works and experiments"
      />

      <div class="projects-container">
        {#each projectTypes as type}
          <div class="type-group">
            <h3 class="type-label">{type}</h3>
            <div class="projects-list">
              {#each filteredProjects.filter((p) => p.type === type) as project, i (activeFilter + "-" + type + "-" + project.title)}
                <div class="project-wrapper">
                  <ProjectCard {project} index={i} />
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <Career />

  <OpenSource />
</main>

<style>
  .section {
    padding: 6rem 2rem;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;
    padding-left: 2rem;
  }

  .projects-container::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
      to bottom,
      var(--accent-1) 0%,
      var(--surface-2) 20%,
      var(--surface-2) 80%,
      transparent 100%
    );
    opacity: 0.4;
  }

  .type-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  }

  .type-label {
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--accent-1);
    margin: 0;
    position: relative;
  }

  .type-label::before {
    content: "";
    position: absolute;
    left: -2rem;
    top: 50%;
    width: 8px;
    height: 8px;
    background: var(--bg-color);
    border: 2px solid var(--accent-1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }

  .type-label::after {
    content: "";
    position: absolute;
    left: -2rem;
    top: 50%;
    width: 1.5rem;
    height: 1px;
    background: var(--accent-1);
    opacity: 0.3;
    z-index: 4;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-left: 2rem;
    position: relative;
  }

  .projects-list::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--surface-2);
    opacity: 0.3;
  }

  .project-wrapper {
    opacity: 0;
    transform: translateY(12px);
    animation: fadeSlideIn 0.4s ease forwards;
  }

  @keyframes fadeSlideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 640px) {
    .section {
      padding: 4rem 1.5rem;
    }

    .projects-container {
      gap: 4rem;
      padding-left: 1.5rem;
    }

    .projects-list {
      padding-left: 1.25rem;
    }

    .type-label::before,
    .type-label::after {
      left: -1.5rem;
    }
  }
</style>
