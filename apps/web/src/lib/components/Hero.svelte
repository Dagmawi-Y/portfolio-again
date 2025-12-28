<script>
  import { Motion } from "svelte-motion";
  import { siteConfig } from "$lib/config";
  import ScrambleText from "./ScrambleText.svelte";
  import { ArrowRight } from "lucide-svelte";

  // Mouse parallax logic
  let mouseX = 0;
  let mouseY = 0;

  function handleMouseMove(e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
  }
</script>

<svelte:window on:mousemove={handleMouseMove} />

<section class="hero-container">
  <!-- Interactive Mesh / Abstract Shape Background (Simulated with CSS for performance) -->
  <div class="mesh-grid"></div>

  <div class="content">
    <div class="text-side">
      <div class="meta-tag">
        <span class="dot"></span> Available for hire
      </div>

      <h1 class="headline">
        <span class="block-reveal">Digital Craftsman</span>
        <span class="block-reveal">
          <span class="accent">&</span>
          <ScrambleText text="System Architect" />
        </span>
      </h1>

      <p class="intro">
        Designing interfaces that feel <span class="highlight">organic</span>
        and building backends that remain
        <span class="highlight">invisible</span>.
      </p>

      <div class="cta-group">
        <a href="#work" class="btn-primary">
          See Projects <ArrowRight size={18} />
        </a>
        <a href="mailto:{siteConfig.email}" class="btn-ghost">
          Start a conversation
        </a>
      </div>
    </div>

    <div class="visual-side">
      <!-- Floating Glass Card Composition -->
      <Motion
        animate={{ x: mouseX * -2, y: mouseY * -2 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        let:motion
      >
        <div class="glass-stack" use:motion>
          <div class="card card-1 glass">
            <div class="code-snippet">
              <span class="keyword">const</span>
              <span class="var">nextBigThing</span>
              = <span class="keyword">await</span>
              <span class="func">buildFuture</span>();
            </div>
          </div>
          <div class="card card-2 glass"></div>
          <div class="card card-3 glass"></div>
        </div>
      </Motion>
    </div>
  </div>
</section>

<style>
  .hero-container {
    min-height: 90vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 0 4rem;
  }

  .content {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  /* Typography */
  .meta-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .dot {
    width: 8px;
    height: 8px;
    background: #4ade80;
    border-radius: 50%;
    box-shadow: 0 0 10px #4ade80;
  }

  .headline {
    font-size: clamp(3.5rem, 6vw, 6rem);
    font-weight: 800;
    line-height: 1;
    margin-bottom: 2rem;
    letter-spacing: -0.03em;
  }

  .block-reveal {
    display: block;
  }

  .accent {
    font-family: "Times New Roman", serif;
    font-style: italic;
    font-weight: 400;
    color: var(--accent-1);
  }

  .intro {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 500px;
    line-height: 1.6;
    margin-bottom: 3rem;
  }

  .highlight {
    color: var(--text-primary);
    text-decoration: underline;
    text-decoration-color: var(--accent-2);
    text-underline-offset: 4px;
  }

  /* CTAs */
  .cta-group {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .btn-primary {
    background: var(--text-primary);
    color: var(--bg-color);
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.2s;
  }

  .btn-primary:hover {
    transform: scale(1.02);
  }

  .btn-ghost {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    padding: 1rem;
    border-bottom: 1px solid transparent;
    transition: border 0.2s;
  }

  .btn-ghost:hover {
    border-color: var(--accent-1);
  }

  /* Visual Composition */
  .glass-stack {
    position: relative;
    height: 500px;
    perspective: 1000px;
  }

  .card {
    position: absolute;
    border-radius: 24px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  .card-1 {
    width: 400px;
    height: 250px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-5deg);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(20, 20, 20, 0.6);
  }

  .card-2 {
    width: 350px;
    height: 350px;
    top: 40%;
    left: 60%;
    transform: translate(-50%, -50%) rotate(10deg);
    z-index: 2;
    background: linear-gradient(
      135deg,
      rgba(255, 107, 107, 0.2),
      rgba(0, 0, 0, 0)
    );
  }

  .card-3 {
    width: 200px;
    height: 200px;
    top: 70%;
    left: 30%;
    transform: translate(-50%, -50%) rotate(-15deg);
    z-index: 1;
    background: linear-gradient(
      135deg,
      rgba(78, 205, 196, 0.2),
      rgba(0, 0, 0, 0)
    );
  }

  .code-snippet {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.9rem;
    color: #a1a1aa;
  }

  .keyword {
    color: #c586c0;
  }
  .var {
    color: #9cdcfe;
  }
  .func {
    color: #dcdcaa;
  }

  @media (max-width: 1024px) {
    .content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 6rem;
    }

    .meta-tag,
    .cta-group {
      margin-left: auto;
      margin-right: auto;
    }

    .cta-group {
      justify-content: center;
    }
  }
</style>
