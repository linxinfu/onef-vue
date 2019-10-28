<template>
  <div class="login">
    <div class="login-box">
      <h2 class="project-name">
        <strong>{{$t('app_name')}}</strong>
      </h2>
      <div class="login-detail">
        <div class="login-title">
          <h3>{{$t('please_login')}}</h3>
          <p>{{$t('enter_password_to_login')}}</p>
          <i class="el-icon-key"></i>
        </div>
        <div class="login-form">
          <el-form ref="form" :model="loginInfo">
            <el-form-item>
              <el-input
                prefix-icon="el-icon-user"
                placeholder="username"
                v-model="loginInfo.username"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                prefix-icon="el-icon-lock"
                placeholder="password"
                v-model="loginInfo.password"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="login-btn" type="primary" @click="login()">{{$t("login")}}</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginInfo: {
        username: 'user',
        password: '123456'
      }
    }
  },
  mounted () {
    this.showTips()
  },
  methods: {
    showTips () {
      this.notifyObj = this.$notify({
        title: this.$i18n.t('notification'),
        message: this.$i18n.t('login_notification'),
        duration: 3000,
        iconClass: 'el-icon-s-opportunity'
      })
    },
    login () {
      // TODO: 登录验证
      this.$message({ message: this.$i18n.t('login_success'), type: 'success' })
      console.log(this.loginInfo.username, this.loginInfo.password)

      this.$router.replace('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background: url(../../assets/login/login-bg.jpg) no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
}

.login-box {
  height: 455px;
  width: 550px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  margin-top: -287px;
}

.project-name {
  font-size: 38px;
  color: #fff;
  text-align: center;
}

.login-btn {
  width: 100%;
  background: #19b9e7;
}

.login-detail {
  margin-top: 30px;
  background: #eee;
  border-radius: 4px;
  .el-form-item {
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .login-title {
    padding: 0 28px;
    background: #fff;
    position: relative;
    height: 120px;
    border-radius: 4px 4px 0 0;
    h3 {
      font-size: 22px;
      color: #555;
      font-weight: initial;
      padding-top: 23px;
    }
    p {
      font-size: 16px;
      color: #888;
      padding-top: 12px;
    }
    i {
      font-size: 65px;
      color: #ddd;
      position: absolute;
      right: 27px;
      top: 29px;
    }
  }
  .el-form {
    padding: 25px 25px 30px 25px;
    background: #eee;
    border-radius: 0 0 4px 4px;
  }
}

.el-input__inner {
  background: #fff;
  height: 50px;
  outline: none;
  color: #606266;
  border: none;
}
</style>
