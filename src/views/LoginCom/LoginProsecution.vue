<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LoginProsecution",
  data(){
    return {
      user: {},
      rules: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur'}
        ],
       password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 5, max: 15, message: '密码不能少于5个字符', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    login(){//用户前端接口验证登录

          this.request.post("/user/login",this.user).then( res => {
          //   if(!res){
          //     this.$message.error("cuow");
          //   }
          //   else{
          //     this.$router.push("/");
          //   }
          // })
            if(res.code=='200'){
              console.log("USR",this.user);
              localStorage.setItem("user",JSON.stringify(res.data));//将用户信息存储到浏览器里面
              this.$message.success("登录成功");
              this.$router.push("/");

            }
            else{
             // console.log("登录cg");
              this.$message.error(res.msg);
            }
          }).catch(error => {
            console.error("请求失败：", error);
          })
    }

  }
})
</script>

<template>
<div >
  <el-form :model="user" :rules="rules" :ref="user">
    <el-form-item prop="username" style="margin-top: 50px">
      <el-input   prefix-icon="el-icon-user-solid" v-model="user.username" placeholder="请输入用户名"  ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input  prefix-icon="el-icon-lock" v-model="user.password"  show-password placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-row>
      <el-button @click="login">登录</el-button>
      <el-button type="primary">注册</el-button>
    </el-row>
  </el-form>

</div>
</template>

<style scoped>

</style>