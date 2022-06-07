<template>
  <div class="price">
    <div class="pricing1-title-wrapper">
      <a-typography-title> 价格表 </a-typography-title>
    </div>
    <div class="ant-row">
      <Part></Part>
      <div class="right"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Part from "./Part.vue";
</script>

<style lang="less" scoped>
.price {
  padding: 120px 24px;
  // background-color: pink;
  //   height: 100%;
  width: 1176px;
  position: relative;
  margin: auto;
  will-change: transform;
  .pricing1-title-wrapper {
    width: 100%;
    margin-bottom: 64px;
    text-align: center;
    .arco-typography {
      font-weight: 600;
      font-size: 36px;
      line-height: 50px;
      margin: 0;
    }
  }
}
.ant-row {
  display: flex;
  flex-flow: row wrap;
  //   background-color: green;
}
</style>