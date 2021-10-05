<script lang="ts">
  import { sample } from "./utils/sample";

  const cssVars = {
    textTransform: sample("none", "lowercase"),
    secondaryColor: sample("#ff2353", "#7055b0", "#ff7a00", "#18B279"),
  };

  function setCssVars(node: HTMLElement) {
    Object.entries(cssVars).forEach(([key, value]) => {
      node.style.setProperty(`--${key}`, value);
    });
  }
</script>

<svelte:body use:setCssVars />
