import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import episodes from './modules/episodes.module'
import omd from './modules/omd.module'

const modules = {
  episodes,
  omd
}

export default new Vuex.Store({
  modules,
})

