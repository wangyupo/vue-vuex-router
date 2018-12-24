<template>
	<div class="class-intro">
		<div class="class-intro-banner">
			<img
				class="banner-img"
				src="http://ww1.sinaimg.cn/large/0069osmDly1fxgv7wf2ypj30jk0cun0d.jpg"
				alt="banner"
			>
		</div>
		<div class="class-intro-sale">赚¥10.2</div>
		<div class="class-intro-content">
			<div class="title">
				法律英语基础版
				<i class="iconfont icon-weibo"></i>
			</div>
			<div class="content">熟悉法律条文，具有法律思维，能够把各种生活关系转换为法律关系，以至于在法律层面能担负起真正的法律责任</div>
			<div class="info">
				<div class="saled">
					<span class="now-price">¥299</span>
					<span class="old-price">¥599</span>
					<span class="people">155人开通</span>
				</div>
				<div class="collection">
					收藏
					<i class="iconfont icon-weibo"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		components: {}
	};
</script>

<style lang="scss" scoped>
	@import "~@/assets/iconfont/iconfont.css";

	.class-intro {
		background-color: #fff;
		&-banner {
			position: relative;
			width: 100%;
			height: 180px;
			.banner-img {
				width: 100%;
				height: 100%;
			}
		}
		&-sale {
			position: fixed;
			right: 0;
			top: 35px;
			width: 70px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			background-color: #fff;
			border-top-left-radius: 15px;
			border-bottom-left-radius: 15px;
		}
		&-content {
			.title {
				font-size: $text-title-size;
			}
			.content {
				margin: 10px 0;
			}
			.info {
				display: flex;
				justify-content: space-between;
				.old-price {
                    margin-left: 5px;
                    text-decoration: line-through;
                    font-size: $text-mini-size;
				}
				.people {
					margin-left: 40px;
				}
			}
		}
	}
</style>
