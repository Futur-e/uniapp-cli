<template>
  <view style="padding: 0 10px 10px 10px">
    <fui-segmented-control style="width: 94%" @click="change"  radius="100" :values="values"></fui-segmented-control>
    <zhuchiItem v-if="show===0"></zhuchiItem>
    <bujuItem v-else-if="show===1"></bujuItem>
  </view>
</template>
<script setup>

import {ref} from "vue";
import FuiSegmentedControl from "../../componets/firstui/fui-segmented-control/fui-segmented-control.vue";
import JubenItem from "../../componets/jubenItem.vue";
import JifenItem from "../../componets/jifenItem.vue";
import ZhuchiItem from "../../componets/zhuchiItem.vue";
import BujuItem from "../../componets/bujuItem.vue";

const values=ref([{
  id: 1,
  name: '我参加的'
}, {
  id: 2,
  name: '我布局的'
}])


const show = ref(0)
function change(tab) {
  console.log(tab)
  show.value = tab.index
}
</script>


<style scoped>

</style>
