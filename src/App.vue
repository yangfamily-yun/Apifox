<template>
  <div class="layout-demo">
    <a-layout style="height: 400px">
      <Header></Header>
      <Content></Content>
      <Api></Api>
      <Price></Price>
      <Footer></Footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import Header from "./layout/Header.vue";
import Content from "./layout/Content.vue";
import Footer from "./layout/Footer.vue";
import Api from "./components/api/Api.vue";
import Price from "./components/price/Price.vue";
</script>

<style></style>