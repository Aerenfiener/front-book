<script>
	import Page from './components/Page.svelte'
</script>


<Page/>

<style type="text/less">
    :global(body) {
        background: var(--black-color);
        padding: 0;

        --main-color: #db4437;
        --black-color: #222627;

        --font-color-lt: #fff;
        --font-color: #A6A6A6;
        --font-color-dk: #666666;

        --breakpoint-md: 600px;
        --breakpoint-lg: (min-width: 1200px);
    }
</style>
