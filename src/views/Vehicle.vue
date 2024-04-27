<script>
import {defineComponent} from 'vue'

export default {
  name: "Vehicle",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'info') {
        if (this.$route.path !== '/veh/info') {
          this.$router.push('/veh/info');
        }
      }
      if (tab.name === 'rec') {
        if (this.$route.path !== '/veh/rec') {
          this.$router.push('/veh/rec');
        }
      }
      if (tab.name === 'appli') {
        if (this.$route.path !== '/veh/appli') {
          this.$router.push('/veh/appli');
        }
      }
      if (tab.name === 'fee') {
        if (this.$route.path !== '/veh/fee') {
          this.$router.push('/veh/fee');
        }
      }
      if (tab.name === 'stat') {
        if (this.$route.path !== '/veh/stat') {
          this.$router.push('/veh/stat');
        }
      }
    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="车辆信息" name="info">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="使用记录" name="rec">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="用车申请" name="appli"></el-tab-pane>
      <el-tab-pane label="车辆费用" name="fee"></el-tab-pane>
      <el-tab-pane label="报表统计" name="stat"></el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>