<script setup>
import FuiCard from "./firstui/fui-card/fui-card.vue";
</script>

<template>
  <fui-card src="https://zz-cc.oss-cn-beijing.aliyuncs.com/1.png" title="标题文字" tag="额外信息">
    <view class="fui-card__content">这是一个基础卡片的示例，此处为自定义内容区域，自行控制内容样式。</view>
    <view>
      <img src="https://zz-cc.oss-cn-beijing.aliyuncs.com/1.png" alt="">
    </view>
    <view style="display: flex;flex-direction: column">
      <text>丢失地点</text>
      <text>丢失时间</text>
      <text>联系Ta</text>
    </view>
  </fui-card>
</template>

<style scoped>

</style>
