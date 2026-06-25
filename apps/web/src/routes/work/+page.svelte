<script lang="ts">
  import { siteConfig } from "$lib/config";
  import { ArrowUpRight } from "lucide-svelte";

  interface Role {
    role: string;
    period: string;
    description: string | string[];
  }

  interface ExperienceGroup {
    company: string;
    logo: string;
    link?: string;
    roles: Role[];
  }

  const groupedExperience = siteConfig.experience.reduce<ExperienceGroup[]>(
    (acc, current) => {
      const existingGroup = acc.find((g) => g.company === current.company);
      if (existingGroup) {
        existingGroup.roles.push({
          role: current.role,
          period: current.period,
          description: current.description,
        });
      } else {
        acc.push({
          company: current.company,
          logo: current.logo,
          link: current.link,
          roles: [
            {
              role: current.role,
              period: current.period,
              description: current.description,
            },
          ],
        });
      }
      return acc;
    },
    []
  );
</script>

<div class="work-page">
  <header class="page-header">
    <h1 class="title">Work</h1>
    <p class="subtitle">Projects, experience, education, and code.</p>
  </header>

  <!-- PROJECTS -->
  <section class="section">
    <h2 class="section-label">Projects</h2>
    <div class="list">
      {#each siteConfig.projects as project}
        <a href={project.link} class="row" target="_blank" rel="noopener noreferrer">
          <div class="row-main">
            <h3 class="row-title">{project.title}</h3>
            <p class="row-desc">{project.description}</p>
            <div class="row-tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
          </div>
          <div class="row-meta">
            <span class="meta-stat">{project.stats}</span>
            <ArrowUpRight size={14} class="row-arrow" />
          </div>
        </a>
      {/each}
    </div>
  </section>

  <!-- CAREER -->
  <section class="section">
    <h2 class="section-label">Experience</h2>
    <div class="list">
      {#each groupedExperience as group}
        {#if group.roles.length === 1}
          {@const job = group.roles[0]}
          <div class="row">
            <div class="row-main">
              <div class="row-header">
                {#if group.logo}
                  <img src={group.logo} alt={group.company} class="logo" />
                {/if}
                <div>
                  <h3 class="row-title">{job.role}</h3>
                  <span class="row-sub">{group.company}</span>
                </div>
              </div>
              <span class="row-period">{job.period}</span>
              {#if job.description}
                <div class="row-body">
                  {#if Array.isArray(job.description)}
                    <ul class="bullets">
                      {#each job.description as point}
                        <li>{point}</li>
                      {/each}
                    </ul>
                  {:else}
                    <p class="row-desc">{job.description}</p>
                  {/if}
                </div>
              {/if}
            </div>
          </div>
        {:else}
          <div class="row">
            <div class="row-main">
              <div class="row-header">
                {#if group.logo}
                  <img src={group.logo} alt={group.company} class="logo" />
                {/if}
                <div>
                  <h3 class="row-title">{group.company}</h3>
                  {#if group.link && group.link !== "#"}
                    <a href={group.link} class="row-link" target="_blank" rel="noopener noreferrer">
                      Website <ArrowUpRight size={10} />
                    </a>
                  {/if}
                </div>
              </div>
              <div class="roles">
                {#each group.roles as role}
                  <div class="role">
                    <span class="role-title">{role.role}</span>
                    <span class="role-period">{role.period}</span>
                    {#if role.description}
                      {#if Array.isArray(role.description)}
                        <ul class="bullets">
                          {#each role.description as point}
                            <li>{point}</li>
                          {/each}
                        </ul>
                      {:else}
                        <p class="row-desc">{role.description}</p>
                      {/if}
                    {/if}
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </section>

  <!-- EDUCATION -->
  <section class="section">
    <h2 class="section-label">Education</h2>
    <div class="list">
      {#each siteConfig.education as edu}
        <div class="row">
          <div class="row-main">
            <div class="row-header">
              {#if edu.logo}
                <img src={edu.logo} alt={edu.school} class="logo" />
              {/if}
              <div>
                <h3 class="row-title">{edu.degree}</h3>
                <span class="row-sub">{edu.school}</span>
              </div>
            </div>
            <span class="row-period">{edu.year}</span>
            {#if edu.description}
              <div class="row-body">
                {#if Array.isArray(edu.description)}
                  <ul class="bullets">
                    {#each edu.description as point}
                      <li>{point}</li>
                    {/each}
                  </ul>
                {:else}
                  <p class="row-desc">{edu.description}</p>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- CERTIFICATES -->
  <section class="section">
    <h2 class="section-label">Certificates</h2>
    <div class="cert-grid">
      {#each siteConfig.certificates as cert}
        <a href={cert.link} class="cert-card" target="_blank" rel="noopener noreferrer">
          <div class="cert-img-wrap">
            <img src={cert.image} alt={cert.name} class="cert-img" />
          </div>
          <div class="cert-info">
            <span class="cert-year">{cert.year}</span>
            <h3 class="cert-name">{cert.name}</h3>
            <span class="cert-issuer">{cert.issuer}</span>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <!-- CODE -->
  <section class="section">
    <h2 class="section-label">Code</h2>
    <div class="list">
      {#each siteConfig.openSource.contributions as item}
        <a href={item.link} class="row" target="_blank" rel="noopener noreferrer">
          <div class="row-main">
            <h3 class="row-title">{item.project}</h3>
            <p class="row-desc">{item.description}</p>
          </div>
          <div class="row-meta">
            <span class="meta-stat">{item.status}</span>
            <ArrowUpRight size={14} class="row-arrow" />
          </div>
        </a>
      {/each}

      {#each siteConfig.openSource.libraries as lib}
        <a href={lib.link} class="row" target="_blank" rel="noopener noreferrer">
          <div class="row-main">
            <h3 class="row-title">{lib.name}</h3>
            <p class="row-desc">{lib.description}</p>
          </div>
          <div class="row-meta">
            <span class="meta-stat">{lib.stats}</span>
            <ArrowUpRight size={14} class="row-arrow" />
          </div>
        </a>
      {/each}

      {#each siteConfig.experiments as exp}
        <a href={exp.link} class="row" target="_blank" rel="noopener noreferrer">
          <div class="row-main">
            <h3 class="row-title">{exp.name}</h3>
            <p class="row-desc">{exp.description}</p>
            <div class="row-tags">
              {#each exp.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
          </div>
          <div class="row-meta">
            <ArrowUpRight size={14} class="row-arrow" />
          </div>
        </a>
      {/each}
    </div>
  </section>
</div>

<style>
  .work-page {
    max-width: 680px;
    margin: 0 auto;
    padding: 6rem 2rem 8rem;
  }

  .page-header {
    margin-bottom: 4rem;
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

  .section {
    margin-bottom: 4rem;
  }

  .section:last-child {
    margin-bottom: 0;
  }

  .section-label {
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent-1);
    margin: 0 0 1.5rem 0;
  }

  .list {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--surface-2);
    text-decoration: none;
    color: inherit;
    transition: padding-left 0.2s;
  }

  .row:first-child {
    border-top: 1px solid var(--surface-2);
  }

  a.row:hover {
    padding-left: 0.5rem;
  }

  .row-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .row-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .logo {
    width: 28px;
    height: 28px;
    border-radius: 4px;
    background: #fff;
    object-fit: contain;
    padding: 2px;
    border: 1px solid var(--surface-2);
    flex-shrink: 0;
  }

  .row-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.01em;
    transition: color 0.2s;
  }

  a.row:hover .row-title {
    color: var(--accent-1);
  }

  .row-sub {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    opacity: 0.8;
  }

  .row-link {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--accent-1);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.15rem;
    opacity: 0.7;
  }

  .row-link:hover {
    opacity: 1;
  }

  .row-period {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    opacity: 0.5;
  }

  .row-desc {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
  }

  .row-body {
    margin-top: 0.25rem;
  }

  .row-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-top: 0.15rem;
  }

  .tag {
    font-size: 0.6rem;
    font-weight: 600;
    color: var(--text-secondary);
    background: var(--surface-1);
    padding: 0.1rem 0.3rem;
    border-radius: 3px;
    border: 1px solid var(--surface-2);
  }

  .row-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.4rem;
    flex-shrink: 0;
  }

  .meta-stat {
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--text-secondary);
    opacity: 0.6;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  :global(.row-arrow) {
    color: var(--text-secondary);
    opacity: 0;
    transition: opacity 0.2s;
  }

  a.row:hover :global(.row-arrow) {
    opacity: 1;
  }

  .roles {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
    padding-left: 0.5rem;
    border-left: 1px solid var(--surface-2);
  }

  .role {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .role-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .role-period {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    opacity: 0.5;
  }

  .bullets {
    margin: 0.25rem 0 0 0;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    list-style: none;
  }

  .bullets li {
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--text-secondary);
    position: relative;
  }

  .bullets li::before {
    content: "—";
    position: absolute;
    left: -1rem;
    color: var(--accent-1);
    opacity: 0.5;
  }

  .cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.75rem;
  }

  .cert-card {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    border: 1px solid var(--surface-2);
    border-radius: 8px;
    overflow: hidden;
    transition: border-color 0.2s;
  }

  .cert-card:hover {
    border-color: var(--accent-1);
  }

  .cert-img-wrap {
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid var(--surface-2);
  }

  .cert-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .cert-info {
    padding: 0.6rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .cert-year {
    font-size: 0.6rem;
    font-weight: 800;
    color: var(--accent-1);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .cert-name {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  .cert-issuer {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  @media (max-width: 640px) {
    .work-page {
      padding: 4rem 1.5rem 6rem;
    }

    .row {
      flex-direction: column;
      gap: 0.4rem;
    }

    .row-meta {
      flex-direction: row;
      align-items: center;
    }

    .cert-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
