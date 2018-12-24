<template>
	<div class="class-detail">
        <ClassIntro/>
        <ClassTable/>
    </div>
</template>

<script>
	import ClassIntro from "./classIntro";
	import ClassTable from "./classTable";
	export default {
		components: {
            ClassIntro,
            ClassTable
        },
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
    .class-detail {

    }
</style>
