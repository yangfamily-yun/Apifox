<template>
  <div class="friend-link">
    <span>友情链接：</span>
    <a-link
      :href="item.url"
      target="_blank"
      v-for="(item, index) in data"
      :key="index"
      >{{ item.title }}</a-link
    >
  </div>
</template>

<script lang="ts" setup>
const data = [
  { url: "https://www.apiseven.com/", title: "api7.ai" },
  { url: "https://www.apiseven.com/", title: "Dooring·H5制作神器" },
  { url: "https://www.authing.cn/", title: "Authing" },
  { url: "https://code.fun/", title: "CODE.FUN" },
  { url: "https://cloud.tapdata.net/", title: "Tapdata Cloud" },
  { url: "https://www.showmebug.com/", title: "ShowMeBug" },
  { url: "https://www.uviewui.com/", title: "uView" },
  { url: "https://eleduck.com/", title: "电鸭社区" },
  { url: "https://www.minjiekaifa.com/", title: "敏捷开发社区" },
];
</script>

<style lang="less" scoped>
.friend-link {
  text-align: center;
  margin: 64px 0 24px 0;
  font-size: 16px;
  line-height: 20px;
  color: #999;
  a {
    font-size: 16px;
    line-height: 20px;
    color: #999;
    margin-left: 16px;
  }
}
</style>