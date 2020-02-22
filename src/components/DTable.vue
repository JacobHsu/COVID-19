<template>
  <div class="table">
    <ul class="table-header">
      <li>日期</li>
      <li>确诊</li>
      <li>死亡</li>
      <li>治愈</li>
      <li>死亡率</li>
    </ul>
    <ul class="table-body">
      <li v-for="(item, index) in list" :key="index" class="table-province">
        <div>{{item.date}}</div>
        <div>{{item.confirm}}</div>
        <div>{{item.dead}}</div>
        <div>{{item.heal}}</div>
        <div>{{deathRate(item.dead, item.confirm)}}%</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { drop } from 'ramda';
export default {
  props: {
    data: [Object, Array],
    list: Object,
  },
  created () {
   this.list = drop(15, this.list)
  },
  methods: {
    deathRate: function (dead, confirm) {
      return Number(dead / confirm *100).toFixed(2);
    }
  }
}
</script>
