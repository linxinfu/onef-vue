<template>
  <div>{{message}}
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { login } from '@/api/user'
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Welcome to ONEF!'
    }
  },
  methods: {
    ...mapActions(['saveUserInfo']),
    ...mapGetters(['userInfo']),
    requestTest () {
      login("admin", "123456").then((it) => {
        console.log(it)
      })
    }
  },
  mounted () {
    this.saveUserInfo({ username: "张三", phone: "234" })
    var a = this.userInfo()
    this.requestTest()
    console.log(a.username, a.phone)
  }
}
</script>

<style scoped>
</style>
