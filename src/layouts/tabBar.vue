<template>
	<div class="tab-bar">
		<div
			v-for="(item, idx) in tabs"
			:key="idx"
			:class="['bar-item', activeIdx == idx ? 'active':'']"
            @click="clickHandler(idx)"
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
						icon: "icon-weibo"
					},
					{
						label: "我的",
						icon: "icon-weibo"
					}
				],
				activeIdx: "0"
			};
		},
        methods: {
            clickHandler(idx) {
                this.activeIdx = idx;
            },
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
			.iconfont {
                font-size: 24px;
			}
		}
        .bar-item.active {
            color: red;
        }
	}
</style>
