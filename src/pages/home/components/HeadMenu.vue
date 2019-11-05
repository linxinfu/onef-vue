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
    <div class="user-wrap">

      <full-screen></full-screen>

      <el-dropdown class="language">
        <img
          class="language-img"
          :src="getLanguageUrl()"
        />

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="changeLanguage('zh')">
            <img
              class="language-item-img"
              src="@/assets/common/zh.svg"
            />
            <span>简体中文</span>
          </el-dropdown-item>
          <el-dropdown-item @click.native="changeLanguage('en')">
            <img
              class="language-item-img"
              src="@/assets/common/en.svg"
            />
            <span>English</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown class="user-info">
        <div>
          <span>{{username}}</span>
          <img
            class="avatar-img"
            src="@/assets/user/man.jpg"
          />
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{$t('your_profile')}}</el-dropdown-item>
          <el-dropdown-item @click.native="logout()">{{$t('logout')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import FullScreen from '@/components/FullScreen'
export default {
  data () {
    return {
      username: 'Admin'
    };
  },
  methods: {
    getLanguageUrl () {
      return this.$i18n.locale == 'en' ? require('@/assets/common/en.svg') : require('@/assets/common/zh.svg')
    },
    changeLanguage (lang) {
      if (this.$i18n.locale !== lang) {
        this.$i18n.locale = lang
        window.localStorage.setItem('lang', lang);
      }
    },
    logout () {
      // TODO: 清除登录信息
      this.$router.replace('/login')
    }
  },
  components: {
    FullScreen
  }
}
</script>

<style lang="scss">
.header-nav {
  height: 50px;
  border-bottom: 1px solid #454b61;

  .user-wrap {
    float: right;
  }

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
        width: 28px;
        vertical-align: middle;
        margin-right: 8px;
        position: relative;
        top: -3px;
      }
    }
  }

  .language {
    width: 50px;
    height: 50px;
    // padding: 0 20px;
    line-height: 50px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    .language-img {
      width: 25px;
      height: 25px;
      vertical-align: middle;
      border-radius: 50%;
    }
  }

  .language:hover {
    background-color: #f6f8f8;
  }

  .user-info {
    padding-left: 10px;
    vertical-align: middle;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
  }
  .user-info:hover {
    background-color: #f6f8f8;
  }
}

.avatar-img {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 50%;
  margin-right: 20px;
  vertical-align: middle;
}

.language-item-img {
  width: 15px;
  height: 15px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
}
</style>
