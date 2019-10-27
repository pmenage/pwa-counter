<template>
	<div id="app">
		<main>
			<counter></counter>
		</main>
	</div>
</template>

<script>
import Counter from "./components/Counter";

export default {
	name: "app",
	components: {
		Counter
	}
};
</script>

<style>
body {
	margin: 0;
}

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
