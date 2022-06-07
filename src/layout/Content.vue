<template>
  <a-layout-content>
    <Picture></Picture>
    <Feature></Feature>
  </a-layout-content>
</template>

<script setup lang="ts">
import Picture from "./PictureList.vue";
import Feature from "../components/features/Feature.vue";
</script>

<style>
.arco-layout-content {
  /* background-color: green; */
}
</style>