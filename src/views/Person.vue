<script>
import {defineComponent} from 'vue'

export default {
  name: "Person",
  data() {
    return {
      tabPosition: 'left'
    };
  },
  methods: {
    handleTabClick(tab, event) {
      if (tab.name === 'organ') {
        if(this.$route.path !== '/person/organ'){
          this.$router.push('/person/organ');
        }
      }
      if (tab.name === 'sub') {
        if(this.$route.path !== '/person/sub'){
          this.$router.push('/person/sub');
        }
      }
      if (tab.name === 'info') {
        if(this.$route.path !== '/person/info'){
          this.$router.push('/person/info');
        }
      }
      if (tab.name === 'personnel') {
        if(this.$route.path !== '/person/personnel'){
          this.$router.push('/person/personnel');
        }
      }  if (tab.name === 'staff') {
        if(this.$route.path !== '/person/staff'){
          this.$router.push('/person/staff');
        }
      }
      if (tab.name === 'adjust') {
        if(this.$route.path !== '/person/adjust'){
          this.$router.push('/person/adjust');
        }
      }


    }
  }

}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 50vw; margin-top: 3vw;" @tab-click="handleTabClick">
      <el-tab-pane label="组织机构" name="organ">
        <router-view/>
      </el-tab-pane>
      <el-tab-pane label="我的下属" name="sub"></el-tab-pane>
      <el-tab-pane label="我的信息" name="info"></el-tab-pane>
      <el-tab-pane label="人事信息" name="personnel"></el-tab-pane>
      <el-tab-pane label="在职员工" name="staff"></el-tab-pane>
      <el-tab-pane label="人事调整" name="adjust"></el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped>

</style>