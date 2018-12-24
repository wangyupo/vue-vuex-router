<template>
	<div class="home">
		<div class="swiper">
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiper-slide>
					<div class="swiper-item">I'm Slide 1</div>
				</swiper-slide>
				<swiper-slide>
					<div class="swiper-item">I'm Slide 2</div>
				</swiper-slide>
				<swiper-slide>
					<div class="swiper-item">I'm Slide 3</div>
				</swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>
				<!-- <div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div> -->
			</swiper>
		</div>
        <ClassItem/>
	</div>
</template>

<script>
    // @ is an alias to /src
    import ClassItem from "./classItem";
	import Dialog from "@/components/dialog";
	import "swiper/dist/css/swiper.css";
	import { swiper, swiperSlide } from "vue-awesome-swiper";
	import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
	import env from "@/config/env";
	import { getUserInfo } from "@/api/common";

	export default {
		name: "home",
		components: {
			ClassItem,
			Dialog,
			swiper,
			swiperSlide
		},
		data() {
			return {
				showDialog: false,
				swiperOption: {
					// some swiper options/callbacks
					// 所有的参数同 swiper 官方 api 参数
					// effect: "coverflow",
					loop: true,
					autoplay: {
						delay: 3000 //5秒切换一次
					},
					speed: 1000,
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
					pagination: {
						el: ".swiper-pagination"
					}
				}
			};
		},
		computed: {
			...mapState("user", ["userInfo", "rank"]),
			...mapGetters("user", ["getUserInfo"]),
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted() {
			// getUserInfo().then(res => {
			// 	console.log("proxy", res);
			// });
			this.getRank();
			// current swiper instance
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
			console.log("this is current swiper instance object", this.swiper);
		},
		methods: {
			...mapActions("user", ["changeUserInfo", "getRank"]),
			timeStart() {},
			timeEnd() {},
			handleDialog() {
				this.showDialog = true;
			},
			handleI18n() {
				this.$i18n.locale = this.$i18n.locale === "en-US" ? "zh-CN" : "en-US";
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@/assets/iconfont/iconfont.css";
	.home {
		font-size: 14px;
		p {
			margin: 20px auto;
		}
		.swiper {
			width: 100%;
			height: 200px; /*no*/
			.swiper-item {
				height: 200px; /*no*/
				line-height: 200px; /*no*/
			}
		}
		.border {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100px;
			height: 200px;
			margin: 20px auto;
			position: relative;
			@include border();
		}
	}
	.dialog-content {
		width: 300px;
		height: 180px;
		background-color: #fff;
	}
</style>
