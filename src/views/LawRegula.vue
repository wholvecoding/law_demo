<script>
import {defineComponent} from 'vue'

export default {
  name: "LawRegula",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'law') {
        if(this.$route.path !== '/lr/law'){
          this.$router.push('/lr/law');
        }
      }
      if (tab.name === 'inter') {
        if(this.$route.path !== '/lr/inter'){
          this.$router.push('/lr/inter');
        }
      }
      if (tab.name === 'reg') {
        if(this.$route.path !== '/lr/reg'){
          this.$router.push('/lr/reg');
        }
      }
      if (tab.name === 'normal') {
        if(this.$route.path !== '/lr/normal'){
          this.$router.push('/lr/normal');
        }
      }  if (tab.name === 'policy') {
        if(this.$route.path !== '/lr/policy'){
          this.$router.push('/lr/policy');
        }
      }
      if (tab.name === 'other') {
        if(this.$route.path !== '/lr/other'){
          this.$router.push('/lr/other');
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
      <el-tab-pane label="法律" name="law">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="司法解释" name="inter"></el-tab-pane>
      <el-tab-pane label="行政规章" name="reg"></el-tab-pane>
      <el-tab-pane label="规范性文件" name="normal"></el-tab-pane>
      <el-tab-pane label="政策性文件" name="policy"></el-tab-pane>
      <el-tab-pane label="其他文件" name="other"></el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>