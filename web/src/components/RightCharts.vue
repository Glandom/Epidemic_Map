<template>
  <!-- 右侧列表区域 -->
  <div style="color: white" class="box-right">
    <table class="table" cellspacing="0" border="1">
      <thead>
        <tr>
          <th>地区</th>
          <th>新增确诊</th>
          <th>累计确诊</th>
          <th>治愈</th>
          <th>死亡</th>
        </tr>
      </thead>
      <transition-group
        enter-active-class="animate__animated animate__flipInY"
        tag="tbody"
      >
        <tr :key="item.name" v-for="(item, index) in store.item">
          <td align="center">{{ item.name }}</td>
          <td align="center">{{ item.today.confirm }}</td>
          <td align="center">{{ item.total.confirm }}</td>
          <td align="center">{{ item.total.heal }}</td>
          <td align="center">{{ item.total.dead }}</td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from '../stores'
import 'animate.css'
const store = useStore()

onMounted(async () => {
  await store.getList()
})
</script>
<style lang="less" scoped>
.box-right {
  width: 450px;
}
.table {
  width: 100%;
  background: #212028;
  tr {
    th {
      padding: 5px;
      white-space: nowrap;
    }
    td {
      padding: 5px 10px;
      width: 100px;
      white-space: nowrap;
    }
  }
}
</style>
