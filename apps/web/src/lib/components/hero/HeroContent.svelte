<script lang="ts">
  import SocialLinks from "./SocialLinks.svelte";
</script>

<div class="content">
  <h1 class="name">Dagmawi Yohannes</h1>

  <p class="role">Software engineer in Addis Ababa, Ethiopia</p>

  <p class="bio">
    I build mobile apps with React Native. Currently founding
    <a href="https://getedopia.com">Edopia</a> — an AI-driven learning platform for
    Africa.
  </p>

  <SocialLinks />
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .name {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.03em;
    color: var(--text-primary);
  }

  .role {
    font-size: 1rem;
    color: var(--text-secondary);
    margin: 0 0 1.5rem 0;
  }

  .bio {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    max-width: 440px;
    margin: 0 0 2rem 0;
  }

  .bio a {
    color: var(--text-primary);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: var(--surface-2);
    transition: text-decoration-color 0.2s;
  }

  .bio a:hover {
    text-decoration-color: var(--text-primary);
  }

  @media (max-width: 640px) {
    .name {
      font-size: 2rem;
    }

    .bio {
      font-size: 0.9rem;
    }
  }
</style>
