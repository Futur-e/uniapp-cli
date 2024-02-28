
<template>
  <view style="background: #161616;padding: 10px">
    <view class="flex-row">
      <input type="text" placeholder="输入剧本名或车队名"  style="padding-left: 10px;width: 80%;height: 35px;background: rgba(249,249,248,0.1);border-radius: 100px;">
      <fui-button width="60px" height="35px" size="20"  radius="20rpx">搜索</fui-button>
    </view>
  </view>
  <view class="flex-col" style="margin: 0 10px 10px;color:#dadada">
    <view class="flex-col" style="padding-left: 10px;justify-content: space-around;align-items: center;background: #212121;width: 98%;margin: 5px auto;border-radius: 10px;height: 160px">
      <view class="flex-row" style="align-items: center;">
        <img style="width: 100px;border-radius: 8px;height: 140px" src="https://i0.imgs.ovh/2024/02/20/oNAmK.jpeg" alt="">
        <view class="flex-col" style="height: 140px;padding-right: 15px">
          <text style="font-size: 14px;font-weight: bold">《谋杀安徒生》</text>
          <view class="flex-row">
            <text>时间：2024年2月21日（周四）10:00</text>
          </view>
          <view>
            <text>难度：困难</text>
          </view>
          <view>
            <text>门店：Demo沉浸式剧本杀</text>
          </view>
        </view>
      </view>
      <view class="progress-wrap flex-row">
        <!-- 这里的 progressWidth 用来控制进度条的长度-->
        <view class="progress" :style="{width: +progressWidth + '%',background:'#eea405'}"></view>
      </view>
    </view>
  </view>
  <view class="flex-col" style="margin: 0 10px 10px;color:#dadada">
    <view class="flex-col" style="padding-left: 10px;justify-content: space-around;align-items: center;background: #212121;width: 98%;margin: 5px auto;border-radius: 10px;height: 160px">
      <view class="flex-row" style="align-items: center;">
        <img style="width: 100px;border-radius: 8px;height: 140px" src="https://i0.imgs.ovh/2024/02/20/oNAmK.jpeg" alt="">
        <view class="flex-col" style="height: 140px;padding-right: 15px">
          <text style="font-size: 14px;font-weight: bold">《谋杀安徒生》</text>
          <view class="flex-row">
            <text>时间：2024年2月21日（周四）10:00</text>
          </view>
          <view>
            <text>难度：困难</text>
          </view>
          <view>
            <text>门店：Demo沉浸式剧本杀</text>
          </view>
        </view>
      </view>
      <view class="progress-wrap flex-row">
        <!-- 这里的 progressWidth 用来控制进度条的长度-->
        <view class="progress" :style="{width: +progressWidth1 + '%',background:'#eea405'}"></view>
      </view>
    </view>
  </view>
</template>
<script setup>

import FuiButton from "../../componets/firstui/fui-button/fui-button.vue";
import {ref} from "vue";

const progressWidth = ref(20)
const progressWidth1 = ref(80)
function toyuyue() {
  uni.navigateTo({
    url:'/pages/tool/toolitem'
  })
}
</script>

<style scoped>
.progress-wrap{
  height: 20upx;
  width: 94%;
  background: #d9d9d9;
  border-radius: 20upx;
  overflow: hidden;
  position: relative;
}

.progress {
  height: 30upx;
}

.percentage {
  position: absolute;
  left: 16upx;
  top: 0;
  font-size: 20upx;
  color: #eee;
}
</style>
