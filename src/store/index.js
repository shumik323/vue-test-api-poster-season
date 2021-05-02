import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import episodes from './modules/episodes.module'
import episode from './modules/episode.detail.module'
import deaths from './modules/deaths.module'
import omd from './modules/omd.module'
import heroes from './modules/heroes.module'
import quotes from './modules/quotes.module'
import weather from './modules/weather.module'

const modules = {
  episodes,
  omd,
  episode,
  deaths,
  heroes,
  quotes,
  weather
}

export default new Vuex.Store({
  modules,
})
