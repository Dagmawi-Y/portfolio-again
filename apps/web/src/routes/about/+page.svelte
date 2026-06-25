<svelte:head>
  <title>About — Dagmawi Yohannes</title>
  <meta name="description" content="How I got here and what I care about." />
</svelte:head>

<div class="page">
  <header class="page-header">
    <h1 class="title">About</h1>
    <p class="subtitle">How I got here and what I care about.</p>
  </header>

  <article class="content">
    <p>
      I'm Dagmawi — a software engineer based in Addis Ababa, Ethiopia. I build
      mobile apps that people actually enjoy using.
    </p>

    <p>
      I started writing code because I was impatient. I wanted things to exist
      that didn't, and I didn't want to wait for someone else to build them.
      That impatience turned into obsession — with performance, with details,
      with making software feel as good as it looks.
    </p>

    <p>
      I've worked on products reaching millions of users — streaming apps,
      banking super-apps, remittance platforms moving $1M+ daily. I founded
      <strong>Edopia</strong>, an AI-driven learning platform for Africa, and
      <strong>Techtonic Tribe</strong>, a university tech community that grew
      from a club into a movement.
    </p>

    <p>
      I care about local-first architecture, in-browser AI, and building tools
      that respect people's privacy and attention. I believe the best software is
      built by people who use it themselves.
    </p>

    <p>
      When I'm not coding, I'm reading about systems design, listening to Hans
      Zimmer, or giving talks about simplicity in engineering.
    </p>

    <div class="details">
      <div class="detail-row">
        <span class="detail-label">Focus</span>
        <span class="detail-value">React Native, Architecture, Performance</span>
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
        <span class="detail-value">Collaboration, advisory, interesting problems</span>
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
