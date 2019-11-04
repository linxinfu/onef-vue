/*
 *    侧边栏导航
 */

<template>
  <div class="slide-menu-wrap">
    <el-menu
      default-active="1"
      class="slide-menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-s-data"></i>
        <span slot="title">{{$t('home')}}</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-monitor"></i>
          <span>{{$t('repositories')}}</span>
        </template>
        <el-menu-item-group>
          <template slot="title">{{$t('general')}}</template>
          <el-menu-item index="2-1"><i class="el-icon-key"></i>{{$t('logins')}}</el-menu-item>
          <el-menu-item index="2-2"><i class="el-icon-bank-card"></i>{{$t('credit_card')}}</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">{{$t('special')}}</template>
          <el-menu-item index="2-3"><i class="el-icon-mobile-phone"></i>{{$t('telephone_cards')}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-s-tools"></i>
        <span slot="title">{{$t('user_settings')}}</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-link"></i>
        <span slot="title">{{$t('links')}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'slide-menu',
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.slide-menu-wrap {
  width: 205px;
  height: calc(100% - 50px);
}

.slide-menu {
  height: 100%;
}
</style>
