<script lang="ts">
  // This is an overkill way to avoid a bot from scraping my email but it was fun to code!

  import Link from "./Link.svelte";

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipher = "fpsthnlokuvawjgbexqdiycmzr".split("");

  const cipherTable = cipher.reduce((table, next, idx) => {
    table[next] = alphabet[idx];
    return table;
  }, {} as Record<string, string>);

  function decrypt(input: string) {
    return input.split("").reduce((result, next) => {
      return result + (cipherTable[next] || next);
    }, "");
  }

  function openEmail(ev: MouseEvent) {
    ev.preventDefault();

    const encryptedEmail = "ugxtfj@utxfvh.sg.iv";

    window.open(`mailto:${decrypt(encryptedEmail)}`, "_blank");
  }
</script>

<Link href="mailto:click-for-real-email" onClick={openEmail}>Email</Link>
