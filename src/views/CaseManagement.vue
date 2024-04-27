<script>
import {defineComponent} from 'vue'

export default {
  name: "CaseManagement",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'documentProduction') {
        if(this.$route.path !== '/cm/dp'){
          this.$router.push('/cm/dp');
        }
      }
      if (tab.name === 'electronicFile') {
        if(this.$route.path !== '/cm/ef'){
          this.$router.push('/cm/ef');
        }
      }
      if (tab.name === 'evidenceManagement') {
        if(this.$route.path !== '/cm/em'){
          this.$router.push('/cm/em');
        }
      }
      if (tab.name === 'subjectInfo') {
        if(this.$route.path !== '/cm/si'){
          this.$router.push('/cm/si');
        }
      }



    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="文书制作" name="documentProduction">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="电子卷宗" name="electronicFile"></el-tab-pane>
      <el-tab-pane label="证据管理" name="evidenceManagement"></el-tab-pane>
      <el-tab-pane label="主体信息" name="subjectInfo"></el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>