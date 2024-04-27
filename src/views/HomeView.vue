<template>
    <el-container style="height: 100%; background-color:#E9EFFD " >

    <el-header style="height: 6vw; padding: 0vw 0vw;width: 100vw "  >
      <Tab />
    </el-header>
      <el-aside width="100vw">
      <router-view />
      </el-aside>
      <el-main>

      </el-main>


    </el-container>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";
import Tab from "@/components/Tab.vue";

export default {
  name: 'HomeView',

  data() {
    const item = {
      date: '2016-05-02',
      name: '王小ssss',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item),
      imageSrc: require('@/assets/symbal.png')


    }
  },
  components:{
    Header,
    Tab

  },

}
</script>
