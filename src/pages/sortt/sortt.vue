<template>
  <view style="padding: 0 10px 10px 10px">
    <fui-segmented-control style="width: 94%" @click="change"  radius="100" :values="values"></fui-segmented-control>
  <jubenItem v-if="show===0"></jubenItem>
    <jifenItem v-else-if="show===1"></jifenItem>
    <zhuchiItem v-else-if="show===2"></zhuchiItem>
  </view>
</template>
<script setup>

import {ref} from "vue";
import FuiSegmentedControl from "../../componets/firstui/fui-segmented-control/fui-segmented-control.vue";
import JubenItem from "../../componets/jubenItem.vue";
import JifenItem from "../../componets/jifenItem.vue";
import ZhuchiItem from "../../componets/zhuchiItem.vue";

const values=ref([{
      id: 1,
      name: '剧本热度榜'
    }, {
      id: 2,
      name: '积分排行榜'
    }, {
      id: 3,
      name: '主持人热度榜'
    }])


const show = ref(0)
function change(tab) {
  console.log(tab)
  show.value = tab.index
}
</script>


<style scoped>

</style>
