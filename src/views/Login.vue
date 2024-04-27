<script>
import {defineComponent} from 'vue'
export default defineComponent( {
  name: "Login",
  data() {
    return {
      items: [
        {
          image: require("../assets/logo.jpg"),
          title: "云检智行",
        },
        {
          image: require("../assets/logo.png"),
          title: "云公智行",
        },
        {
          image: require("../assets/logo.png"),
          title: "云政智行",
        },
      ],
      selectedCard: null, // 当前选择的卡片
      hideOthers: false, // 是否隐藏其他卡片
      isClicked: false, // 用于控制滑动
    };
  },
  methods:{
    moduleClicked(item){
      this.selectedCard = item; // 记录选择的卡片
      this.hideOthers = true; // 隐藏其他卡片
      this.isClicked = true; // 用于控制滑动
      console.log("被点击了");
      if(item.title==="云检智行"){
        if(this.$route.path !== '/login/pro')
          this.$router.push('/login/pro'); // 跳转到详情页
      }
      if(item.title==="云公智行"){
        if(this.$route.path !== '/login/pro')
          this.$router.push('/login/pro'); // 跳转到详情页
      }
      if(item.title==="云政智行"){
        if(this.$route.path !== '/login/pro')
          this.$router.push('/login/pro'); // 跳转到详情页
      }
    },
    backToLogin() {
      if(this.$route.path !== '/login'){
        this.isClicked = false;
        this.selectedCard =  null;
      this.hideOthers = false;
        this.$router.push('/login'); // 跳转到详情页

      }

    },
    handleClick() {
      this.isClicked = !this.isClicked; // 切换滑动状态
    },
  }
});
</script>

<template>
  <div>

      <el-header style="font-size: 2vw;text-align: center" >
      <a @click="backToLogin" style=" cursor: pointer">
        云智系统
      </a>
      </el-header>

      <el-row>
        <el-col
            v-if="!hideOthers || item === selectedCard"
            v-for="(item, index) in items"
            :key="index"
            :span="8"
        >
          <el-card :style="{ width: isClicked ? '600px' : '300px' , height: isClicked ? '600px' : '300px', marginTop: '200px',marginLeft: isClicked ? '700px' : '300px',display:'flex', justifyContent:'center'  }" @click.native="moduleClicked(item)"  class="clickable-card">
            <img :src="item.image" class="image" :style="{width: isClicked ? '200px' : '200px', height: isClicked ? '200px' : '200px', marginLeft:isClicked ? '100px' : '10px'}" />

            <div style="text-align: center; font-size: 50px" >
              <span>{{ item.title }}</span>
              <router-view/>
              <div class="bottom clearfix">
                <time class="time">{{ item.date }}</time>
              </div>
            </div>
          </el-card>
        </el-col>

      </el-row>



  </div>
</template>

<style scoped>
.clickable-card {
  cursor: pointer; /* 提示用户这是可点击的 */
  transition: transform  1s;
}

.clickable-card:hover {
  transform: scale(1.1); /* 鼠标悬停时扩大 */
}




@keyframes trans {
  from{
    transform: translateX(-100px);
  }
  to{
    transform: translateX(0px);
  }

}

</style>