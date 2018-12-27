<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
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
                {{rank.ok}}
            </div>
        </transition>
        <div>
            {{num | formatFloat}}
        </div>
        <Dialog v-model="showDialog" :showClose="true">
            <div class="dialog-content">
                this is dialog content!
            </div>
        </Dialog>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/helloWorld.vue";
    import CountDown from "@/components/countDown.vue";
    import Dialog from "@/components/dialog.vue";
    import {mapState, mapMutations, mapActions, mapGetters} from "vuex";
    import env from "@/config/env";
    import {getUserInfo} from "@/api/common";
    import animate from 'animate.css';
    import TWEEN from 'tween.js';

    export default {
        name: "home",
        components: {
            HelloWorld,
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
            ...mapGetters("user", ["getUserInfo"])
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
    @import "~@/assets/iconfont/iconfont.css";

    .home {
        display: flex;
        flex-flow: column;
        align-items: center;
        text-align: center;
    }

    .dialog-content {
        width: 300px;
        height: 180px;
        background-color: #fff;
    }
</style>
