import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import episodes from './modules/episodes.module'

const modules = {
  episodes
}

export default new Vuex.Store({
  modules,
})

