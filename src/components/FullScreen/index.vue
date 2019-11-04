<template>
  <div
    class="full-screen"
    @click="toggleFull()"
  >
    <i class="el-icon-full-screen full-screen-icon"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'full-screen',
  methods: {
    toggleFull () {
      if (!screenfull.enabled) {
        this.$message({
          type: 'warning',
          message: 'you browser can not work'
        })
        return false
      }
      screenfull.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
.full-screen {
  height: 50px;
  float: left;
  padding: 0 10px;
  text-align: center;
  cursor: pointer;
  line-height: 50px;
  .full-screen-icon {
    font-size: 18px;
    vertical-align: middle;
  }
}

.full-screen:hover {
  background-color: #f6f8f8;
}
</style>
