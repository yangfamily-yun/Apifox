<template>
  <!-- 卡片区域 -->
  <a-trigger :popup-translate="[-196, -212]">
    <div class="apihub-card">
      <!-- 头部 -->
      <div class="apihub-card-banner">
        <a-image width="56" :src="data.icon" />
        <span class="apihub-card-text">{{ data.title }}</span>
        <!-- 设置图标 -->
        <icon-settings size="14" :strokeWidth="1" />
      </div>
      <!-- 中部 -->
      <a-typography-text>
        {{ data.content }}
      </a-typography-text>
      <!-- 尾部记录区 -->
      <div class="apihub-card-icon">
        <icon-eye :strokeWidth="1" size="24" />
        <span class="view">{{ data.view }}</span>

        <icon-star :strokeWidth="1" size="24" />
        <span class="star">{{ data.collection }}</span>
      </div>
    </div>
    <template #content>
      <!-- 触发区域 -->
      <div class="apihub-card-hover-content">
        <a-link
          :href="data.doc"
          class="apihub-card-hover-content-item"
          target="blank"
        >
          <icon-book size="18" :strokeWidth="1" />
          <a-typography-text>在线文档 </a-typography-text></a-link
        >
        <a-link
          :href="data.projext"
          class="apihub-card-hover-content-item"
          target="blank"
        >
          <icon-menu size="18" :strokeWidth="1" />
          <a-typography-text> 进入项目</a-typography-text></a-link
        >
      </div>
    </template>
  </a-trigger>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps(["block"]);
const data = props.block;
</script>

<style lang="less" scoped>
.grid-demo {
  flex-direction: column;
  justify-content: end;
  align-items: center;
}
.apihub-card {
  display: inline-block;
  max-height: 212px;
  width: 392px;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  margin-right: 24px;
  margin-bottom: 24px;
  position: relative;
  background-color: gree;
  .arco-typography {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    height: 44px;
    color: rgba(24, 24, 25, 0.42);
    margin-bottom: 26px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
.apihub-card-banner {
  max-height: 56px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  .arco-image {
    width: 56px;
    height: 56px;
    line-height: 56px;
    object-fit: cover;
    font-size: 18px;
    margin-right: 16px;
    border-radius: 8px;
    outline: 1px solid #f8f8fa;
  }
  .apihub-card-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #181819;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 54px;
  }
  .arco-icon {
    vertical-align: -7px;
  }
}
.view,
.star {
  font-size: 16px;
  line-height: 20px;
  color: rgba(24, 24, 25, 0.42);
  margin-right: 32px;
  max-width: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
}
.apihub-card-hover-content {
  display: flex;
  justify-content: start;
  position: absolute;
  width: 392px;
  height: 212px;
  border-radius: 8px;
  opacity: 0.95;
  background-color: #fff;
  text-align: center;
  &:hover {
    color: red;
  }
  .apihub-card-hover-content-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 195px;
    // height: 44px;
    cursor: pointer;
    padding: 75px 0;
    // background-color: aqua;
    &:hover {
      color: red;
      background-color: #fff;
    }
    .arco-typography {
      font-size: 14px;
      color: rgba(24, 24, 25, 0.6980392156862745);
      &:hover {
        color: red;
        background-color: #fff;
      }
    }
  }
}
</style>