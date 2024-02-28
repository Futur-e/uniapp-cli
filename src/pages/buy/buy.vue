<template>
    <view style="height: 100vh;background: rgba(245,245,245,0.7);padding: 10px 20px" >
      <view style="height: 60vh" class="flex-col">
        <view class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/4c3f579d04a789feaff99ac629e4c4cf.png" alt="">
            <text style="margin-left: 10px">买单金额</text>
          </view>
          <view class="flex-row">
            <input v-model="price" style="width: 100px" type="text" placeholder="请输入金额"> 元
          </view>
        </view>
        <view class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/7bcae6627d3dd724455e23a99cbaf250.png" alt="">
            <text style="margin-left: 10px">门店</text>
          </view>
          <text> Demo沉浸式剧本杀 </text>
        </view>
        <view class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <img style="width: 30px;height: 30px" src="https://image.caiyunyi.com/image/20201204/4c3f579d04a789feaff99ac629e4c4cf.png" alt="">
            <text style="margin-left: 10px">我的资金明细</text>
          </view>
          <text> 暂无可用优惠券 </text>
        </view>
        <view class="flex-row" style="align-items: center;margin: 10px 0 5px">
          <view class="flex-row" style="align-items: center;">
            <text style="margin-left: 10px">我的余额(￥0.0)</text>
          </view>
          <view><fui-radio :value="value" checked @click="changevalue"></fui-radio></view>
        </view>
        <view>
          <text style="font-size: 14px;color: #606060">可使用余额进行混合支付，和店员确认后买单</text>
        </view>
        <view class="flex-col" style="height: 120px;align-items: center">
          <text style="font-size: 26px;color: red">￥{{price}}</text>
          <text style="font-size: 14px;color: #656565">实际支付金额</text>
          <fui-button radius="96rpx" background="#FF0000" width="200px" height="40px">立即支付</fui-button>
        </view>
      </view>
    </view>
</template>

<script setup>

import {computed, ref} from "vue";
import FuiRadio from "../../componets/firstui/fui-radio/fui-radio.vue";
import FuiButton from "../../componets/firstui/fui-button/fui-button.vue";


const value = ref(0)
const imageURL = ref("https://tse3-mm.cn.bing.net/th/id/OIP-C.r9gS5_TI9_ec-vbF6gEPMgHaO0?rs=1&pid=ImgDetMain")
const screnheight = ref()
const systemBarHeight = ref()
const price = ref('0.0')




// 跳转到剧本列表
function changevalue(e) {
  value.value===0?1:0
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
</style>
