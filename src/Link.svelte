<script lang="ts">
  export let href: undefined | string = undefined;
  export let onClick: undefined | ((event: MouseEvent) => void) = undefined;
</script>

<li>
  <a class="link" href={href} on:click={onClick}><slot /></a>
</li>

<style>
  .link {
    color: black;
    text-decoration: none;
    text-align: center;
    width: 110px;
    display: inline-block;
    border: 1px solid var(--secondaryColor);
    padding: 10px;
    margin-bottom: 10px;
    transition: box-shadow ease 0.5s;
    box-shadow: inset 0 0 0 1px white;
  }

  .link:hover {
    color: white;
    box-shadow: inset 130px 0 0 0 var(--secondaryColor);
  }
</style>
