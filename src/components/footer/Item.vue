<template>
  <a-list-item style="padding: 0" v-for="(item, index) in more" :key="index">
    <a-link :href="item.url" style="padding: 0">{{ item.name }}</a-link>
  </a-list-item>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const prop = defineProps(["data"]);
const more = prop.data;
</script>

<style lang="less" scoped>
a {
  // transform: translateX(104px);
  float: left;
  clear: both;
  margin-bottom: 16px;
  color: hsla(0, 0%, 100%, 0.7);
  font-weight: 400;
  font-size: 16px;
}
</style>