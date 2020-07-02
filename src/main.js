import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import demoBlock from './components/demo-block';
import router from './router'


Vue.use(ElementUI);
Vue.component('demo-block', demoBlock);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
