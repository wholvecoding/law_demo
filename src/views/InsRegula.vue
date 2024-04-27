<script>
import {defineComponent} from 'vue'

export default {
  name: "InsRegula",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'affair') {
        if(this.$route.path !== '/inr/affair'){
          this.$router.push('/inr/affair');
        }
      }
      if (tab.name === 'inssup') {
        if(this.$route.path !== '/inr/inssup'){
          this.$router.push('/inr/inssup');
        }
      }
      if (tab.name === 'release') {
        if(this.$route.path !== '/inr/release'){
          this.$router.push('/inr/release');
        }
      }
      if (tab.name === 'upload') {
        if(this.$route.path !== '/inr/upload'){
          this.$router.push('/inr/upload');
        }
      }  if (tab.name === 'transfer') {
        if(this.$route.path !== '/inr/transfer'){
          this.$router.push('/inr/transfer');
        }
      }
      if (tab.name === 'inquire') {
        if(this.$route.path !== '/inr/inquire'){
          this.$router.push('/inr/inquire');
        }
      }


    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="检务公开" name="affair">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="政治监督" name="inssup"></el-tab-pane>
      <el-tab-pane label="发布" name="release"></el-tab-pane>
      <el-tab-pane label="上传" name="upload"></el-tab-pane>
      <el-tab-pane label="转移" name="transfer"></el-tab-pane>
      <el-tab-pane label="查询" name=inquire></el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>