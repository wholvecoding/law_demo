<script>
import {defineComponent} from 'vue'

export default {
  name: "Conference",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'application') {
        if(this.$route.path !== '/confer/application'){
          this.$router.push('/confer/application');
        }
      }
      if (tab.name === 'toOpen') {
        if(this.$route.path !== '/confer/toOpen'){
          this.$router.push('/confer/toOpen');
        }
      }
      if (tab.name === 'record') {
        if(this.$route.path !== '/confer/record'){
          this.$router.push('/confer/record');
        }
      }
      if (tab.name === 'inquery') {
        if(this.$route.path !== '/confer/inquery'){
          this.$router.push('/confer/inquery');
        }
      }
    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="会议申请" name="application">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="代办会议" name="toOpen"></el-tab-pane>
      <el-tab-pane label="会议记录" name="record"></el-tab-pane>
      <el-tab-pane label="会议查询" name="inquery"></el-tab-pane>

    </el-tabs>

  </div>
</template>

<style scoped>

</style>