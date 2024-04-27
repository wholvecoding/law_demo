<script>
import {defineComponent} from 'vue'

export default {
  name: "Execution",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'prosecution') {
        if(this.$route.path !== '/exec/prosecution'){
          this.$router.push('/exec/prosecution');
        }
      }
      if (tab.name === 'protest') {
        if(this.$route.path !== '/exec/protest'){
          this.$router.push('/exec/protest');
        }
      }
      if (tab.name === 'seizure') {
        if(this.$route.path !== '/exec/seizure'){
          this.$router.push('/exec/seizure');
        }
      }
      if (tab.name === 'attach') {
        if(this.$route.path !== '/exec/attach'){
          this.$router.push('/exec/attach');
        }
      }
      if (tab.name === 'attach') {
        if(this.$route.path !== '/exec/attach'){
          this.$router.push('/exec/attach');
        }
      }
      if (tab.name === 'freeze') {
        if(this.$route.path !== '/exec/freeze'){
          this.$router.push('/exec/freeze');
        }
      }

      if (tab.name === 'export') {
        if(this.$route.path !== '/exec/export'){
          this.$router.push('/exec/export');
        }
      }
      if (tab.name === 'filter') {
        if(this.$route.path !== '/exec/filter'){
          this.$router.push('/exec/filter');
        }
      }
    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="公诉申请" name="prosecution">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="抗诉申请" name="protest"></el-tab-pane>
      <el-tab-pane label="查封申请" name="seizure"></el-tab-pane>
      <el-tab-pane label="扣押申请" name="attach"></el-tab-pane>
      <el-tab-pane label="冻结申请" name="freeze"></el-tab-pane>
      <el-tab-pane label="批量导出" name="export"></el-tab-pane>
      <el-tab-pane label="条件筛选" name="filter"></el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>