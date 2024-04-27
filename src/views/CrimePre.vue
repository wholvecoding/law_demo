<script>
import {defineComponent} from 'vue'

export default {
  name: "CrimePre",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'case') {
        if(this.$route.path !== '/crimeP/case'){
          this.$router.push('/crimeP/case');
        }
      }
      if (tab.name === 'vault') {
        if(this.$route.path !== '/crimeP/vault'){
          this.$router.push('/crimeP/vault');
        }
      }
      if (tab.name === 'educ') {
        if(this.$route.path !== '/crimeP/educ'){
          this.$router.push('/crimeP/educ');
        }
      }
      if (tab.name === 'integrity') {
        if(this.$route.path !== '/crimeP/integrity'){
          this.$router.push('/crimeP/integrity');
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
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="案例库" name="case">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="风险库" name="vault"></el-tab-pane>
      <el-tab-pane label="警示教育" name="educ"></el-tab-pane>
      <el-tab-pane label="廉洁从检" name="integrity"></el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>