<script>
import {defineComponent} from 'vue'

export default {
  name: "Twoway",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'forward') {
        if(this.$route.path !== '/2w/fo'){
          this.$router.push('/2w/fo');
        }
      }
      if (tab.name === 'reverse') {
        if(this.$route.path !== '/2w/re'){
          this.$router.push('/2w/re');
        }
      }
    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="正向衔接" name="forward">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="反向衔接" name="reverse">
        <router-view/>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>