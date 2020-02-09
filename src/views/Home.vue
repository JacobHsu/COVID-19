<template>
  <div class="home">
    <div class="statement-title">全国疫情状况</div>
    <div class="update-time">截止 {{updateTime}}</div>
    <div class="statement" @click="handleModal"><span>数据说明</span></div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import buildMapData from '../data/map'
import EAlert from '../components/Alert'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      updateTime: ''
    }
  },
  methods: {

    handleModal () {
      EAlert({
        title: '数据说明',
        msg: `
          <div>
            <div>以下内容为腾讯数据声明：</div>
            <div>1. 全部数据来源于国家卫健委、各省卫健委以及权威媒体报道。</div><br>
            <div>2. 腾讯新闻的统计方法如下：</div>
            <div>
              a. 国家卫健委公布数据时，全国总数与国家卫健委保持一致。<br>
              b. 各省卫健委陆续公布数据，如果各省数据总和已经超过之前国家卫健委总数，则切换为直接使用各省数据总和。
            </div><br>
            <div>3. 国家卫健委及各省卫健委公布数据的发布时间和统计时间段各不相同，比如国家卫健委公布了最新全国数据，而各省还没有公布各自最新数据，故而会在部分时段出现国家总数不等于分省数据之和。</div>
          </div>
        `
      })
    }
  },
  created () {

    const {
      updateTime
    } = buildMapData()

    this.updateTime = updateTime

  }
}
</script>
