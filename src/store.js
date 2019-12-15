import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '武汉'
try {
  if(localStorage.city){
    defaultCity = localStorage.city;
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity (state, city) {
      state.city = city;
      try {
        localStorage.city = city;
      } catch (e) {}
    }
  }
  // , 暂时用不上异步
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city);
  //   }
  // }
})
