<template>
  <div class="box-left-card">
    <section>
      <div>较上日+ {{ store.chinaAdd.localConfirmH5 }}</div>
      <div>{{ store.chinaTotal.localConfirm }}</div>
      <div>本土现有确诊</div>
    </section>
    <section>
      <div>较上日+ {{ store.chinaAdd.nowConfirm }}</div>
      <div>{{ store.chinaTotal.nowConfirm }}</div>
      <div>现有确诊</div>
    </section>
    <section>
      <div>较上日+ {{ store.chinaAdd.confirm }}</div>
      <div>{{ store.chinaTotal.confirm }}</div>
      <div>累计确诊</div>
    </section>
    <section>
      <div>较上日+ {{ store.chinaAdd.noInfect }}</div>
      <div>{{ store.chinaTotal.noInfect }}</div>
      <div>无症状感染者</div>
    </section>
    <section>
      <div>较上日+ {{ store.chinaAdd.importedCase }}</div>
      <div>{{ store.chinaTotal.importedCase }}</div>
      <div>境外输入</div>
    </section>
    <section>
      <div>较上日+ {{ store.chinaAdd.dead }}</div>
      <div>{{ store.chinaTotal.dead }}</div>
      <div>累计死亡</div>
    </section>
  </div>
  <div class="box-left-pie"></div>
  <div class="box-left-line"></div>
</template>

<script setup lang="ts">
import { useStore } from '../stores'
import { onMounted } from 'vue'
import * as echarts from 'echarts' //echarts 5
const store = useStore()

onMounted(async () => {
  await store.getList()
  // initCharts()
  initPie()
  initLine()
})

const initPie = () => {
  const charts = echarts.init(
    document.querySelector('.box-left-pie') as HTMLElement
  )
  charts.setOption({
    backgroundColor: '#223651',
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 4,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '15',
          },
        },
        data: store.cityDetail.map((v) => {
          return {
            name: v.city,
            value: v.nowConfirm,
          }
        }),
      },
    ],
  })
}

const initLine = () => {
  const charts = echarts.init(
    document.querySelector('.box-left-line') as HTMLElement
  )
  charts.setOption({
    backgroundColor: '#223651',
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: store.cityDetail.map((v) => v.city),
      axisLine: {
        lineStyle: {
          color: '#fff',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#fff',
        },
      },
    },
    label: {
      show: true,
    },
    series: [
      {
        data: store.cityDetail.map((v) => v.nowConfirm),
        type: 'line',
        smooth: true,
      },
    ],
  })
}
</script>
<style lang="less" scoped>
</style>
