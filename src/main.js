// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './utils/plugins/element.js'
import ElementUI from 'element-ui'; // 暂时使用全部注册的方式
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss'
import i18n from './locales'


Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
