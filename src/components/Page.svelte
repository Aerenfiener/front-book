<script>
    import Header from './page-structure/Header.svelte';
    import Chapter from './content/Chapter.svelte';
    import About from './content/About.svelte';
	import { Router, Link, Route } from "svelte-routing";
</script>

<Header/>


<Router>
    <Route path='/chapter/:id' component="{Chapter}" />
</Router>
<style>

</style>
