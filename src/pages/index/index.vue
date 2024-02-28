<template>
  <view class="home_box" :style="{paddingTop:+systemBarHeight1+'px',height:+h+'px'  ,backgroundImage: 'url('+imageURL+')'}">
    <view style="display: flex;align-items: center" @click="showPopup()">
      <img style="margin: 0 10px;width:20px;height:20px;" src="../../static/img/position.png" alt="">
      <text style="color:white;margin-right: 10px">Demo沉浸式剧本杀</text>
      <text style="padding: 4px;background: white;color: black">正版联盟</text>
    </view>
    <view style="display: flex;align-items: center;justify-content: center">
      <img style="height: 140px;width: 100%" src="https://i0.imgs.ovh/2024/02/19/oEb7p.gif" alt="">
    </view>
    <view style="margin-left: 10px;margin-top:10px;display: flex;justify-content: space-around;width: 250px">
      <text style="border-radius: 100px;background: white;padding: 3px 10px;font-size: 14px;font-weight: bold">普通会员</text>
      <text style="border-radius: 100px;background: white;padding: 3px 10px;font-size: 14px;font-weight: bold">余额：0.0</text>
      <text style="border-radius: 100px;background: white;padding: 3px 10px;font-size: 14px;font-weight: bold" @click="showPopup1()">联系店家</text>
    </view>
    <view class="fw">
      <img style="width:35px;height:35px" src="https://i0.imgs.ovh/2024/02/19/oE6AX.gif" alt="">
      <text style="font-size: 12px;color: white;width: 150px">请问你是男生女生？</text>
      <text style="font-size: 12px;color: white;border: 1px solid white;border-radius: 3px;padding:3px 6px" @click="showalter()">小哥哥</text>
      <text style="margin-right: 20px;font-size: 12px;color: white;border: 1px solid white;border-radius: 3px;padding:3px 6px" @click="showalter()">小姐姐</text>
    </view>
    <view class="fw">
      <view @click="toJuben" class="p_box" style="width: 50%;border-radius: 10px;padding-top: 15px;height: 200px;background: whitesmoke">
        <text style="font-weight: bold;padding: 10px;margin-top: 15px">剧本列表  ></text>
        <br>
        <text style="font-size: 12px;color: #a8a8a8;padding: 10px;">立即开启一段美妙的征程</text>
        <img class="pp_img" style="width: 130px;height: 120px;bottom:30px;left:35px" src="https://i0.imgs.ovh/2024/02/19/oEf8s.png" alt="">
        <img class="pp_img" style="width: 110%;height: 215px;bottom:-6px;left: -6px" src="https://i0.imgs.ovh/2024/02/19/oEIWt.png" alt="">
      </view>
      <view class="fl" style="height: 215px;width: 48%">
        <view style="width: 100%;border-radius: 10px;padding-top: 15px;height: 100px;background: whitesmoke">
          <view style="display: flex;" @click="tocart">
            <view>
              <text style="font-weight: bold;padding: 10px;margin-top: 15px">发车啦  ></text>
              <br>
              <text style="font-size: 12px;color: #a8a8a8;padding: 10px;">快来加入缺人车队</text>
            </view>
            <img style="width: 50px;height: 50px" src="https://i0.imgs.ovh/2024/02/19/oEWsU.png" alt="">
          </view>
          <view>

            <img style="width: 30px;height: 30px;border-radius: 100px" src="https://i0.imgs.ovh/2024/02/19/oq9sX.jpeg" alt="">
            <img style="width: 30px;height: 30px;border-radius: 100px" src="https://i0.imgs.ovh/2024/02/19/oq9sX.jpeg" alt="">
            <img style="width: 30px;height: 30px;border-radius: 100px" src="https://i0.imgs.ovh/2024/02/19/oq9sX.jpeg" alt="">
            <img style="width: 30px;height: 30px;border-radius: 100px" src="https://i0.imgs.ovh/2024/02/19/oq9sX.jpeg" alt="">
            <img style="width: 30px;height: 30px;border-radius: 100px" src="https://i0.imgs.ovh/2024/02/19/oq9sX.jpeg" alt="">

          </view>
        </view>
        <view @click="tosort" class="p_box" style="width: 100%;border-radius: 10px;padding-top: 15px;height: 70px;background: whitesmoke">
          <view style="display: flex">
            <view>
              <text style="font-weight: bold;padding: 10px;margin-top: 15px" >排行榜单  ></text>
              <br>
              <text style="font-size: 12px;color: #a8a8a8;padding: 10px;">快来看看你的排名</text>
            </view>
            <img style="width: 50px;height: 50px" src="https://i0.imgs.ovh/2024/02/19/oEBVC.png" alt="">
          </view>
          <img class="pp_img" style="bottom: 0px;width: 100%;height: 100px" src="../../static/img/11-35-37.png" alt="">
        </view>
      </view>
    </view>
    <view class="p_box" style="height: 50px;width: 95%;border-radius: 6px;background: white;margin:20px auto 10px">
      <view style="overflow: hidden">
        <view class="text">我们的小程序上线了</view>
      </view>
      <text class="pp_img" style="left: 10px;background: #282828;color: #E8B756;padding: 5px;border-radius: 4px 0 4px 0;font-size: 12px;top:-10px">最新情报</text>
    </view>

    <view class="fw" style="width: 90%;margin: auto;border-radius: 10px;background: white;height: 90px;">
      <view>
        <view>
          <text style="border: 1px solid red;color: red;font-size: 10px">NEW</text>
          <text style="color: red;font-size: 12px">新本上架</text>
        </view>
        <view class="fw" style="padding: 0;">
          <view >
            <text style="font-size: 16px">芸芸</text>
            <br>
            <text style="color: #808080;font-size: 14px">三十，北道河,村里出了个杀人魔。</text>
          </view>
        </view>
      </view>
      <img style="height: 60px;width: 40px;border-radius: 6px" src="https://i0.imgs.ovh/2024/02/19/oq9sX.jpeg" alt="">
    </view>

    <view class="fw">
      <view style="width: 31%" @click="todetail">
        <view class="p_box" >
          <img  style="width: 100%;border-radius: 10px 10px 0 0;height: 150px" src="https://zhongces3.sina.com.cn/product/20200130/635454fcbd6ac14bea63ecf116fe0d29.jpeg" alt="">
          <text class="pp_img" style="font-size: 14px;bottom: 3.6px;left: 0px;background: white;color:#F75858;padding: 4px 10px;border-radius: 0 100px 0 0 ">DM推荐</text>
        </view>
        <view style="background: white;margin-top: -5.5px;padding: 10px 6px" class="fl">
          <text>告别诗</text>
          <text style="color: #545454;font-size: 14px">你有没.</text>
        </view>
      </view>
      <view style="width: 31%" @click="todetail">
        <view class="p_box" >
          <img class="" style="width: 100%;border-radius: 10px 10px 0 0;height: 150px" src="https://zhongces3.sina.com.cn/product/20200130/635454fcbd6ac14bea63ecf116fe0d29.jpeg" alt="">
          <text class="pp_img" style="font-size: 14px;bottom: 3.6px;left: 0px;background: white;color:#F75858;padding: 4px 10px;border-radius: 0 100px 0 0 ">DM推荐</text>
        </view>
        <view style="background: white;margin-top: -5.5px;padding: 10px 6px" class="fl">
          <text>告别诗</text>
          <text style="color: #545454;font-size: 14px">你有没.</text>
        </view>
      </view>
      <view style="width: 31%" @click="todetail">
      <view class="p_box" >
        <img class="" style="width: 100%;border-radius: 10px 10px 0 0;height: 150px" src="https://zhongces3.sina.com.cn/product/20200130/635454fcbd6ac14bea63ecf116fe0d29.jpeg" alt="">
        <text class="pp_img" style="font-size: 14px;bottom: 3.6px;left: 0px;background: white;color:#F75858;padding: 4px 10px;border-radius: 0 100px 0 0 ">DM推荐</text>
      </view>
      <view style="background: white;margin-top: -5.5px;padding: 10px 6px" class="fl">
        <text>告别诗</text>
        <text style="color: #545454;font-size: 14px">你有没.</text>
      </view>
    </view>
    </view>

    <view class="fl" style="width: 96%;margin: 10px auto 0;background: white;border-radius: 10px;padding: 15px 0">
        <view class="fw">
          <text style="font-size: 18px;">本店主持人</text>
          <text style="font-size: 14px;color: #a9a9a9">更多  ></text>
        </view>
      <view class="fw" >
        <view class="fl" style="width: 31%">
          <img style="border-radius: 10px;width: 100%;height: 150px"  src="https://zhongces3.sina.com.cn/product/20200130/635454fcbd6ac14bea63ecf116fe0d29.jpeg" alt="">
          <text>圈圈</text>
        </view>
        <view class="fl" style="width: 31%">
          <img style="border-radius: 10px;width: 100%;height: 150px"  src="https://zhongces3.sina.com.cn/product/20200130/635454fcbd6ac14bea63ecf116fe0d29.jpeg" alt="">
          <text>圈圈</text>
        </view>
        <view class="fl" style="width: 31%">
          <img style="border-radius: 10px;width: 100%;height: 150px"  src="https://zhongces3.sina.com.cn/product/20200130/635454fcbd6ac14bea63ecf116fe0d29.jpeg" alt="">
          <text>圈圈</text>
        </view>
      </view>
    </view>
<!--    弹出层-->
    <fui-bottom-popup :show="show" @close="closePopup">
      <view class="fui-scroll__wrap">
        <view class="fui-title">更换门店</view>
        <scroll-view scroll-y class="fui-scroll__view">
          <view class="fw">
            <img style="width: 50px;height: 50px" src="https://i0.imgs.ovh/2024/02/19/oq9sX.jpeg" alt="">
            <view class="fl">
              <text style="font-size: 16px;font-weight: bolder">Demo沉浸式剧本杀 <text style="color: red">（距离最近）</text></text>
              <text style="font-size: 14px;color: #5b5b5b">上海市虹口</text>
            </view>
            <view>
              <text style="font-size: 14px;color: #5b5b5b">169公里</text>
              <text style="font-size: 14px;color: #ffffff;border-radius: 5px;background: black;padding: 5px">当前</text>
            </view>
          </view>
        </scroll-view>
        <view class="fui-icon__close" @tap="closePopup">
          <fui-icon name="close" :size="48"></fui-icon>
        </view>
      </view>
    </fui-bottom-popup>
    <!--    联系店家弹出层-->
    <fui-bottom-popup :show="show1" @close="closePopup1">
      <view class="fui-scroll__wrap">
        <view class="fui-title">门店信息</view>
        <scroll-view scroll-y class="fui-scroll__view">
          <view class="fl" style="align-items: center">
            <text>长按二维码即可添加店家微信</text>
            <img style="width: 200px;height: 200px;margin-top: 20px" src="https://i0.imgs.ovh/2024/02/19/oq9sX.jpeg" alt="">
            <view class="fw" style="width: 300px;margin-top: 30px">
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
const show = ref(false)
const show1 = ref(false)
const ind = ref(0)

const change = (k)=> {
  ind.value = k.index

}

function showPopup(type) {
  show.value = true
}
function closePopup(type) {
  show.value = false
}
function showPopup1(type) {
  show1.value = true
}
function closePopup1(type) {
  show1.value = false
}

// 提醒店家
function showalter() {
  uni.showToast({
    title: '已经提醒店家',
    icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
    duration: 2000    //持续时间为 2秒
  })
}
// 跳转到剧本列表
function toJuben() {
  uni.navigateTo({
    url:'/pages/tool/tool'
  })
}
// 跳转到发车啦
function tocart() {
  uni.navigateTo({
    url:'/pages/cart/cart'
  })
}
// 跳转到排行榜
function tosort() {
  uni.navigateTo({
    url:'/pages/sortt/sortt'
  })
}
// 跳转到剧本详情
function todetail() {
  uni.navigateTo({
    url:'/pages/detail/detail'
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
  return screnheight.value + 310
})
const systemBarHeight1 = computed(()=>{
  return systemBarHeight.value
})
</script>

<style scoped>
.fw{
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

}
.fl{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.salebox::after{
  content: '';
  width: 50%;
}
.home_box{
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height:100%;
}
.p_box{
  position: relative;
}
.pp_img{
  position: absolute;
}
.text {
  width: 98%;
  height: 40px;
  line-height: 60px;
  overflow: hidden;
  font-size: 16px;
  color: #000;
  animation: aniMove 6s linear infinite;
  animation-fill-mode: forwards;
}
/* 文字滚动 */
@keyframes aniMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
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
