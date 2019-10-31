<template>
  <div>{{message}}
  </div>

</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Welcome to ONEF!'
    }
  },
  methods: {
    ...mapActions(['saveUserInfo']),
    ...mapGetters(['userInfo'])
  },
  mounted () {
    this.saveUserInfo({username:"张三",phone:"234"})
    var a = this.userInfo()
    console.log(a.username,a.phone)
  }
}
</script>

<style scoped>
</style>
