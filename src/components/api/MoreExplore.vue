<template>
  <a-link href="https://www.apifox.cn/apihub/"></a-link>
  <div class="apihub-card">
    <a-link
      href="https://www.apifox.cn/apihub/"
      target="blank"
      class="apihub-wrapper-viewmore"
    >
      <a-typography-text class="apihub-wrapper-viewmore-content">
        浏览更多
      </a-typography-text>
      <icon-right-circle size="40" />
    </a-link>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
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
  //   background-color: green;
  .apihub-wrapper-viewmore {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    .arco-typography {
      font-weight: 500;
      font-size: 24px;
      line-height: 34px;
      color: #181819;
      margin-right: 14px;
    }
    .arco-icon {
      color: red;
    }
    &:hover {
      background-color: #fff;
    }
  }
}

.arco-link {
  padding-left: 0px;
}
</style>