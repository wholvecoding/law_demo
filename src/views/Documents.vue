<script>
import {defineComponent} from 'vue'

export default {
  name: "Documents",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'receipt') {
        if(this.$route.path !== '/doc/receipt'){
          this.$router.push('/doc/receipt');
        }
      }
      if (tab.name === 'post') {
        if(this.$route.path !=='/doc/post'){
          this.$router.push('/doc/post');
        }
      }
      if (tab.name === 'sign') {
        if(this.$route.path !== '/doc/sign'){
          this.$router.push('/doc/sign');
        }
      }
    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="我的收文" name="receipt">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="我的发文" name="post"></el-tab-pane>
      <el-tab-pane label="签收公文" name="sign"></el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>