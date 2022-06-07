<template>
  <div class="apihub-wrapper apihub-hover">
    <div>
      <a-typography-title> API Hub</a-typography-title>
      <a-typography-text class="arco-typography-induction">
        开放 API 共享平台，发现更多公开 API 项目</a-typography-text
      >
    </div>
    <div class="apihub-card-wrapper">
      <div class="ant-row ant-row-center">
        <div class="apihub-card-link-wrapper">
          <!-- 卡片区域 -->
          <PartOfApi
            v-for="(item, index) in data"
            :key="index"
            :block="item"
          ></PartOfApi>
        </div>
        <MoreExplore></MoreExplore>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PartOfApi from "./PartOfApi.vue";
import MoreExplore from "./MoreExplore.vue";
import { data } from "../../data/api";
</script>
<style lang="less" scoped>
.apihub-card-wrapper {
  margin-top: 64px;
  margin-left: -12px;
  margin-right: -12px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  .apihub-card-link-wrapper {
    display: contents;
  }
}
.apihub-wrapper {
  // background: #f8f8fa;
  // background-color: red;
  background-color: rgb(248, 248, 250);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0 96px;
  flex-wrap: wrap;
}

.arco-typography {
  width: 100%;
  height: 50px;
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  padding-bottom: 0;
}
.arco-typography-induction {
  height: 26px;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: rgba(24, 24, 25, 0.42);
  margin-bottom: 0;
}
</style>