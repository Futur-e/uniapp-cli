<template>
  <view class="home_box" :style="{paddingTop:+systemBarHeight1+'px',height:+h+'px',backgroundImage: 'url('+imageURL+')'}">
    <view class="flex-row" style="width: 50%;padding-left: 20px">
      <img src="https://i0.imgs.ovh/2024/02/19/oq9sX.jpeg" alt="" style="width: 50px;height: 50px;border-radius: 100px">
      <view class="flex-col" style="font-weight: bold">
        <text style="font-size: 16px; color: #383838">11</text>
        <text style="font-size: 14px;color: #383838">玩家ID:207892175</text>
      </view>
    </view>
    <view class="flex-row" style="padding: 20px;width: 100%;height: 40px;font-size: 13px;font-weight: bold; color: #383838">
      <view class="flex-col" style="width: 23%;align-items: center">
        <text>0</text>
        <text>狼人杀积分</text>
      </view>
      <view class="flex-col" style="width: 23%;align-items: center">
        <text>0</text>
        <text>剧本积分</text>
      </view>
      <view class="flex-col" style="width: 23%;align-items: center">
        <text>0.00</text>
        <text>余额</text>
      </view>
      <view class="flex-col" style="width: 23%;align-items: center;margin-right: 20px">
        <img style="width: 40px;height: 40px" src="https://tse2-mm.cn.bing.net/th/id/OIP-C.Fd1Vav7LACAHYUbPuIci0QHaHa?rs=1&pid=ImgDetMain" alt="">
      </view>
    </view>

    <view style="background: rgba(245,245,245,0.7);padding: 10px 20px" >
      <view class="flex-row">
        <view class="flex-col" @click="tobuy()" style="align-items: center">
          <img style="width: 35px;height:35px;border-radius: 100px" src="https://image.caiyunyi.com/image/20201204/17133511b76beb01cb95dfec8658cbf5.png" alt="">
          <text>买单</text>
        </view>
        <view class="flex-col" style="align-items: center">
          <img style="width: 35px;height:35px;border-radius: 100px" src="https://image.caiyunyi.com/image/20201204/17133511b76beb01cb95dfec8658cbf5.png" alt="">
          <text>买单</text>
        </view>
        <view class="flex-col" style="align-items: center">
          <img style="width: 35px;height:35px;border-radius: 100px" src="https://image.caiyunyi.com/image/20201204/17133511b76beb01cb95dfec8658cbf5.png" alt="">
          <text>买单</text>
        </view>
        <view class="flex-col" style="align-items: center">
          <img style="width: 35px;height:35px;border-radius: 100px" src="https://image.caiyunyi.com/image/20201204/17133511b76beb01cb95dfec8658cbf5.png" alt="">
          <text>买单</text>
        </view>
      </view>
      <view>
            <view @click="toyuyue" class="flex-row" style="align-items: center;margin: 10px 0 5px">
              <view class="flex-row" style="align-items: center;">
                <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/4c3f579d04a789feaff99ac629e4c4cf.png" alt="">
                <text style="margin-left: 10px">我的预约</text>
              </view>
              <text> > </text>
            </view>
        <view @click="toquan" class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/7bcae6627d3dd724455e23a99cbaf250.png" alt="">
            <text style="margin-left: 10px">我的优惠券</text>
          </view>
          <text> > </text>
        </view>
        <view class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/4c3f579d04a789feaff99ac629e4c4cf.png" alt="">
            <text style="margin-left: 10px">我的资金明细</text>
          </view>
          <text> > </text>
        </view>
        <view class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/4c3f579d04a789feaff99ac629e4c4cf.png" alt="">
            <text style="margin-left: 10px">普通组局</text>
          </view>
          <text> > </text>
        </view>
        <view @click="toxiangwan" class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/5b526e6ddadb4c825afd1fdc457ac284.png" alt="">
            <text style="margin-left: 10px">我想玩的本</text>
          </view>
          <text> > </text>
        </view>
        <view class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/17133511b76beb01cb95dfec8658cbf5.png" alt="">
            <text style="margin-left: 10px">我玩过的本</text>
          </view>
          <text> > </text>
        </view>
        <view class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/4c3f579d04a789feaff99ac629e4c4cf.png" alt="">
            <text style="margin-left: 10px">时间线工具</text>
          </view>
          <text> > </text>
        </view>
        <view @click="showPopup1" class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/4c3f579d04a789feaff99ac629e4c4cf.png" alt="">
            <text style="margin-left: 10px">联系我们</text>
          </view>
          <text> > </text>
        </view>
        <view class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/4c3f579d04a789feaff99ac629e4c4cf.png" alt="">
            <text style="margin-left: 10px">设置</text>
          </view>
          <text> > </text>
        </view>
      </view>
    </view>
    <!--    联系店家弹出层-->
    <fui-bottom-popup :show="show1" @close="closePopup1">
      <view class="fui-scroll__wrap">
        <view class="fui-title">门店信息</view>
        <scroll-view scroll-y class="fui-scroll__view">
          <view class="flex-col" style="align-items: center">
            <text>长按二维码即可添加店家微信</text>
            <img style="width: 200px;height: 200px;margin-top: 20px" src="https://i0.imgs.ovh/2024/02/19/oq9sX.jpeg" alt="">
            <view class="flex-row" style="width: 300px;margin-top: 30px">
              <fui-button type="success" size="25" btn-size="small">复制微信号</fui-button>
              <fui-button type="success" size="25" btn-size="small">拨打电话</fui-button>
            </view>
          </view>
        </scroll-view>
        <view class="fui-icon__close" @tap="closePopup1">
          <fui-icon name="close" :size="48"></fui-icon>
        </view>
      </view>
    </fui-bottom-popup>
  </view>

</template>

<script setup>

import {computed, ref} from "vue";
import FuiIcon from "../../componets/firstui/fui-icon/fui-icon.vue";
import FuiBottomPopup from "../../componets/firstui/fui-bottom-popup/fui-bottom-popup.vue";
import FuiButton from "../../componets/firstui/fui-button/fui-button.vue";



const imageURL = ref("https://tse3-mm.cn.bing.net/th/id/OIP-C.r9gS5_TI9_ec-vbF6gEPMgHaO0?rs=1&pid=ImgDetMain")
const screnheight = ref()
const systemBarHeight = ref()
const ind = ref(0)
const show1 = ref(false)
function showPopup1(type) {
  show1.value = true
}
function closePopup1(type) {
  show1.value = false
}


// 跳转到剧本列表
function tobuy() {
  uni.navigateTo({
    url:'/pages/buy/buy'
  })
}// 跳转到我的预约
function toyuyue() {
  uni.navigateTo({
    url:'/pages/myyuyue/myyuyue'
  })
}// 跳转到我的预约
function toquan() {
  uni.navigateTo({
    url:'/pages/quant/quant'
  })
}// 跳转到我的想玩
function toxiangwan() {
  uni.navigateTo({
    url:'/pages/xiangwan/xiangwan'
  })
}


f()

function f() {
  uni.getSystemInfo({
    success: function (res) {
      console.log(res)
      screnheight.value = res.windowHeight
      systemBarHeight.value = res.statusBarHeight;
    }
  });
}
const h = computed(()=>{
  return screnheight.value
})
const systemBarHeight1 = computed(()=>{
  return systemBarHeight.value+70
})
</script>

<style scoped>
.home_box{
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height:100%;
}
.fui-scroll__wrap {
  padding-top: 30rpx;
  position: relative;
}
.fui-title {
  font-size: 30rpx;
  font-weight: bold;
  text-align: center;
  padding-bottom: 24rpx;
}
.fui-icon__close {
  position: absolute;
  top: 24rpx;
  left: 24rpx;
}

.fui-scroll__view {
  width: 100%;
  height: 600rpx;
}

</style>
