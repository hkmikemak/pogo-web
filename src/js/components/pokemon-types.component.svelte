<script lang="ts">
  export let types: string[];
</script>

{#if types}
  <div class="d-flex flex-row align-items-stretch pogo-types">
    {#each types as type}
      <div class={'flex-grow-1 flex-shrink-1 flex-basis-0 d-flex align-items-center justify-content-center ' + type}>
        <span class="text-oneliner">{type}</span>
      </div>
    {/each}
  </div>
{/if}
