import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import episodes from './modules/episodes.module'

const modules = {
  episodes
}
console.log(234)
export default new Vuex.Store({
  modules,
})

