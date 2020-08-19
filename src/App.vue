<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
  import Layout from "@/layouts"; //最外层布局（类似Header、Footer等常驻页面的UI都放在这里）

  export default {
    name: "App",
    components: {
      Layout,
    },
  };
</script>

<style lang="scss">
  // 重置浏览器样式
  @import "./style/normalize.scss";
  @import "./style/reset.scss";
  // 公用css、scss变量
  @import "./style/common.scss";
	// iconfont图标库（只做引入示例，项目不需要可以去掉）
  @import "~@/assets/iconfont/iconfont.css";
  #app {
    font-size: $font-size-base;
    color: $color-common;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "SF UI Text",
      "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  }
</style>
