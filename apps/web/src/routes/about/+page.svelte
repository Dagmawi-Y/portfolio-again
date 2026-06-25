<script lang="ts">
  import SEO from "$lib/components/SEO.svelte";
</script>

<SEO title="About" description="How I got here and what I care about." />


<div class="page">
  <header class="page-header">
    <h1 class="title">About</h1>
    <p class="subtitle">How I got here and what I care about.</p>
  </header>

  <article class="content">
    <p>
      I am Dagmawi Yohannes, a software engineer and developer based in Addis Ababa, Ethiopia. As an Ethiopian developer, I build mobile and web applications that people enjoy using.
    </p>

    <p>
      I started writing code to build tools that did not exist. Today, I focus
      on performance, precise design, and responsiveness, striving to be the best developer in Ethiopia by crafting elegant, high-impact solutions.
    </p>

    <p>
      I have built banking super-apps, streaming systems, and remittance
      platforms moving more than a million dollars daily. I also founded
      <strong>Edopia</strong>, an adaptive learning platform, worked on projects with <strong>Adot Technologies</strong>, and founded
      <strong>Techtonic Tribe</strong>, a university tech community.
    </p>

    <p>
      I design local-first systems and on-device AI models that protect user
      privacy. In my view, engineers build better software when they use their
      own products daily.
    </p>

    <p>
      Outside of coding, I study systems design, listen to Hans Zimmer, and
      speak about simple software architecture.
    </p>

    <div class="details">
      <div class="detail-row">
        <span class="detail-label">Focus</span>
        <span class="detail-value">React Native, Architecture, Performance</span
        >
      </div>
      <div class="detail-row">
        <span class="detail-label">Based in</span>
        <span class="detail-value">Addis Ababa, Ethiopia</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Currently</span>
        <span class="detail-value">Building Edopia</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Available for</span>
        <span class="detail-value"
          >Collaboration, advisory, interesting problems</span
        >
      </div>
    </div>
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

  .content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
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

  .details {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--surface-2);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .detail-row {
    display: flex;
    gap: 1.5rem;
    font-size: 0.9rem;
  }

  .detail-label {
    font-weight: 700;
    color: var(--text-primary);
    min-width: 100px;
  }

  .detail-value {
    color: var(--text-secondary);
  }

  @media (max-width: 640px) {
    .page {
      padding: 4rem 1.5rem 6rem;
    }

    .detail-row {
      flex-direction: column;
      gap: 0.15rem;
    }
  }
</style>
