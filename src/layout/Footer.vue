<template>
  <a-layout-footer>
    <a-image
      width="100%"
      src="	https://cdn.apifox.cn/www/assets/image/index/hero-hub-tail.png"
    />
    <div class="footer1">
      <a-row class="grid-demo">
        <a-col :span="6">
          <!-- 第一列 -->
          <div>
            <a-typography-title alt="apifox" class="logo">
              <a-link href="https://www.apifox.cn/" title="apifox">
                <a-image
                  alt="img"
                  src="https://cdn.apifox.cn/logo/apifox-logo-text-white.png"
                  width="100%"
                  :default-preview-visible="false"
              /></a-link>
            </a-typography-title>

            <div class="slogan">
              <a-typography-text class="text">
                API 文档、API 调试、API Mock、API 自动化测试，一体化协作平台
              </a-typography-text>
            </div>
          </div>
        </a-col>
        <!-- 第二列及之后 -->
        <a-col :span="6" v-for="(item, index) in data" :key="index">
          <div class="movetoleft">
            <a-typography-title class="title">
              {{ item.title }}
            </a-typography-title>
            <a-list :bordered="false" :split="false">
              <Item :data="item.detail"></Item>
            </a-list>
          </div>
        </a-col>
      </a-row>
      <Friend></Friend>
      <div class="home-page">
        <div class="copyright">
          <div>
            <div>
              ©2021
              <a-link href="https://www.apifox.cn">Apifox</a-link> All Rights
              Reserved
              <a-link href="https://www.apifox.cn/help/about-company/"
                >广州睿狐信息科技有限公司</a-link
              >
              <a-link
                target="_blank"
                href="https://beian.miit.gov.cn/"
                style="margin-left: 32px"
                >粤ICP备2021010720号</a-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-layout-footer>
</template>

<script setup lang="ts">
import { data } from "@/data/footer";
import Item from "@/components/footer/Item.vue";
import Friend from "@/components/footer/Friend.vue";
</script>

<style lang="less" scoped>
.arco-layout-footer {
  height: 64px;
  // background-color: blue;
}
.footer1 {
  background: #181819;
  // background-color: pink;
}
.arco-row {
  max-width: 1224px;
  height: 242px;
  margin: 0 auto;
  padding: 0 0 44px;
  border-bottom: 1px solid #999;
  // background-color: pink;
  .arco-col {
    padding: 0;
    line-height: 23px;
    font-size: 16px;
    margin: 0;
    flex-direction: column;
    display: flex;
    align-items: baseline;
    // background-color: purple;
    .logo {
      max-width: 110px;
      opacity: 0.85;
      align-self: flex-start;
      color: #fff;
    }
    .arco-typography {
      margin: 0;
      // text-align: center;
      .arco-link {
        padding: 0;
      }
    }
    .slogan {
      margin-top: 20px;
    }
    .text {
      color: #999;
    }
  }
  // 头部样式
  .movetoleft {
    padding-left: 96px;
    .title {
      font-size: 20.8px;
      margin-bottom: 24px;
      color: #fff;
    }
  }
}
.home-page {
  height: 100%;
  max-width: 1224px;
  position: relative;
  margin: auto;
  padding-bottom: 64px;
  will-change: transform;
  // background-color: red;
  color: #999;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  a {
    color: #999;
    font-size: 16px;
  }
}
</style>