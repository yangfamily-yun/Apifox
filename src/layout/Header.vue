<template>
  <div>
    <!-- 头部导航 -->
    <a-affix>
      <a-layout-header class="w">
        <a-row class="grid-demo">
          <a-col flex="125px">
            <a-image
              height="36px"
              src="https://cdn.apifox.cn/logo/apifox.cn-logo-text.png"
          /></a-col>
          <a-col flex="auto">
            <div></div>
          </a-col>
          <a-col flex="695px">
            <a-row class="grid-son" justify="space-around">
              <a-col :span="3" v-for="item in state" :key="item.id">
                <a-link href="item.value">{{ item.title }}</a-link>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-layout-header>
    </a-affix>
    <!-- 说明区 -->
    <div class="container">
      <!-- api区域 -->
      <a-typography class="header-H1">
        <a-typography-title class="header-title"> Apifox</a-typography-title>
        <a-typography-paragraph class="api">
          API 文档、API 调试、API Mock、API 自动化测试
        </a-typography-paragraph>
        <a-typography-paragraph class="composition">
          Apifox = Postman + Swagger + Mock + JMeter
        </a-typography-paragraph>
      </a-typography>
      <!-- 下载区 -->
      <div class="button-area">
        <!-- 下载桌面版 -->
        <div class="button-desktop">
          <a-dropdown trigger="hover" position="bottom">
            <a-button class="down">
              <icon-arrow-down size="16" /><span style="margin: 0 7px"
                >下载桌面版</span
              ><icon-down size="16" />
            </a-button>
            <!-- 修改 -->
            <!-- <a-button class="down">下载桌面版 <icon-down /></a-button> -->
            <template #content>
              <a-doption>下载Windows桌面版（64）位</a-doption>
              <a-doption>下载Windows桌面版（32）位</a-doption>
              <a-doption>下载macOS桌面版（intel芯片）位</a-doption>
              <a-doption>下载Windows桌面版（M1芯片）位</a-doption>
            </template>
          </a-dropdown>
        </div>
        <!-- 使用web版 -->
        <a-link href="https://www.apifox.cn/web/user/login" class="button-web"
          >使用 WEB 版</a-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive([
  { id: "1", title: "首页", value: "https://www.apifox.cn/" },
  { id: "2", title: "API Hub", value: "https://www.apifox.cn/apihub/" },
  { id: "3", title: "帮助", value: "https://www.apifox.cn/help/" },
  { id: "4", title: "价格", value: "https://www.apifox.cn/#pricing" },
  {
    id: "5",
    title: "交流群",
    value: "https://www.apifox.cn/help/app/contact-us/",
  },
  {
    id: "6",
    title: "私有化部署",
    value: "https://www.apifox.cn/help/app/privatization-deployment/",
  },
  {
    id: "7",
    title: "建议反馈",
    value: "https://support.qq.com/products/305368/",
  },
]);
// const downLoad = reactive([{title:"下载Windows桌面版（64）位",url:""}]);
</script>

<style lang="less" scoped>
// 头部导航
.arco-layout-header {
  height: 60px;
  background-color: #fff;
  margin-bottom: 90px;
}
.grid-demo {
  height: 60px;
  .arco-col {
    height: 60px;
    font-size: 14px;
    line-height: 60px;
    text-align: center;
    .arco-link {
      height: 60px;
      line-height: 60px;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.85);
      padding: 0;
      // margin: 0 10px;
    }
    .arco-link:hover {
      color: red;
      border-bottom: 2px solid red;
    }
  }
}
.container {
  width: 1050px;
  height: 371px;
  margin: 0 auto;
  // text-align: center;
  background-color: #fff;
  // api区域
  .header-H1 {
    height: 217px;
    background-color: #fff;
    // padding: 23px 0;
    text-align: center;

    .header-title {
      height: 72px;
      padding-bottom: 11px;
      margin-bottom: 16px;
      font-size: 68px;
      font-weight: 700;
      line-height: 72px;
    }
    .api {
      height: 42px;
      // padding-top: 11px;
      font-weight: 400;
      font-size: 30px;
      font-style: normal;
      font-stretch: normal;
      line-height: 42px;
      // text-align: center;
    }
    .composition {
      height: 20px;
      padding-top: 11px;
      margin-bottom: 11px;
      font-weight: 400;
      font-size: 14px;
      font-style: normal;
      font-stretch: normal;
      line-height: 20px;
      // text-align: center;
    }
  }
  // 下载区
  .button-area {
    height: 48px;
    margin-top: 23px;
    padding-bottom: 60px;
    // line-height: 48px;
    background-color: #fff;
    text-align: center;
    font-size: 16px;
    // 桌面版
    .button-desktop {
      display: inline-block;
      width: 126px;
      padding: 11px 17px;
      background-color: red;
      border-radius: 5px;

      .down {
        height: 25px;
        color: #fff;
        background-color: red;
        // font-size: 16px;
        margin: 0 7px;
        text-align: center;
        padding: 0;
        margin: 0;
      }
    }
    // web版
    .button-web {
      height: 23px;
      padding: 11px 34px;
      margin-left: 25px;
      color: red;
      // font-size: 16px;
      border: 1px solid red;
      border-radius: 5px;
      background-color: #fff;
    }
  }
}
</style>