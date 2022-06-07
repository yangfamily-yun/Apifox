<template>
  <div class="block">
    <div class="content3-text">
      <div class="content3-labelWrapper">
        <a-avatar>
          <img
            alt="avatar"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          />
        </a-avatar>
        <a-typography-title
          :heading="3"
          style="opacity: 1; transform: translate(0px, 0px)"
        >
          {{ data.title }}
        </a-typography-title>
      </div>
      <div class="content3-content">
        <a-list :bordered="false" :split="false">
          <a-list-item v-for="(item, index) in data.describe" :key="index">
            <span>{{ index + 1 + "." }}</span
            >{{ item }}</a-list-item
          >
        </a-list>
      </div>
    </div>
  </div>
</template>


<script lang="ts"  setup>
import { ref } from "vue";
import { defineProps } from "vue";
const props = defineProps(["block"]);
const data = props.block;
</script>
<style lang="less" scoped>
.block {
  display: inline-block;
  width: 576px;
  height: 260px;
  padding: 12px;
  opacity: 1;
}
.content3-text {
  display: inline-block;
  width: 512px;
  height: 188px;
  padding: 40px 32px 32px;
  vertical-align: baseline;
  background: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  .content3-labelWrapper {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 40px;
    margin-bottom: 16px;
    .arco-typography {
      display: inline-block;
      margin: 0 0 0 20px;
      font-size: 21px;
      font-weight: 500;
      // line-height: 1.29;
    }
  }
}
.arco-list-medium > .arco-list-footer,
.arco-list-medium > .arco-list-content > .arco-list-item,
.arco-list-medium > .arco-list-content .arco-list-col > .arco-list-item,
.arco-list-medium > .arco-list-content.arco-list-virtual .arco-list-item {
  padding: 0;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: "tnum", "tnum";
  -webkit-font-smoothing: antialiased;
  color: #12141c80;
}
</style>