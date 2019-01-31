<template>
	<div class="tab-bar">
        <div
            v-for="(item, idx) in tabs"
            :key="idx"
            :class="['bar-item', tabBar === item.name ? 'active':'']"
            @click="clickHandler(item.name)"
        >
            <i :class="['iconfont', item.icon]"></i>
            <div class="label">{{item.label}}</div>
        </div>
	</div>
</template>

<script>
    import {sessionGetItem} from "../common/util";

    export default {
		data() {
			return {
				tabs: [
					{
						label: "首页",
						icon: "icon-weibo",
						name: "home"
					},
					{
						label: "我的",
						icon: "icon-weibo",
						name: "my"
					}
				],
                tabBar: sessionGetItem('tabBar') || 'home'
            };
        },
        watch: {
            '$route' (to, from) {
                if (["home", "my"].includes(to.name)) {
                    this.tabBar = to.name;
                }
            }
        },
        methods: {
            clickHandler(routerName) {
                this.tabBar = routerName;
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
