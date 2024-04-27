<script>
import {defineComponent} from 'vue'

export default {
  name: "evidence",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'physical') {
        if(this.$route.path !== '/evi/physical'){
          this.$router.push('/evi/physical');
        }
      }
    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="物证管理" name="physical">
        <router-view/>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>