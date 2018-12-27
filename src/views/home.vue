<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <span @click="changeUserInfo(233)">{{getUserInfo}}</span>
        <i class="iconfont icon-weibo"></i>
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
        <Dialog v-model="showDialog" :showClose="true">
            <div class="dialog-content">
                this is dialog content!
            </div>
        </Dialog>
        {{rank.ok}}
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

    export default {
        name: "home",
        components: {
            HelloWorld,
            CountDown,
            Dialog
        },
        data() {
            return {
                showDialog: false
            }
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
            timeStart() {

            },
            timeEnd() {

            },
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
