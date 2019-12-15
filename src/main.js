import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/border.css'

import { Icon ,Swipe, SwipeItem,Lazyload ,NavBar,Search ,Toast ,NoticeBar  } from 'vant';

Vue.use(Icon).use(Swipe).use(NoticeBar).use(SwipeItem).use(Lazyload ).use(NavBar ).use(Search).use(Toast);

Vue.config.productionTip = false;

// 自定意指令
Vue.directive('raindow',{
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
