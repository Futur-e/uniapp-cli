<template>
  <view >

  </view>

</template>

<script setup>

import {onLoad} from "@dcloudio/uni-app";
import {getVideoList} from "../../api/api";

onLoad(()=>{
  getVideoList().then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    }
)
</script>

<style scoped>

</style>
