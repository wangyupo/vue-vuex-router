<template>
	<div class="layout-container">
        <slot></slot>
    </div>
</template>

<script>
	export default {
        name: "Layout",
		data() {
			return {};
		},
		components: {}
	};
</script>

<style lang="scss" scoped>
    .layout-container {
        height: 100vh;
        overflow-x: hidden;
        overflow-y: scroll;
    }
</style>
