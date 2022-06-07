<template>
  <div class="w all">
    <!-- 大图 -->
    <a-carousel
      :style="{
        height: '765px',
      }"
      :default-current="1"
      class="center"
      indicator-type="never"
      @change="handleChange"
      v-model:current="changeIndex"
    >
      <a-carousel-item v-for="(image, index) in images" :key="index">
        <img
          :src="image"
          :style="{
            width: '100%',
          }"
        />
      </a-carousel-item>
    </a-carousel>
    <!-- 图片切换 -->
    <div class="more">
      <a-image-preview-group
        infinite
        v-model:current="indexOfImage"
        @change="toggle"
      >
        <a-image
          v-for="(image, index) in images"
          :key="index"
          height="58px"
          :src="image"
          :preview="false"
        />
      </a-image-preview-group>
    </div>

    <!--
    <div class="more">
      <a-image
        v-for="(image, index) in images"
        :key="index"
        height="58px"
        :src="image"
        :preview="false"
      />
    </div>
    -->
  </div>
</template>

<script lang="ts" setup>
// 大图索引
let changeIndex: number;
// 列表图索引
let indexOfImage: number;

const images = [
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-api-case-1.png",
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-api-case-2.png",
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-api-definition-1.png",
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-schema-1.png",
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-api-definition-2.png",
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-test-case-1.png",
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-test-case-2.png",
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-test-case-3.png",
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-mock-1.png",
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-mock-2.png",
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-mock-3.png",
  "https://cdn.apifox.cn/www/screenshot/dark-apifox-codegen-1.png",
];
// 大图切换
const handleChange = (value: number): void => {
  indexOfImage = value;
  // console.log(indexOfImage);
};
// 列表图切换
const toggle = (): void => {
  changeIndex = indexOfImage;
};
</script>
<style lang="less" scoped>
.all {
  height: 841px;
  margin-bottom: 40px;
}
.center {
  padding: 10px;
  background-color: #fff;
}
.arco-carousel {
  padding: 0;
  .arco-carousel-arrow > div {
    width: 40px;
    height: 40px;
    color: var(--color-white);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    cursor: default;
  }
  .arco-carousel-arrow-left {
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }
}
.more {
  height: 66px;
  padding: 5px 0;
  background-color: #fff;
  text-align: center;
  .arco-image {
    height: 58px;
    width: 92px;
    opacity: 0.93;
    border: 4px solid transparent;
    transition: border 0.3s ease-out;
    background: transparent;
    padding: 0;
    img {
      display: inline-block;
      height: 58px;
      width: 92px;
    }
  }
  .arco-image:hover {
    background-color: rgba(181, 154, 109, 0.6);
    border-color: transparent;
    border-radius: 4px;
    outline: none;
    opacity: 1;
  }
}
</style>
