<script>
  import { Motion } from "svelte-motion";
  import { Mic, Video, Headphones, Music, BookOpen, Film } from "lucide-svelte";

  // This data usually goes into sites/config.ts but keeping inline for demo logic
  const interests = [
    {
      title: "Talks",
      icon: Mic,
      items: [
        {
          label: "Svelte Summit 2024",
          sub: "The Future of Simplicity",
          link: "#",
        },
        { label: "Local Meetup", sub: "Why Local-First Matters", link: "#" },
      ],
    },
    {
      title: "Podcasts",
      icon: Headphones,
      items: [
        { label: "Syntax.fm", sub: "Ep 720: Web Assembly", link: "#" },
        { label: "Shoptalk Show", sub: "Design Systems", link: "#" },
      ],
    },
    {
      title: "Reading",
      icon: BookOpen,
      items: [
        { label: "Clean Code", sub: "Robert C. Martin", link: "#" },
        { label: "Refactoring UI", sub: "Adam Wathan", link: "#" },
      ],
    },
    {
      title: "Listening",
      icon: Music,
      items: [
        { label: "Interstellar OST", sub: "Hans Zimmer", link: "#" },
        { label: "Random Access Memories", sub: "Daft Punk", link: "#" },
      ],
    },
  ];
</script>

<section class="section">
  <div class="container">
    <h2 class="section-title">Inputs & Outputs</h2>

    <div class="grid">
      {#each interests as category, i}
        <Motion
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          let:motion
        >
          <div class="card glass" use:motion>
            <div class="card-header">
              <span class="icon-box">
                <svelte:component this={category.icon} size={20} />
              </span>
              <h3>{category.title}</h3>
            </div>

            <ul class="list">
              {#each category.items as item}
                <li>
                  <a href={item.link} class="item-link">
                    <span class="label">{item.label}</span>
                    <span class="sub">{item.sub}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </Motion>
      {/each}
    </div>
  </div>
</section>

<style>
  .section {
    padding: 6rem 2rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .card {
    padding: 1.5rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--surface-2);
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .icon-box {
    width: 36px;
    height: 36px;
    background: var(--surface-2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: var(--accent-3);
  }

  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .item-link {
    text-decoration: none;
    display: block;
    transition: transform 0.2s;
  }

  .item-link:hover {
    transform: translateX(4px);
  }

  .label {
    display: block;
    color: var(--text-primary);
    font-weight: 500;
  }

  .sub {
    display: block;
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-top: 0.2rem;
  }
</style>
