<template>
  <div name="block1" class="pricing1-block">
    <!-- 左 -->
    <div class="pricing-block-box left">
      <!-- 头部 -->
      <div class="pricing-top-wrapper price1">
        <a-typography-title> 免费 </a-typography-title>
        <a-typography-text class="more"> 公网版 (SaaS版) </a-typography-text>
      </div>
      <!-- 内容 -->
      <div
        class="pricing1-content"
        style="opacity: 1; transform: translate(0px, 0px)"
      >
        <a-list :split="false" :bordered="false" class="list">
          <a-list-item v-for="(item, index) in free" :key="index">
            <icon-check size="16" strokeWidth="5" />
            <a-typography-text>{{ item }} </a-typography-text>
          </a-list-item>
        </a-list>
      </div>
      <!-- 尾部 -->
      <div class="end">
        <div class="circle">
          <a href="#">立即下载</a>
        </div>
      </div>
    </div>
    <!-- 右 -->
    <div class="pricing-block-box rigth">
      <!-- 头部 -->
      <div class="pricing-top-wrapper price2">
        <a-typography-title> 付费 </a-typography-title>
        <a-typography-text class="more">私有化部署版 </a-typography-text>
      </div>
      <!-- 内容 -->
      <div
        class="pricing1-content"
        style="opacity: 1; transform: translate(0px, 0px)"
      >
        <a-list :split="false" :bordered="false" class="list">
          <a-list-item v-for="(item, index) in pay" :key="index">
            <icon-check size="16" strokeWidth="5" />
            <a-typography-text>{{ item }} </a-typography-text>
          </a-list-item>
        </a-list>
      </div>
      <!-- 尾部 -->
      <div class="end">
        <div class="circle">
          <a href="#">立即咨询</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const free: string[] = [
  "无任何限制",
  "不限团队人数",
  "不限功能",
  "不限项目数",
  "不限接口数",
];
const pay: string[] = [
  "部署在企业内部",
  "按使用人数收费",
  "不限功能",
  "不限项目数",
  "不限接口数",
];
</script>
<style lang="less" scoped>
.pricing1-block {
  margin-bottom: 0;
  border-radius: 16px;

  .pricing-block-box {
    display: inline-block;
    background: linear-gradient(
      90deg,
      rgba(253, 106, 79, 0.02),
      rgba(252, 158, 35, 0.02)
    );
    box-shadow: 0 8px 16px rgba(253, 122, 67, 0.08);
    width: 390px;
    border-radius: 16px;
    color: #666;
    overflow: hidden;

    .pricing-top-wrapper {
      width: 100%;
      height: 124px;
      text-align: center;
      .arco-typography {
        border: none;
        color: #fff;
        padding-top: 24px;
        font-size: 32px;
        font-weight: 600;
        line-height: 45px;
        padding-bottom: 8px;
        margin: 0;
      }
      .more {
        border: none;
        font-size: 18px;
        line-height: 22px;
        padding: 0;
      }
    }
    .price1 {
      background: linear-gradient(90deg, #fd6a4f, #fc9e23);
      color: #fff;
    }
    .price2 {
      background: linear-gradient(90deg, #e0eafc, #cfdef3);
      .arco-typography {
        color: rgba(24, 24, 25, 0.7);
      }
    }
    .pricing1-content {
      width: 278px;
      margin: 24px 56px 0;
      color: rgba(24, 24, 25, 0.7);
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      background-color: #fff;

      .arco-list-item {
        padding: 0;
        margin-bottom: 16px;
        .arco-icon {
          font-size: 16px;
          color: rgba(24, 24, 25, 0.7);
          margin-right: 12px;

          vertical-align: -4px;
        }
        .arco-typography {
          font-size: 16px;
          color: rgba(24, 24, 25, 0.7);
        }
      }
    }
  }
  .left {
    margin: 0 40px auto 156px;
    border: 1px solid #fd8736;
  }
  .rigth {
    margin: 0 156px auto 40px;
    border: 1px solid #e0eafc;
  }
}
.list {
  padding-left: 75px;
}
.end {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342px;
  height: 40px;
  margin: 18px 24px;
  // background-color: yellow;
  text-align: center;
  .circle {
    width: 80px;
    height: 40px;
    line-height: 40px;
    padding: 0 24px;
    border-radius: 40px;
    background-color: rgb(248, 82, 80);
    text-align: center;
    font-size: 16px;
    a {
      color: #fff;
    }
  }
}
</style>