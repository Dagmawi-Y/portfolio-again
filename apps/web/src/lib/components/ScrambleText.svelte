<script>
  import { onMount } from "svelte";

  export let text = "Default Text";
  export let duration = 15000;

  let label = text;
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  onMount(() => {
    let iteration = 0;
    let interval = null;

    const animate = () => {
      interval = setInterval(() => {
        label = text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    animate();

    return () => clearInterval(interval);
  });
</script>

<span class="scramble-text">{label}</span>

<style>
  .scramble-text {
    font-family: "JetBrains Mono", monospace; /* Monospace is key for this effect */
    display: inline-block;
  }
</style>
