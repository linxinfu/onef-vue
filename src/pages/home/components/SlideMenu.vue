/*
 *    侧边栏导航
 */

<template>
  <div class="slide-menu-wrap">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-s-data"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>密码库</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1"><i class="el-icon-shopping-cart-full"></i>选项1</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3"><i class="el-icon-present"></i>选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-s-tools"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-link"></i>
        <span slot="title">相关链接</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'slide-menu',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-menu-wrap {
  width: 205px;
  height: calc(100% - 50px);
}

.el-menu-vertical-demo {
  height: 100%;
}
</style>
