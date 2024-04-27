<script>
import {defineComponent} from 'vue'

export default {
  name: "InfoRel",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'notify') {
        if(this.$route.path !== '/ir/notify'){
          this.$router.push('/ir/notify');
        }
      }
      if (tab.name === 'announce') {
        if(this.$route.path !== '/ir/announce'){
          this.$router.push('/ir/announce');
        }
      }
      if (tab.name === 'news') {
        if(this.$route.path !== '/ir/news'){
          this.$router.push('/ir/news');
        }
      }
    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="通知" name="notify">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="公告" name="announce"></el-tab-pane>
      <el-tab-pane label="新闻" name="news"></el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>