<template>
  <view style="padding: 10px">
    <view class="flex-row">
      <view>
        <img style="height: 200px;margin-right: 10px;width: 130px;border-radius: 5px"
             src="https://i0.imgs.ovh/2024/02/20/oNAmK.jpeg" alt="">
      </view>
      <view class="flex-col">
        <text style="font-size: 18px;font-weight: bold">逃出迷雾镇</text>
        <text style="font-size: 16px;font-weight: bold">6人本</text>
        <text style="font-size: 16px;font-weight: bold">108元/位</text>
        <text style="font-size: 16px;font-weight: bold">难度：进阶</text>
        <text style="font-size: 16px;font-weight: bold">2024-02-21当天天气情况:</text>
        <text style="font-size: 16px;font-weight: bold">
          中雨7.67°℃~8.63°℃天气还是有点冷的，虽然在室内玩本，但也要多穿点，别感冒哦
        </text>
      </view>
    </view>
    <text style="font-size: 18px;font-weight: bold;">
      请根据剧本选择时间人数
    </text>
    <view
        style="color:white;text-align: center;margin: 15px 0;line-height:50px;background: #4A4A4A;border-radius: 100px;height: 50px">
      <text>2024-02-2110:00 6人</text>
    </view>
    <view class="flex-row" style="align-items: center">
      <img style="margin: 0 10px;width:30px;height:30px;" src="https://img95.699pic.com/element/40033/3359.png_860.png"
           alt="">
      <view class="flex-col">
        <text>Demo沉浸式剧本杀</text>
        <text>上海市虹口区东江湾路188号D栋326</text>
      </view>
      <view style="width: 50px"></view>
    </view>

    <view class="flex-row" style="overflow:auto;">
      <view class="flex-col" style="margin: 5px 8px">
        <img style="width: 150px;height: 100px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oalVX.jpeg"
             alt="">
        <text>现代二号房</text>
        <text style="color: grey">D04</text>
      </view>
      <view class="flex-col" style="margin: 5px 8px">
        <img style="width: 150px;height: 100px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oa2AA.jpeg"
             alt="">
        <text>日式房</text>
        <text style="color: grey">D04</text>
      </view>
      <view class="flex-col" style="margin: 5px 8px">
        <img style="width: 150px;height: 100px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oaAis.jpeg"
             alt="">
        <text>中式房</text>
        <text style="color: grey">D04</text>
      </view>
      <view class="flex-col" style="margin: 5px 8px">
        <img style="width: 150px;height: 100px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oaFs5.png"
             alt="">
        <text>线代壹号房</text>
        <text style="color: grey">D04</text>
      </view>
      <view class="flex-col" style="margin: 5px 8px">
        <img style="width: 150px;height: 100px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oanWU.jpeg"
             alt="">
        <text>线代壹号房</text>
        <text style="color: grey">D04</text>
      </view>
    </view>
    <view style="padding: 10px;height: 80px;color: white;background: #363636;border-radius: 10px">
      <text style="font-size: 18px">温馨提示：</text>
      <br>
      <br>
      <view style="padding-top: 15px;font-size: 15px">“预约之后可以分享给小伙伴们，让小伙伴们加入哦“</view>
    </view>
  </view>
  <view style="width: 100%;height:60px;position: absolute;bottom: 0;background: #D8A661;border-radius: 0 0 10px 10px;text-align: center;line-height: 60px;font-size: 20px;font-weight: bold" @click="tosuccess()">
    立即预约
  </view>
</template>
<script setup>
function tosuccess() {
  uni.navigateTo({
    url:'/pages/tool/yuyuesuccess'
  })
}
</script>

<style scoped>

</style>
