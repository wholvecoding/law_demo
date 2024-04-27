<script>
import {defineComponent} from 'vue'

export default {
  name: "Clue",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'regis') {
        if(this.$route.path !== '/clue/regis'){
          this.$router.push('/clue/regis');
        }
      }
      if (tab.name === 'class') {
        if(this.$route.path !== '/clue/class'){
          this.$router.push('/clue/class');
        }
      }
      if (tab.name === 'verify') {
        if(this.$route.path !== '/clue/verify'){
          this.$router.push('/clue/verify');
        }
      }
      if (tab.name === 'process') {
        if(this.$route.path !== '/clue/process'){
          this.$router.push('/clue/process');
        }
      }  if (tab.name === 'thingsToRead') {
        if(this.$route.path !== '/pd/ttr'){
          this.$router.push('/pd/ttr');
        }
      }
      if (tab.name === 'query') {
        if(this.$route.path !== '/clue/query'){
          this.$router.push('/clue/query');
        }
      }

      if (tab.name === 'statistic') {
        if(this.$route.path !== '/clue/statistic'){
          this.$router.push('/clue/statistic');
        }
      }
    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="线索登记" name="regis">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="线索分类" name="class"></el-tab-pane>
      <el-tab-pane label="线索核实" name="verify"></el-tab-pane>
      <el-tab-pane label="线索处理" name="process"></el-tab-pane>
      <el-tab-pane label="线索查询" name="query"></el-tab-pane>
      <el-tab-pane label="线索统计" name="statistic"></el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>