<template>
	<div class="tab-bar">
		<div
			v-for="(item, idx) in tabs"
			:key="idx"
			:class="['bar-item', activeIdx == idx ? 'active':'']"
			@click="clickHandler(idx, item.name)"
		>
			<i :class="['iconfont', item.icon]"></i>
			<div class="label">{{item.label}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [
					{
						label: "首页",
						icon: "icon-weibo",
						name: "demoPage"
					},
					{
						label: "我的",
						icon: "icon-weibo",
						name: "my"
					}
				],
				activeIdx: "0"
			};
        },
		methods: {
			clickHandler(idx, routerName) {
				this.activeIdx = idx;
				this.$router.push({ name: routerName });
			}
		}
	};
</script>

<style lang="scss" scoped>
	.tab-bar {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 60px;
		@include border-top();
		.bar-item {
			flex: 1;
            font-size: 14px;
            text-align: center;
			.iconfont {
				font-size: 24px;
			}
		}
		.bar-item.active {
			color: red;
		}
	}
</style>
