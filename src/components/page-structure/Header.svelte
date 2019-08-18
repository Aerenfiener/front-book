<script>
	import { Router, Link, Route } from "svelte-routing";
	let id = '/chapter/4';
</script>

<div class="header__wrapper">
    <Router>
        <Link to="/" class="header__logo">logo</Link>

        <div class="header__item">
            <Link bind:to={id}>Читать</Link>
        </div>
        <div class="header__item header__item__read">
           <Link to="/">Об авторе</Link>
        </div>
    </Router>

</div>

<style type="text/less">
	.header {
	    &__wrapper {
	        height: 50px;
            background: var(--main-color);

	        display: flex;
	        flex-direction: row;
	        justify-content: center;


	        @media (min-width: 600px) {
	            height: 75px;
	            justify-content: space-between;
	        }
	    }

	    &__logo {

	    }

	    &__item {
            display: none;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--font-color-lt);

            @media (min-width: 600px) {
                display: flex;
            }

            &__read {
                @media (min-width: 600px) {
                    width: 20%;
                }
            }
	    }
	}
</style>
