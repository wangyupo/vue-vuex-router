<template>
	<div class="home">
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
		<p>
			i18n:
			{{$t('home.name', {name: 'Jelly'})}}
		</p>
		<p>
            vue过滤器:
			<br>
			{{1544179366 | timeFilter}}
			<br>
			{{15311959057 | formatPhone}}
			<br>
			{{123123123123132 | formatBank}}
			<br>
			{{5000039 | toThousands}}
		</p>
		<p>
            倒计时：
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
			{{rank.ok}}
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
	import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
	import env from "@/config/env";
	import { getUserInfo } from "@/api/common";

	export default {
		name: "home",
		components: {
			CountDown,
			Dialog
		},
		data() {
			return {
				showDialog: false
			};
		},
		computed: {
			...mapState("user", ["userInfo", "rank"]),
			...mapGetters("user", ["getUserInfo"])
		},
		mounted() {
			// getUserInfo().then(res => {
			// 	console.log("proxy", res);
			// });
			this.getRank();
		},
		methods: {
			...mapActions("user", ["changeUserInfo", "getRank"]),
			timeStart() {},
			timeEnd() {},
			handleDialog() {
				this.showDialog = true;
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
