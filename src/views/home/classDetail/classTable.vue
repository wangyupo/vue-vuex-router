<template>
	<div class="class-table">
        <!-- TabBar -->
		<div class="class-table-header">
			<p :class="[activeHeader === '1'?'active':'']" @click="handleHeader('1')">课程概览</p>
			<p :class="[activeHeader === '2'?'active':'']" @click="handleHeader('2')">课程目录</p>
		</div>
		<div class="class-table-content">
			<!-- 课程概览 -->
			<div class="intro" v-show="activeHeader === '1'">1</div>
			<!-- 课程目录 -->
			<div class="books" v-show="activeHeader === '2'">2</div>
		</div>
		<!-- 购买按钮 -->
		<div class="class-table-btn-wrap">
			<div class="share-btn">
				<i class="iconfont icon-weibo"></i>
				砍价
			</div>
			<div class="sale-btn">
				<span>免费试听</span>
				<button>¥299购买课程</button>
			</div>
		</div>
		<!-- 开始、继续学习 -->
		<!-- <div class="class-table-btn-wrap">
			<button>开始学习</button>
			<button>继续学习</button>
		</div> -->
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				activeHeader: "1"
			};
		},
		methods: {
			handleHeader(type) {
				this.activeHeader = type;
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@/assets/iconfont/iconfont.css";

	.class-table {
		&-header {
			display: flex;
			justify-content: space-around;
			@include border-bottom($height: 2px, $border-color: #f5f5f5);
			> p {
				padding: 10px 10px;
				&.active {
					@include border-bottom($height: 2px, $border-color: #000);
					z-index: 2;
				}
			}
		}
		&-content {
		}
		&-btn-wrap {
			position: absolute;
			bottom: 0;
			left: 0;
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			height: 60px;
			background-color: red;
			.share-btn {
				display: flex;
				flex-flow: column;
				align-items: center;
			}
		}
	}
</style>
