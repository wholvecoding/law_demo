
<template>
  <div style="display: flex">
    <el-menu :default-openeds="['1', '3']" background-color="rgb(48, 60, 80)" text-color="#fff" :router="true">
      <el-submenu >
        <template v-slot:title ><i class="el-icon-message"></i>个人桌面</template>
        <el-menu-item-group>
          <el-menu-item index="/pd/hr">办理提醒</el-menu-item>
<!--          <el-menu-item index="1-2">待办事项</el-menu-item>-->
<!--          <el-menu-item index="1-3">待阅事项</el-menu-item>-->
<!--          <el-menu-item index="1-4">常用流程</el-menu-item>-->
<!--          <el-menu-item index="1-5">部门管理</el-menu-item>-->
<!--          <el-menu-item index="1-6">工作便笺</el-menu-item>-->
<!--          <el-menu-item index="1-7">结案统计</el-menu-item>-->
        </el-menu-item-group>
      </el-submenu>
<!--      <el-submenu index="2">-->
<!--        <template v-slot:title><i class="el-icon-menu"></i>案件管理</template>-->
<!--        <el-menu-item-group>-->
<!--          <el-menu-item index="2-1">文书制作</el-menu-item>-->
<!--          <el-menu-item index="2-2">电子卷宗</el-menu-item>-->
<!--          <el-menu-item index="2-3">证据管理</el-menu-item>-->
<!--          <el-menu-item index="2-4">相关主体信息</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="3">-->
<!--        <template v-slot:title><i class="el-icon-setting"></i>线索管理</template>-->
<!--        <el-menu-item-group>-->
<!--          <el-menu-item index="3-1">线索登记</el-menu-item>-->
<!--          <el-menu-item index="3-2">线索分类</el-menu-item>-->
<!--          <el-menu-item index="3-3">线索核实</el-menu-item>-->
<!--          <el-menu-item index="3-4">线索处理</el-menu-item>-->
<!--          <el-menu-item index="3-5">线索查询</el-menu-item>-->
<!--          <el-menu-item index="3-6">线索统计</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="4">-->
<!--        <template v-slot:title><i class="el-icon-setting"></i>公文管理</template>-->
<!--        <el-menu-item-group>-->
<!--          <el-submenu index="4-1">-->
<!--            <template v-slot:title>我的收文</template>-->
<!--            <el-menu-item index="4-1-1">收文查询</el-menu-item>-->
<!--          </el-submenu>-->
<!--          <el-submenu index="4-2">-->
<!--            <template v-slot:title>我的发文</template>-->
<!--            <el-menu-item index="4-2-1">发文拟稿</el-menu-item>-->
<!--            <el-menu-item index="4-2-2">发文查阅</el-menu-item>-->
<!--          </el-submenu>-->
<!--          <el-menu-item index="4-3">签收公文</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="5">-->
<!--        <template v-slot:title><i class="el-icon-setting"></i>会议管理</template>-->
<!--        <el-menu-item-group>-->
<!--          <template v-slot:title>分组一</template>-->
<!--          <el-menu-item index="5-1">会议管理</el-menu-item>-->
<!--          <el-menu-item index="3-2">线索分类</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="6">-->
<!--        <template v-slot:title><i class="el-icon-setting"></i>执行管理</template>-->
<!--        <el-menu-item-group>-->
<!--          <el-menu-item index="6-1">公诉申请</el-menu-item>-->
<!--          <el-menu-item index="6-2">抗诉申请</el-menu-item>-->
<!--          <el-menu-item index="6-3">查封申请</el-menu-item>-->
<!--          <el-menu-item index="6-4">扣押申请</el-menu-item>-->
<!--          <el-menu-item index="6-5">冻结申请</el-menu-item>-->
<!--          <el-menu-item index="6-6">批量导出</el-menu-item>-->
<!--          <el-menu-item index="6-7">条件筛选</el-menu-item>-->
<!--        </el-menu-item-group>-->

<!--      </el-submenu>-->
<!--      <el-submenu index="7">-->
<!--        <template v-slot:title><i class="el-icon-setting"></i>行刑双向衔接</template>-->
<!--        <el-menu-item-group>-->
<!--          <el-menu-item index="7-1">正向衔接</el-menu-item>-->
<!--          <el-menu-item index="7-2">反向衔接</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="8">-->
<!--        <template v-slot:title><i class="el-icon-setting"></i>法律法规动态管理</template>-->
<!--        <el-menu-item-group>-->
<!--          <el-menu-item index="8-1">法律</el-menu-item>-->
<!--          <el-menu-item index="8-2">司法解释</el-menu-item>-->
<!--          <el-menu-item index="8-3">行政规章</el-menu-item>-->
<!--          <el-menu-item index="8-4">规范性文档</el-menu-item>-->
<!--          <el-menu-item index="8-5">政策性文件</el-menu-item>-->
<!--          <el-menu-item index="8-6">其他文件</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="9">-->
<!--        <template v-slot:title>会议管理</template>-->
<!--        <el-menu-item index="9-1">公开听证</el-menu-item>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="10">-->
<!--        <template v-slot:title>纪检监督</template>-->
<!--        <el-menu-item index="10-1">待定</el-menu-item>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="11">-->
<!--        <template v-slot:title>信息发布与公告</template>-->
<!--        <el-menu-item index="11-1">待定</el-menu-item>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="12">-->
<!--        <template v-slot:title>数据分析管理</template>-->
<!--        <el-menu-item index="9-1">待定</el-menu-item>-->
<!--      </el-submenu>-->
    </el-menu>
  </div>

</template>

<script >
export default {
  name : 'Aside',
  props :{

  },
  methods: {
    navigateToPd(){
      this.$router.push('/pd'); // 使用编程式导航跳转到 /pd
    }
  }
}
</script>



<style scoped>

</style>