<script>
  import { siteConfig } from "$lib/config";
  import { Briefcase, GraduationCap, Award } from "lucide-svelte";
</script>

<div class="career-wrapper">
  <div class="career-header">
    <h2 class="career-title">Career</h2>
    <div class="divider"></div>
  </div>

  <div class="vertical-layout">
    <!-- EXPERIENCE -->
    <section class="section-group">
      <div class="section-badge">
        <Briefcase size={16} />
        <span>Experience</span>
      </div>

      <div class="timeline">
        {#each siteConfig.experience as job}
          <div class="timeline-item">
            <div class="timeline-line"></div>
            <div class="timeline-dot"></div>
            <div class="job-content">
              <span class="period">{job.period}</span>
              <h3 class="role">{job.role}</h3>
              <span class="company">at {job.company}</span>
              <p class="desc">{job.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- EDUCATION -->
    <section class="section-group">
      <div class="section-badge">
        <GraduationCap size={16} />
        <span>Education</span>
      </div>

      <div class="simple-list">
        {#each siteConfig.education as edu}
          <div class="simple-item">
            <span class="year">{edu.year}</span>
            <h3 class="main-text">{edu.degree}</h3>
            <span class="sub-text">{edu.school}</span>
          </div>
        {/each}
      </div>
    </section>

    <!-- CERTIFICATES -->
    <section class="section-group">
      <div class="section-badge">
        <Award size={16} />
        <span>Certificates</span>
      </div>

      <div class="simple-list">
        {#each siteConfig.certificates as cert}
          <a href={cert.link} class="simple-item link-item" target="_blank">
            <span class="year">{cert.year}</span>
            <h3 class="main-text">{cert.name}</h3>
            <span class="sub-text">{cert.issuer}</span>
          </a>
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  .career-wrapper {
    padding: 0 2rem 8rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .career-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .career-title {
    font-size: 4rem;
    font-weight: 900;
    margin: 0;
    letter-spacing: -0.05em;
    color: var(--text-primary);
    line-height: 1;
  }

  .divider {
    flex: 1;
    height: 1px;
    background: var(--surface-2);
  }

  /* Single Column Stack */
  .vertical-layout {
    display: flex;
    flex-direction: column;
    gap: 6rem; /* Good spacing between major blocks */
  }

  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    border-radius: 100px;
    margin-bottom: 3rem;
    color: var(--text-secondary);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* TIMELINE */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding-left: 0.5rem; /* Slight indentation */
  }

  .timeline-item {
    position: relative;
    padding-left: 2.5rem;
  }

  .timeline-line {
    position: absolute;
    left: 3px;
    top: 0.5rem;
    bottom: -4.5rem;
    width: 2px;
    background: var(--surface-2);
  }

  .timeline-item:last-child .timeline-line {
    display: none;
  }

  .timeline-dot {
    position: absolute;
    left: 0;
    top: 0.6rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent-1);
    box-shadow: 0 0 0 4px var(--bg-color); /* Creates gap effect */
  }

  .period {
    font-size: 0.8rem;
    font-family: inherit;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: block;
    margin-bottom: 0.5rem;
  }

  .role {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-primary);
    margin: 0 0 0.25rem 0;
  }

  .company {
    font-size: 1.1rem;
    color: var(--text-secondary);
    font-weight: 500;
  }

  .desc {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    max-width: 650px;
  }

  /* Simple Lists */
  .simple-list {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .simple-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-decoration: none;
    transition: transform 0.2s;
  }

  .link-item:hover {
    transform: translateX(4px);
  }

  .link-item:hover .main-text {
    color: var(--accent-1);
  }

  .year {
    font-size: 0.8rem;
    color: var(--text-secondary);
    font-weight: 600;
    opacity: 0.6;
  }

  .main-text {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  .sub-text {
    font-size: 1rem;
    color: var(--text-secondary);
  }
</style>
