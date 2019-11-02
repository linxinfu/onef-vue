<template>
  <div>
    {{message}}
    <div
      id="chart"
      style="height:400px;width:900px"
    ></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { login } from '@/api/user'
import * as pwd from '@/utils/password'
import echarts from 'echarts'

export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Welcome to ONEF!'
    }
  },
  methods: {
    ...mapActions(['saveUserInfo']),
    ...mapGetters(['userInfo']),
    requestTest () {
      login('admin', '123456').then((it) => {
        console.log(it)
      })
    },
    testSha256 () {
      var SHA256 = require('crypto-js/sha256')
      const hashDigest = SHA256('jdsaj', 'dsddsadsad').toString()
      console.log(hashDigest)
    },
    testGenKey () {
      let a = pwd.genKey(true, true, true, true, true, 20)
      console.log(a)
    },
    testEcharts () {
      let myChart = echarts.init(document.getElementById('chart'))
      let option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.saveUserInfo({ username: '张三', phone: '234' })
    var a = this.userInfo()
    this.testEcharts()
    console.log(a.username, a.phone)
  }
}
</script>

<style scoped>
</style>
