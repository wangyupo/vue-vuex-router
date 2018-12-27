<template>
	<div id="app">
		<Layout>
			<router-view/>
		</Layout>
	</div>
</template>

<script>
	import Layout from "@/layouts";
	export default {
		name: "App",
		components: {
			Layout
		}
	};
</script>

<style lang="scss">
    @import "./style/reset.scss";
    @import "./style/common.scss";
    @import "~@/assets/iconfont/iconfont.css";
    #app {
        font-size: $text-common-size;
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
        "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
    }
</style>
