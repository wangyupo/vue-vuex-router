<template>
    <div class="home">
        <span @click="changeUserInfo(233)">{{getUserInfo}}</span>
        <i class="iconfont icon-weibo"></i>
        <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut">
            <div v-if="show">
                {{$t('home.name', {name: 'Jelly'})}}
                {{1544179366 | timeFilter}}
                {{15311959057 | formatPhone}}
                {{123123123123132 | formatBank}}
                {{5000039 | toThousands}}
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
                反向代理：{{rank.ok?'成功':'失败'}}
            </div>
        </transition>
        <div>
            补间动画：{{num | formatFloat}}
        </div>
        <p>
            浮点数运算：
            0.1+0.2={{number | formatFloat(2)}}
        </p>
        <Dialog v-model="showDialog" :showClose="true">
            <div class="dialog-content">
                this is dialog content!
            </div>
        </Dialog>
    </div>
</template>

<script>
    // @ is an alias to /src
    import CountDown from "@/components/countDown.vue";
    import Dialog from "@/components/dialog.vue";
    import {mapState, mapMutations, mapActions, mapGetters} from "vuex";
    import env from "@/config/env";
    import {getUserInfo} from "@/api/common";
    import animate from 'animate.css';
    import TWEEN from 'tween.js';
    import NP from 'number-precision'

    export default {
        name: "home",
        components: {
            CountDown,
            Dialog,
        },
        data() {
            return {
                showDialog: false,
                show: false,
                num: 0
            }
        },
        computed: {
            ...mapState("user", ["userInfo", "rank"]),
            ...mapGetters("user", ["getUserInfo"]),
            number() {
                return NP.plus(0.1, 0.2)
            }
        },
        mounted() {
            this.getRank();
            // vue结合animate.css实现动画示例
            setTimeout(() => {
                this.show = true;
            }, 1000)
            // setTimeout(() => {
            //     this.show = false;
            // }, 6000)
            // tweenJs示例
            this.tweenJS();
        },
        methods: {
            ...mapActions("user", ["changeUserInfo", "getRank"]),
            timeStart() {

            },
            timeEnd() {

            },
            handleDialog() {
				this.showDialog = true;
			},
			handleI18n() {
				this.$i18n.locale = this.$i18n.locale === "en-US" ? "zh-CN" : "en-US";
			},
            tweenJS() {
                let frameHandler

                function animate(time) {
                    frameHandler = requestAnimationFrame(animate);
                    TWEEN.update(time); // time表示多长时间执行一次
                }

                // 创建补间动画
                let that = this;
                let tween = new TWEEN.Tween({num: 0})
                    .to({num: 2000}, 3000)
                    .easing(TWEEN.Easing.Linear.None)
                    .onUpdate(function () {
                        // 这里不要用箭头函数，这里的this指向Tween实例
                        that.num = this.num.toFixed(0)
                    })
                    .onComplete(() => {
                        // Make sure to clean up after ourselves.
                        cancelAnimationFrame(frameHandler)
                    })
                    .start()

                // 开始补间动画
                animate();
            }
        }
    };
</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        flex-flow: column;
        justify-content: center;
        font-size: 14px;
        text-align: center;
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
