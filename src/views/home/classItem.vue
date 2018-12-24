<template>
	<div class="class-item">
		<div class="class-item-banner">
			<img class="banner" src="http://ww1.sinaimg.cn/large/0069osmDly1fxgv7wf2ypj30jk0cun0d.jpg" alt="class-banner">
			<i class="class-type-icon iconfont icon-weibo"></i>
		</div>
		<div class="class-item-content">
			<div class="title">法律英语基础版</div>
			<div class="content">熟悉法律条文，具有法律思维，能够把各种生活关系转换为法律关系，以至于在法律层面能担负起真正的法律责任</div>
			<!-- <div class="saled">
				<span class="saled-num">155人开通</span>
				<div class="saled-price">
					<p class="old-price">¥599</p>
					<p class="new-price">¥299</p>
				</div>
			</div>-->
			<div class="process">学习进度0%</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	// @import "~@/style/var.scss";

	.class-item {
		display: flex;
		width: 100%;
		&-banner {
            position: relative;
			.banner {
				width: 160px;
				height: 100%;
				border-radius: 6px;
            }
            .class-type-icon {
                position: absolute;
                right: 5px;
                bottom: 5px;
                color: #fff;
                font-size: 22px;
            }
		}
		&-content {
			margin-left: 5px;
			display: flex;
			flex-flow: column;
			align-items: flex-start;
			> div {
				text-align: left;
			}
			.title {
				font-size: $text-title-size;
			}
			.content {
				margin: 10px 0;
				font-size: $text-common-size;
				@include ellipsis($line: 3);
			}
			.saled {
				display: flex;
				justify-content: space-between;
				width: 100%;
				&-num {
					font-size: $text-mini-size;
				}
				&-price {
					display: flex;
					align-items: flex-end;
					.old-price {
						font-size: $text-mini-size;
						text-decoration: line-through;
					}
					.new-price {
					}
				}
			}
			.process {
				color: #ff6632;
			}
		}
	}
</style>
