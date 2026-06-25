<svelte:head>
  <title>Now — Dagmawi Yohannes</title>
  <meta name="description" content="What I'm focused on right now." />
</svelte:head>

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
        I'm founding and leading development at <strong>Edopia</strong> — we're
        building the future of learning for Africa. Every child deserves
        access to a world-class education, regardless of where they live. We
        combine AI, personalized learning, and locally relevant content to
        create engaging experiences that adapt to each student.
      </p>
      <p>
        Not just another education platform — an ecosystem that empowers
        students to learn better, teachers to teach smarter, and parents to
        participate in their children's journey.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">Learning</h2>
      <p>
        Deep-diving into WebGPU and WASM for running LLMs purely in the browser.
        Also reading about distributed systems — specifically how CRDTs can
        replace traditional databases for collaborative apps.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">Thinking about</h2>
      <p>
        How to make African tech ecosystems self-sustaining. Not just building
        products, but building the people and communities that build the
        products. Techtonic Tribe was the first step — Edopia is the next.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">Could use help with</h2>
      <ul class="list">
        <li>Anyone working on local-first / CRDT infrastructure — I'd love to compare notes</li>
        <li>Educators or parents interested in AI-powered learning for kids</li>
        <li>Engineers in Addis Ababa who want to get involved in open-source</li>
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
