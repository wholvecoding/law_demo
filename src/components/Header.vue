<script >

export default {
  name : 'Header'
 }
</script>

<template>
  <div style="line-height: 50px;width: 100vw; ">
    <el-header style=" text-align: right; font-size: 18px; padding: 10px; display: flex;justify-content: flex-end ">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu v-slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小波</span>
    </el-header>
  </div>

</template>

<style scoped>

</style>