<div class="grain"></div>

<style>
  .grain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    /* 
      User-provided Grain Image.
      Served from static folder: /grain-bg.jpg
    */
    background-image: url("/grain-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    opacity: 0.15;
    mix-blend-mode: overlay;
  }
</style>
