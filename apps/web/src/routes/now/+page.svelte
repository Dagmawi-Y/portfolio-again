<script lang="ts">
  import SEO from "$lib/components/SEO.svelte";
</script>

<SEO title="Now" description="What I'm focused on right now." />


<div class="page">
  <header class="page-header">
    <h1 class="title">Now</h1>
    <p class="subtitle">What I'm focused on right now.</p>
    <p class="updated">Last updated June 2026</p>
  </header>

  <article class="content">
    <section class="section">
      <h2 class="section-title">Building</h2>
      <p>
        I am building <strong>Edopia</strong>, an adaptive learning platform for
        students in Africa. We use on-device AI to personalize lessons, matching
        the curriculum and pace of individual students. This helps teachers
        track progress and lets parents support their children's schoolwork.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">Learning</h2>
      <p>
        I am studying WebGPU and WebAssembly to run language models in the
        browser. I am also researching distributed systems, focusing on how
        conflict-free replicated data types (CRDTs) can replace databases in
        collaborative applications.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">Thinking about</h2>
      <p>
        I want to help build sustainable tech communities in Addis Ababa. With
        Techtonic Tribe, I started a university group for peer learning. Now
        with Edopia, I want to create educational tools that foster technical
        curiosity from an early age.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">Could use help with</h2>
      <ul class="list">
        <li>
          Engineers working on local-first or CRDT infrastructure to compare
          notes
        </li>
        <li>
          Educators and parents interested in testing on-device learning tools
        </li>
        <li>
          Software developers in Addis Ababa who want to contribute to
          open-source projects
        </li>
      </ul>
    </section>
  </article>
</div>

<style>
  .page {
    max-width: 640px;
    margin: 0 auto;
    padding: 6rem 2rem 8rem;
  }

  .page-header {
    margin-bottom: 3rem;
  }

  .title {
    font-size: 2.25rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0 0 0.5rem 0;
    color: var(--text-primary);
  }

  .subtitle {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .updated {
    font-size: 0.75rem;
    color: var(--text-secondary);
    opacity: 0.5;
    margin: 0.75rem 0 0 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .section-title {
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent-1);
    margin: 0;
  }

  .content p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin: 0;
  }

  .content strong {
    color: var(--text-primary);
    font-weight: 600;
  }

  .list {
    margin: 0;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .list li {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  @media (max-width: 640px) {
    .page {
      padding: 4rem 1.5rem 6rem;
    }
  }
</style>
