<template>
	<div class="home">
		<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiper-slide>I'm Slide 1</swiper-slide>
				<swiper-slide>I'm Slide 2</swiper-slide>
				<swiper-slide>I'm Slide 3</swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
			</swiper>
		<div class="border">1像素边框</div>
		<cube-button @click="handleDialog">Button</cube-button>
		<p>
			vuex:
			<span @click="changeUserInfo(233)">{{getUserInfo}}</span>
		</p>
		<p>
			iconfont:
			<i class="iconfont icon-weibo"></i>
		</p>
		<p @click="handleI18n">
			i18n:
			{{$t('home.name', {name: 'Jelly'})}}
		</p>
		<p>vue过滤器:
			<br>
			{{1544179366 | timeFilter}}
			<br>
			{{15311959057 | formatPhone}}
			<br>
			{{123123123123132 | formatBank}}
			<br>
			{{5000039 | toThousands}}
		</p>
		<p>倒计时：
			<count-down
				v-on:start_callback="timeStart()"
				v-on:end_callback="timeEnd()"
				:startTime="'4100829240'"
				:endTime="'4101002040'"
				:tipText="'距开始还有'"
				:tipTextEnd="'距结束还有'"
				:endText="'距结束还有 0天 00:00:00'"
				:dayTxt="'天'"
				:hourTxt="':'"
				:minutesTxt="':'"
				:secondsTxt="''"
			></count-down>
		</p>
		<p>
			proxy代理：
			{{rank.ok?'成功':'失败'}}
		</p>
		<Dialog v-model="showDialog" :showClose="true">
			<div class="dialog-content">this is dialog content!</div>
		</Dialog>
	</div>
</template>

<script>
	// @ is an alias to /src
	import CountDown from "@/components/CountDown.vue";
	import Dialog from "@/components/Dialog.vue";
	import "swiper/dist/css/swiper.css";
	import { swiper, swiperSlide } from "vue-awesome-swiper";
	import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
	import env from "@/config/env";
	import { getUserInfo } from "@/api/common";

	export default {
		name: "home",
		components: {
			CountDown,
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
					loop: true,
					height: 300
					// autoHeight: true,
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
			this.swiper.slideTo(3, 1000, false);
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
