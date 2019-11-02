// 顶部导航条
<template>
  <div class="header-nav">
    <div class="project-info">
      <a class="project-link">
        <img
          src="@/assets/common/github.png"
          alt="logo"
        />
        ONEF
      </a>
    </div>

    <el-dropdown class="user-info">
      <div>
        <span>{{username}}</span>
        <img
          class="avatar-img"
          src="./../../../assets/user/user01.jpg"
        />
      </div>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'admin',
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
.header-nav {
  height: 50px;
  border-bottom: 1px solid #454b61;

  .project-info {
    float: left;
    height: 50px;
    width: 204px;
    background-color: rgb(84, 92, 100);
    .project-link {
      color: #fff !important;
      font-size: 15px;
      margin-left: 18px;
      display: inline-block;
      font-weight: 700;
      height: 100%;
      line-height: 50px;
      img {
        height: 28px;
        vertical-align: middle;
        margin-right: 8px;
        position: relative;
        top: -3px;
      }
    }
  }

  .user-info {
    float: right;
    padding-left: 10px;
    vertical-align: middle;
    cursor: pointer;
    text-align: center;
    // height: 50px;
    line-height: 50px;
  }
}

.avatar-img {
  // display: inline-block;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 50%;
  margin-right: 20px;
  vertical-align: middle;
}
</style>
