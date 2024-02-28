<script setup>

import FuiAvatar from "./firstui/fui-avatar/fui-avatar.vue";
</script>

<template>
  <view class="itembox">
    <img style="margin: 0 auto;width: 160px;height: 160px;border-radius: 10px" src="https://zz-cc.oss-cn-beijing.aliyuncs.com/1.png" alt="">
     <view>精品二手机</view>
     <view>
       <text>￥7.00</text>
       <text>￥10.00</text>
     </view>
     <view style="display: flex;align-items: center">
       <fui-avatar size="small" src="/static/images/common/img_logo.png"></fui-avatar>&nbsp;&nbsp;
       <text>张张</text>
     </view>
  </view>
</template>

<style scoped>
.itembox {
  width: 47vw;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f5f5f5;
  border-radius: 15px;
  height: 260px;
  overflow: hidden;
  align-content: center;
  margin-bottom: 10px;

}
</style>
