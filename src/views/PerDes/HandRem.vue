<script>
import {defineComponent} from 'vue'
export default defineComponent({
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.tableData = [
      { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弃' },
      { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弃' },
      { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弃' }
    ]
  }
})
</script>

<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="date"
        label="日期"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址">
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>