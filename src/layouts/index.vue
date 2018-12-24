<template>
	<div class="layout-container">
		<div class="content-container">
			<slot></slot>
		</div>
		<TabBar/>
	</div>
</template>

<script>
	import TabBar from "./tabBar";

	export default {
		name: "Layout",
		components: {
			TabBar
		},
		data() {
			return {};
		}
	};
</script>

<style lang="scss" scoped>
	.layout-container {
		height: 100vh;
		.content-container {
			height: calc(100vh - 60px);
			overflow-x: hidden;
			overflow-y: scroll;
		}
	}
</style>
