<script>
import {defineComponent} from 'vue'

export default {
  name: "PerDes",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'handleReminder') {
        if(this.$route.path !== '/pd/hr'){
          this.$router.push('/pd/hr');
        }
      }
      if (tab.name === 'caseSum') {
        if(this.$route.path !== '/pd/cs'){
          this.$router.push('/pd/cs');
        }
      }
      if (tab.name === 'commonProcess') {
        if(this.$route.path !== '/pd/cp'){
          this.$router.push('/pd/cp');
        }
      }
      if (tab.name === 'departManage') {
        if(this.$route.path !== '/pd/dm'){
          this.$router.push('/pd/dm');
        }
      }  if (tab.name === 'thingsToRead') {
        if(this.$route.path !== '/pd/ttr'){
          this.$router.push('/pd/ttr');
        }
      }
      if (tab.name === 'toDoList') {
        if(this.$route.path !== '/pd/tdl'){
          this.$router.push('/pd/tdl');
        }
      }

      if (tab.name === 'workNotes') {
        if(this.$route.path !== '/pd/wn'){
          this.$router.push('/pd/wn');
        }
      }
    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw; " @tab-click="handleTabClick">
      <el-tab-pane label="办理提醒" name="handleReminder">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="待办事项" name="toDoList"></el-tab-pane>
      <el-tab-pane label="待阅事项" name="thingsToRead"></el-tab-pane>
      <el-tab-pane label="常用流程" name="commonProcess"></el-tab-pane>
      <el-tab-pane label="部门管理" name="departManage"></el-tab-pane>
      <el-tab-pane label="工作便笺" name="workNotes"></el-tab-pane>
      <el-tab-pane label="结案统计" name="caseSum"></el-tab-pane>
    </el-tabs>
  </div>


</template>

<style scoped>

</style>