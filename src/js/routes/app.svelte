<script lang="ts">
  import Router from 'svelte-spa-router';

  import Pokedex from './pokedex.svelte';
  import Counter from './counter.svelte';
  import Error from './error.svelte';

  const routes = {
    '/': Pokedex,
    '/counter': Counter,
    '*': Error
  };
</script>

<nav class="p-2 nav flex-row flex-md-column flex-nowrap justify-content-center justify-content-md-start">
  <a class="nav-link active" href="#/">📚 Pokédex</a>
  <a class="nav-link" href="#/counter">🔪 Counter</a>
</nav>
<main class="d-flex flex-column overflow-y-hidden overflow-x-hidden">
  <Router {routes} />
</main>
