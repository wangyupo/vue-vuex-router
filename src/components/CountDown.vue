<!-- 倒计时组件 -->
<template>
	<div class="m-count-down">
		<p v-if="msTime.show">
			<span v-if="tipShow">{{tipText}}</span>
			<span v-if="!tipShow">{{tipTextEnd}}</span>
			<span v-if="msTime.day>0">
				<span>{{msTime.day}}{{dayTxt}}</span>
			</span>
			<span class="hour">{{msTime.hour}}{{hourTxt}}</span>
			<span class="min">{{msTime.minutes}}{{minutesTxt}}</span>
			<span class="sec">{{msTime.seconds}}{{secondsTxt}}</span>
		</p>
		<p v-if="!msTime.show">{{endText}}</p>
	</div>
</template>
<script>
	export default {
		name: "CountDown",
		replace: true,
		data() {
			return {
				tipShow: true,
				msTime: {
					//倒计时数值
					show: false, //倒计时状态
					day: "", //天
					hour: "", //小时
					minutes: "", //分钟
					seconds: "" //秒
				},
				star: "", //活动开始时间
				end: "", //活动结束时间
				current: "" //当前时间
			};
		},
		watch: {
			currentTime: function(val, oldval) {
				this.start();
			},
			startTime: function(val, oldval) {
				console.log("startTime", val);
				this.start();
			}
		},
		props: {
			//距离开始提示文字
			tipText: {
				type: String,
				default: "距离开始"
			},
			//距离结束提示文字
			tipTextEnd: {
				type: String,
				default: "距离结束"
			},
			//时间控件ID
			id: {
				type: String,
				default: "1"
			},
			//当前时间
			currentTime: {
				type: String
			},
			// 活动开始时间
			startTime: {
				type: String
			},
			// 活动结束时间
			endTime: {
				type: String
			},
			// 倒计时结束显示文本
			endText: {
				type: String,
				default: "已结束"
			},
			//自定义显示文字:天
			dayTxt: {
				type: String,
				default: ":"
			},
			//自定义显示文字:时
			hourTxt: {
				type: String,
				default: ":"
			},
			//自定义显示文字:分
			minutesTxt: {
				type: String,
				default: ":"
			},
			secondsTxt: {
				type: String,
				default: ":"
			},
			//是否开启秒表倒计，未完成
			secondsFixed: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			this.start();
		},
		methods: {
			start: function() {
				//判断是秒还是毫秒
				this.startTime.toString().length == 10
					? (this.star = this.startTime * 1000)
					: (this.star = this.startTime);
				this.endTime.toString().length == 10
					? (this.end = this.endTime * 1000)
					: (this.end = this.endTime);
				if (this.currentTime) {
					this.currentTime.toString().length == 10
						? (this.current = this.currentTime * 1000)
						: (this.current = this.currentTime);
				} else {
					this.current = new Date().getTime();
				}
				if (this.end < this.current) {
					/**
					 * 结束时间小于当前时间 活动已结束
					 */
					this.msTime.show = false;
					this.end_message();
				} else if (this.current < this.star) {
					/**
					 * 当前时间小于开始时间 活动尚未开始
					 */
					this.$set(this, "tipShow", true);
					setTimeout(() => {
						this.runTime(this.star, this.current, this.start_message);
					}, 1);
				} else if (
					(this.end > this.current && this.star < this.current) ||
					this.star == this.current
				) {
					/**
					 * 结束时间大于当前并且开始时间小于当前时间，执行活动开始倒计时
					 */
					this.$set(this, "tipShow", false);
					this.msTime.show = true;
					this.$emit("start_callback", this.msTime.show);
					setTimeout(() => {
						this.runTime(this.end, this.star, this.end_message, true);
					}, 1);
				}
			},
			runTime(startTime, endTime, callFun, type) {
				let msTime = this.msTime;
				let timeDistance = startTime - endTime;
				if (timeDistance > 0) {
					this.msTime.show = true;
					msTime.day = Math.floor(timeDistance / 86400000);
					timeDistance -= msTime.day * 86400000;
					msTime.hour = Math.floor(timeDistance / 3600000);
					timeDistance -= msTime.hour * 3600000;
					msTime.minutes = Math.floor(timeDistance / 60000);
					timeDistance -= msTime.minutes * 60000;
					//是否开启秒表倒计,未完成
					//this.secondsFixed ? msTime.seconds = new Number(timeDistance / 1000).toFixed(2) : msTime.seconds = Math.floor( timeDistance / 1000 ).toFixed(0);
					msTime.seconds = Math.floor(timeDistance / 1000).toFixed(0);
					timeDistance -= msTime.seconds * 1000;
					if (msTime.hour < 10) {
						msTime.hour = "0" + msTime.hour;
					}
					if (msTime.minutes < 10) {
						msTime.minutes = "0" + msTime.minutes;
					}
					if (msTime.seconds < 10) {
						msTime.seconds = "0" + msTime.seconds;
					}
					let _s = Date.now();
					let _e = Date.now();
					let diffPerFunc = _e - _s;
					setTimeout(() => {
						endTime -= 0;
						if (type) {
							this.runTime(this.end, (endTime += 1000), callFun, true);
						} else {
							this.runTime(this.star, (endTime += 1000), callFun);
						}
					}, 1000 - diffPerFunc);
				} else {
					callFun();
				}
			},
			start_message() {
				this.$set(this, "tipShow", false);
				this.$emit("start_callback", this.msTime.show);
				setTimeout(() => {
					this.runTime(this.end, this.star, this.end_message, true);
				}, 1);
			},
			end_message() {
				this.msTime.show = false;
				if (this.currentTime <= 0) {
					return;
				}
				this.$emit("end_callback", this.msTime.show);
			}
		}
	};
</script>

<style scoped lang="scss">
	.m-count-down {
		.hour,
		.min,
		.sec {
			display: inline-block;
		}
	}
</style>
