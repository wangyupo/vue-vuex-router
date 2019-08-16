<template>
	<div class="home">
		<img @click="openDialog" alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<p @click="changeUserInfo(233)">
			vuex示例：
			{{getUserInfo}}
		</p>
		<p @click="handleUrl">
			iconfont:
			<i class="iconfont icon-weibo"></i>
		</p>
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<div v-if="show">
				<p @click="handleLang">
					i18n国际化：
					{{$t('home.name', {name: 'Jelly'})}}
				</p>
				<p>
					vue过滤器：
					<br />
					时间戳：{{1544179366 | timeFilter}}
					<br />
					手机格式化：{{15311959057 | formatPhone}}
					<br />
					银行卡格式化：{{123123123123132 | formatBank}}
					<br />
					千分位分隔符：{{5000039 | toThousands}}
				</p>
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
				<p>
					反向代理：
					{{rank.ok?'成功':'失败'}}
				</p>
			</div>
		</transition>
		<div>补间动画：{{num | formatFloat}}</div>
		<p>
			浮点数运算：
			0.1+0.2={{number | formatFloat(2)}}
		</p>
		<p>
			发送验证码：
			<button @click="startCountdown">
				<CountDown2 v-if="counting" :time="6000" @end="handleCountdownEnd">
					<template slot-scope="props">{{ props.totalSeconds }} 秒后重试</template>
				</CountDown2>
				<span v-else>获取验证码</span>
			</button>
		</p>
		<p @click="handleToast">Toast插件</p>
		<Dialog :isVisible="isVisible" :showMask="true" @close="closeDialog">
			<div>123</div>
		</Dialog>
	</div>
</template>

<script>
	// /^(\d+\.?\d{1,2}?)%$/	百分比正则
	// /^\d+(\.\d{1,2})?$/	小数正则
	// /^[1-9][0-9]*$/	非0正整数
	// /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/   6-12位数字和字母组合密码正则
	// 日期正则
	// /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test('2019-12-06')
	// /^[1-9]\d{3}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/.test('20191231')
	// /^[1-9]\d{3}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])(20|21|22|23|[0-1]\d)[0-5]\d$/.test('201912302020')
	import HelloWorld from "@/components/HelloWorld";
	import CountDown from "@/components/CountDown.vue";
	import CountDown2 from "@/components/CountDown";
	import Dialog from "@/components/Dialog";
	import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
	import env from "@/config/env";
	import { getUserInfo } from "@/api/common";
	import animate from "animate.css";
	import TWEEN from "tween.js";
	import NP from "number-precision";

	export default {
		name: "home",
		components: {
			HelloWorld,
			CountDown,
			CountDown2,
			Dialog
		},
		data() {
			return {
				showDialog: false,
				show: false,
				num: 0,
				isVisible: false,
				counting: false
			};
		},
		computed: {
			...mapState("user", ["userInfo", "rank"]),
			...mapGetters("user", ["getUserInfo"]),
			number() {
				return NP.plus(0.1, 0.2);
			}
		},
		mounted() {
			this.getRank();
			// vue结合animate.css实现动画示例
			setTimeout(() => {
				this.show = true;
			}, 1000);
			// setTimeout(() => {
			//     this.show = false;
			// }, 6000)
			// tweenJs示例
			this.tweenJS();
		},
		methods: {
			...mapActions("user", ["changeUserInfo", "getRank"]),
			handleLang() {
				this.$i18n.locale = this.$i18n.locale === "zh-CN" ? "en-US" : "zh-CN";
			},
			timeStart() {},
			timeEnd() {},
			tweenJS() {
				let frameHandler;

				function animate(time) {
					frameHandler = requestAnimationFrame(animate);
					TWEEN.update(time); // time表示多长时间执行一次
				}

				// 创建补间动画
				let that = this;
				let tween = new TWEEN.Tween({ num: 0 })
					.to({ num: 2000 }, 3000)
					.easing(TWEEN.Easing.Linear.None)
					.onUpdate(function() {
						// 这里不要用箭头函数，这里的this指向Tween实例
						that.num = this.num.toFixed(0);
					})
					.onComplete(() => {
						// Make sure to clean up after ourselves.
						cancelAnimationFrame(frameHandler);
					})
					.start();

				// 开始补间动画
				animate();
			},
			openDialog() {
				this.isVisible = true;
			},
			closeDialog() {
				this.isVisible = false;
			},
			startCountdown: function() {
				this.counting = true;
			},
			handleCountdownEnd: function() {
				this.counting = false;
			},
			handleToast() {
				this.$toast("Hello Vue Plugin", "success");
			},
			// 用于清空hash路由中间卡着的不必要的信息，如：/?sdfdsf#/
			handleUrl() {
				history.pushState(
					{},
					null,
					location.href.replace(/\/\?(.*?)\#\//, "/#/")
				);
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@/assets/iconfont/iconfont.css";

	.home {
		display: flex;
		flex-flow: column;
		align-items: center;
		text-align: center;
		line-height: 1.2;
	}

	.dialog-content {
		width: 300px;
		height: 180px;
		background-color: #fff;
	}
</style>
