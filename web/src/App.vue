<template>
  <div :style="{ background: `url(${bg})` }" class="box">
    <!-- 左侧数据展示区域 -->
    <div style="color: white" class="box-left">
     <Left></Left>
    </div>
    <!-- 中间地图展示部分 -->
    <div id="china" class="box-center">
      <Middle></Middle>
    </div>
    <!-- 右侧列表区域  -->
    <div>
      <Right></Right>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入右侧列表组件
import Left from './components/LeftCharts.vue'
import Right from './components/RightCharts.vue'
import Middle from './components/MiddleMap.vue'
import bg from './assets/1.jpg'
import './assets/china'

</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
@itemColor: #41b0db;
@itemBg: #223651;
@itemBorder: #212028;
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
.box {
  height: 100%;
  display: flex;
  overflow: hidden;
  padding: 10px;
  &-left {
    width: 400px;
    &-pie {
      height: 320px;
      margin-top: 20px;
    }
    &-line {
      height: 320px;
      margin-top: 20px;
    }
    &-card {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto;
      section {
        background: @itemBg;
        border: 1px solid @itemBorder;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        div:nth-child(2) {
          color: @itemColor;
          padding: 10px 0;
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
  &-center {
    flex: 1;
  }
  &-right {
    width: 450px;
  }
}
</style>
