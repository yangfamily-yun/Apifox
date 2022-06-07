<template>
  <div class="all">
    <div class="header">
      <!-- app区域 -->
      <div class="app">
        <a-row class="grid-demo">
          <a-col flex="202px" v-for="(item, index) in data" :key="index">
            <div>
              <a-image width="48" :src="item.url" />
              <a-typography-text> {{ item.title }}</a-typography-text>
            </div>
          </a-col>
        </a-row>
      </div>
      <!-- title -->
      <a-typography-title :heading="2"> 功能特性 </a-typography-title>
    </div>
    <!-- 介绍列表 -->
    <div class="ant-row">
      <List
        v-for="(item, index) in introduce"
        :key="index"
        :block="item"
      ></List>
    </div>
    <!-- 更多功能介绍 -->
    <div class="learn-more">
      <a-link href="/help/" target="_blank"
        >更多功能介绍
        <span role="img" aria-label="right" class="anticon anticon-right"
          ><svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="right"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
            ></path></svg></span
      ></a-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import List from "./List.vue";
import { introduce } from "../../data/list";
const data = reactive([
  {
    title: "企业微信 API",
    url: "https://cdn.apifox.cn/app/project-icon/custom/20210930/e21c5d76-623d-4af9-bfc9-fb46d2d1f601.jpg",
  },
  {
    title: "钉钉 API",
    url: "https://cdn.apifox.cn/app/project-icon/custom/20211115/1fd04512-b157-4328-8fe7-8e4bcc5e23df.png",
  },
  {
    title: "飞书 API",
    url: "https://cdn.apifox.cn/app/project-icon/custom/20220207/32eec71d-ec28-4aad-8065-ce701687ec9f.png",
  },
  {
    title: "Github API",
    url: "https://cdn.apifox.cn/app/project-icon/custom/20210930/a4a205c4-6648-4fc1-9ec8-b5159d31cb6c.jpg",
  },
  {
    title: "Gitlab API",
    url: "https://cdn.apifox.cn/app/project-icon/custom/2021106/fddb0965-d355-498b-afdc-679cb8e1e6c0.jpg",
  },
]);
</script>

<style lang="less" scoped>
.all {
  max-width: 1224px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 80px 24px 120px 24px;
  margin: 0 auto;
  //   height: 1683px;
  //   text-align: center;
  //   background-color: #fff;
}
.header {
  margin-bottom: 64px;
}
.app {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 64px;
  line-height: 64px;
  text-align: center;
  //   background-color: pink;
  .arco-row {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    position: relative;
    flex-flow: row nowrap;
    .arco-typography {
      margin-left: 16px;
      font-size: 18px;
      font-weight: 500;
      color: #181819;
    }
    .arco-image-img {
      vertical-align: middle;
    }
  }
}
h2.arco-typography {
  height: 51px;
  font-size: 32px;
  text-align: center;
  line-height: 51px;
  margin-top: 120px;
  margin-bottom: 0;
  //   background-color: purple;
}
// 介绍列表
.ant-row {
  //   background-color: purple;
  width: 1200px;

  display: flex;
  flex-flow: row wrap;
}
// 更多功能
.learn-more {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  a {
    transform: translateY(0);
    transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),
      box-shadow 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    padding-left: 8px;
    color: rgba(24, 24, 25, 0.7);
    border: 1px solid #e6e7e9;
    border-radius: 70px;
    font-size: 15px;
    width: 240px;
    display: block;
    line-height: 60px;
    text-align: center;
  }
  .arco-link:hover {
    color: red;
    border-color: red;
    background-color: transparent;
    transform: translateY(-2px);
  }
}
</style>