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
    <text style="font-size: 14px;">
      天气还是有点冷的，虽然在室内玩本，但也要多穿点，别感冒哦
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

    <view
        style="width: 100%;height:60px;margin: 20px 0;background: #D8A661;border-radius: 100px;text-align: center;line-height: 60px;font-size: 20px;font-weight: bold">
      生成剧本票根
    </view>

    <view class="flex-row" style="overflow:auto;">

      <view class="flex-col" style="margin: 5px 8px;align-items: center">
        <img style="width: 150px;height: 100px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oalVX.jpeg"
             alt="">
        <text>现代二号房</text>
      </view>
      <view class="flex-col" style="align-items: center;margin: 5px 8px">
        <img style="width: 150px;height: 100px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oa2AA.jpeg"
             alt="">
        <text>日式房</text>
      </view>
      <view class="flex-col" style="align-items: center;margin: 5px 8px">
        <img style="width: 150px;height: 100px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oaAis.jpeg"
             alt="">
        <text>中式房</text>
      </view>
      <view class="flex-col" style="align-items: center;margin: 5px 8px">
        <img style="width: 150px;height: 100px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oaFs5.png"
             alt="">
        <text>线代壹号房</text>
      </view>
      <view class="flex-col" style="align-items: center;margin: 5px 8px">
        <img style="width: 150px;height: 100px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oanWU.jpeg"
             alt="">
        <text>线代壹号房</text>
      </view>
    </view>
  </view>
  <view style="width: 100%;height:80px;position: absolute;bottom: 0;border-radius: 0 0 10px 10px;text-align: center;line-height: 60px;font-size: 20px;font-weight: bold" @click="tosuccess()">
    <text style="background: #FFD468;padding: 15px 80px;border-radius: 100px" @click="dissolution()">解散</text>
    <text style="background: #FFD468;padding: 15px 30px;margin-left: 20px;border-radius: 100px" @click="zhanzuo()">占座加入</text>
  </view>

</template>
<script setup>
import FuiButton from "../../componets/firstui/fui-button/fui-button.vue";

function dissolution() {
  uni.showModal({
    title: '温馨提示',
    content: '确认要解散组局吗',
    success: function (res) {
      if (res.confirm) {
          uni.navigateTo({
            url:'/pages/tool/toolitem'
          })

      } else if (res.cancel) {
        console.log('用户点击取消');
      }
    }
  });

}

function zhanzuo() {
  uni.showModal({
    title: '付费占座',
    content: `<view>
    <text>该包厢需要付费占位，占座费用为50.00元/人</text>
    <text>中途跳车、无理由自爆，须支付全车费用</text>
    <text>当前还剩余6个空位</text>
    <text>需要支付50元</text>
    <text>付款后如组局不成功，系统将在24小时内原路退款哦</text>
    <fui-button width="200px">占座</fui-button>
  </view>`,
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定');
      } else if (res.cancel) {
        console.log('用户点击取消');
      }
    }
  });

}
</script>

<style scoped>

</style>
