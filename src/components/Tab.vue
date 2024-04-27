<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Tab",
  data () {
    return {
      // user:
      //     localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")):{ }
    }
  },
  methods: {
   logout() {
     console.log('Logout clicked'); // 确保这个方法被调用
     if(this.$route.path !=='/login'){
       localStorage.removeItem("user");
       this.$router.push('/login'); // 跳转
       this.$message.success("退出成功");
     }
    }
  }
})
</script>

<template>
  <div style="display: flex;width: 100vw; margin: 0vw; padding: 0vw;box-sizing: border-box"  >
    <img src="../assets/logo.jpg" style=" width:10vw; height: 6vw;margin-left: 0vw  "    ></img>
  <el-menu   class="el-menu-demo"  :router="true" >
<!--    <el-menu-item index="/pd" >个人桌面</el-menu-item>-->
    <el-menu-item index="/cm" >案件管理</el-menu-item>
    <el-menu-item index="/clue" >线索管理</el-menu-item>
    <el-menu-item index="/2w">行刑双向衔接</el-menu-item>
    <el-menu-item index="/evi" >证据管理</el-menu-item>
<!--    <el-menu-item index="/doc" >公文管理</el-menu-item>-->
    <el-menu-item index="/confer" >会议管理</el-menu-item>
<!--    <el-menu-item index="/exec" >执行管理</el-menu-item>-->
<!--    <el-menu-item index="/inr" >纪检监督</el-menu-item>-->
<!--    <el-menu-item index="/crimeP" >犯罪预防</el-menu-item>-->
<!--    <el-menu-item index="/ir" >信息发布</el-menu-item>-->
<!--    <el-menu-item index="/lr" >法律法规</el-menu-item>-->
<!--    <el-menu-item index="/person" >人事管理</el-menu-item>-->
<!--    <el-menu-item index="/veh"  >车辆管理</el-menu-item>-->
    <el-dropdown trigger="click" >
  <span class="el-dropdown-link" >
      <div class="demo-type">
        <el-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"  ></el-avatar>
        <span>
          管理员
        </span>
    </div>
    <i ></i>
  </span>
      <el-dropdown-menu v-slot="dropdown" >
        <el-dropdown-item divided>个人信息</el-dropdown-item>
        <el-dropdown-item divided  @click.native = "logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
  <div class="line"></div>
  </div>
</template>

<style scoped>

</style>