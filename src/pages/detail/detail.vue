<template>
  <view style="padding: 10px 10px 80px 10px;">
    <view class="flex-row" style="padding-bottom: 20px">
      <view>
        <img style="height: 200px;margin-right: 10px;width: 130px;border-radius: 5px"
             src="https://i0.imgs.ovh/2024/02/20/oNAmK.jpeg" alt="">
      </view>
      <view class="flex-col" style="flex: 1">
        <text style="font-size: 18px;font-weight: bold">逃出迷雾镇</text>
        <text style="font-size: 16px;color: #5b5b5b">玩聚俱乐部</text>
        <text style="font-size: 16px;font-weight: bold">108元/位</text>
        <text style="font-size: 16px;color: #5b5b5b">2男2女   3-4h   进阶   18+</text>
        <view>
          <text style="border: 2px solid #ee2121;padding: 6px 15px;margin-right: 20px">想玩</text>
          <text style="border: 2px solid #ee2121;padding: 6px 15px">想玩</text>
        </view>
      </view>
    </view>
    <text style="font-size: 18px;">
      剧本简介
    </text>
    <br>
    <text style="font-size: 14px;">
      2009年，某国的三线城市德宁，一名普通的化学老师放学后失踪。调查这起案件的警察毫无进展，但却因此追查到了另外三个毫无联系的案件，之后他也下落不明，为寻找至亲，抑或为自我救赎，四个互不相知的普通人走到一起，他们...
    </text>
    <view class="flex-row" style="align-items: center;margin-top: 20px;margin-bottom: 20px">
      <img style="margin: 0 10px;width:30px;height:30px;" src="https://img95.699pic.com/element/40033/3359.png_860.png"
           alt="">
      <view class="flex-col">
        <text>Demo沉浸式剧本杀</text>
        <text>上海市虹口区东江湾路188号D栋326</text>
      </view>
      <view style="width: 50px"></view>
    </view>

    <text style="font-size: 18px;padding: 30px 0">本店正在拼的场</text>
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
          <view class="progress" style="width: 60%;background:#eea405"></view>
        </view>
      </view>
    </view>

    <view class="flex-row" style="overflow:auto;">

      <view class="flex-col" style="margin: 5px 8px;align-items: center">
        <img style="width: 110px;height: 160px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oalVX.jpeg"
             alt="">
        <text>诡异深林</text>
      </view>
      <view class="flex-col" style="margin: 5px 8px;align-items: center">
        <img style="width: 110px;height: 160px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oalVX.jpeg"
             alt="">
        <text>诡异深林</text>
      </view>
      <view class="flex-col" style="margin: 5px 8px;align-items: center">
        <img style="width: 110px;height: 160px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oalVX.jpeg"
             alt="">
        <text>诡异深林</text>
      </view>
      <view class="flex-col" style="margin: 5px 8px;align-items: center">
        <img style="width: 110px;height: 160px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oalVX.jpeg"
             alt="">
        <text>诡异深林</text>
      </view>
      <view class="flex-col" style="margin: 5px 8px;align-items: center">
        <img style="width: 110px;height: 160px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oalVX.jpeg"
             alt="">
        <text>诡异深林</text>
      </view>
      <view class="flex-col" style="margin: 5px 8px;align-items: center">
        <img style="width: 110px;height: 160px;border-radius: 5px" src="https://i0.imgs.ovh/2024/02/20/oalVX.jpeg"
             alt="">
        <text>诡异深林</text>
      </view>
    </view>
  </view>
  <view style="align-items: center;background: whitesmoke;width: 100%;height:80px;position: fixed;bottom: 0;border-radius: 0 0 10px 10px;text-align: center;line-height: 80px;font-size: 20px;font-weight: bold" @click="tosuccess()">
    <text style="background: #FFD468;padding: 15px 80px;border-radius: 100px;margin-top: 20px" @click="dissolution()">预约该剧本</text>
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
</style>
