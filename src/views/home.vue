<template>
  <!-- 示例页面 -->
  <div class="home">
    <!-- 自定义Dialog弹窗（Dialog组件在templte的末尾） -->
    <img @click="openDialog" alt="Vue logo" src="@assets/logo.png" />

    <!-- vue的官方文档 -->
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- vuex示例：动态获取、改变store中的“用户信息” -->
    <div @click="changeUserInfo(233)">
      vuex示例：
      {{getUserInfo}}
    </div>

    <!-- 图标库应用示例：这里用的是“阿里巴巴”的iconfont图标库 -->
    <div @click="handleUrl">
      iconfont:
      <i class="iconfont icon-weibo"></i>
    </div>

    <!-- vue过渡动效示例 -->
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div v-if="show">
        <!-- 国际化示例：点击会中/英文切换 -->
        <p @click="handleLang">
          i18n国际化：
          {{$t('home.name', {name: 'Jelly'})}}
        </p>

        <!-- 过滤器使用示范：这是一些全局过滤器，在main.js中已加载，组件内过滤器需组件单独加载，具体查询vue文档 -->
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

        <!-- 倒计时组件示例：根据业务需求自己选择使用与否 -->
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

        <!-- 反向代理是否成功：vue-cli3中在vue.config.js配置该项，具体参考vue-cli3文档 -->
        <p>
          反向代理：
          {{rank.ok?'成功':'失败'}}
        </p>
      </div>
    </transition>

    <!-- 补间动画示例：使用第三方库tween.js -->
    <div>补间动画：{{num | formatFloat}}</div>
    <p>
      浮点数运算：
      0.1+0.2={{number | formatFloat(2)}}
    </p>

    <!-- 验证码组件示例：根据业务取舍 -->
    <p>
      发送验证码：
      <button @click="startCountdown">
        <CountDown2 v-if="counting" :time="6000" @end="handleCountdownEnd">
          <template slot-scope="props">{{ props.totalSeconds }} 秒后重试</template>
        </CountDown2>
        <span v-else>获取验证码</span>
      </button>
    </p>

    <!-- toast弹窗：自己做的，可以看一看里面的实现方式 -->
    <p @click="handleToast">Toast插件</p>

    <!-- Dialog弹窗组件（此类组件实现方法有很多种，这是最直观、最简单的一种） -->
    <Dialog :isVisible="isVisible" :showMask="true" @close="closeDialog">
      <div>123</div>
    </Dialog>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
  import HelloWorld from "@/components/HelloWorld";
  import CountDown from "@/components/CountDown.vue";
  import CountDown2 from "@/components/CountDown";
  import Dialog from "@/components/Dialog";

  import animate from "animate.css";
  import env from "@/config/env";
  import TWEEN from "tween.js";
  import NP from "number-precision";

  import { getUserInfo } from "@/api/common";

  export default {
    name: "home",
    components: {
      HelloWorld,
      CountDown,
      CountDown2,
      Dialog,
    },
    data() {
      return {
        showDialog: false,
        show: false,
        num: 0,
        isVisible: false,
        counting: false,
      };
    },
    computed: {
      ...mapState("user", ["userInfo", "rank"]),
      ...mapGetters("user", ["getUserInfo"]),
      number() {
        return NP.plus(0.1, 0.2);
      },
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
      // 触发国际化
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
          .onUpdate(function () {
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
      // 打开弹窗
      openDialog() {
        this.isVisible = true;
      },
      // 关闭弹窗回调
      closeDialog() {
        this.isVisible = false;
      },
      // 倒计时开始
      startCountdown: function () {
        this.counting = true;
      },
      // 倒计时结束
      handleCountdownEnd: function () {
        this.counting = false;
      },
      // 触发toast
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
      },
    },
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
    // background: url(~@assets/logo.png) no-repeat center; /*css使用alias示例*/
  }

  .dialog-content {
    width: 300px;
    height: 180px;
    background-color: #fff;
  }
</style>
