<script lang="ts">
  import Email from "./Email.svelte";
  import Link from "./Link.svelte";
  import Theme from "./Theme.svelte";

  function reload() {
    window.location.reload();
  }
</script>

<svelte:head>
  <html lang="en" />
  <title>Jordan Drake</title>
</svelte:head>

<Theme />
<main>
  <h1>Jordan Drake</h1>
  <section>
    <h2>About Me</h2>
    <p>
      I am a software developer based in Manchester after spending a decade in
      London. My preference is remote work for the forseeable future. 🏡
    </p>
    <p>
      I specialise in front-end applications but do have considerable back-end
      experience as well, for a more detailed breakdown please request my CV. 📜
    </p>
    <p>
      This site is built in Svelte for no real reason other than for me to have
      an excuse to learn and use it. There's some playful theme effects if you
      <a href="/" on:click={reload}>refresh.</a> 💡
    </p>
  </section>
  <section>
    <h2 class="subheading">Links</h2>
    <ul class="links">
      <Link href="https://github.com/jordrake">Github</Link>
      <Link href="https://www.linkedin.com/in/jordrake">LinkedIn</Link>
      <Link href="https://twitter.com/jordrake">Twitter</Link>
      <Email />
    </ul>
  </section>
</main>

<style>
  :global(body) {
    text-transform: var(--textTransform);
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 10px;
    font-size: 18px;
    line-height: 32px;
  }

  :global(a), :global(a:visited), :global(a:active) {
    color: var(--secondaryColor);
  }

  main {
    margin: 0 auto;
  }

  @media only screen and (min-width: 600px) {
    main {
      width: 600px;
    }
  }

  h1 {
    font-weight: 600;
  }

  h2 {
    font-weight: 600;
    color: var(--secondaryColor);
  }

  .links {
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
