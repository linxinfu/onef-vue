// 顶部导航条
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <img
      class="avatar-img"
      src="./../../../assets/user/user01.jpg"
    />
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      circleUrl: "./user01.jpg",
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
.avatar-img {
  width: 50px;
  border-radius: 50%;
  height: 50px;
  float: right;
  margin-right: 20px;
}
</style>