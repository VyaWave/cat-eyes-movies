import moviesListVuex from '@/components/movies/vuex'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    moviesListVuex
  }
})
export default store
