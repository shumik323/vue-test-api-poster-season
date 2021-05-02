import Vue from 'vue'

import searchFilter from "./searchFilter";
import tab from "./tab";
import cardItem from "./card/cardItem";
import cardWrapper from "./card/cardWrapper";
import navigation from "./app/navigation";

Vue.component(searchFilter.name, searchFilter)
Vue.component(tab.name, tab)
Vue.component(cardItem.name, cardItem)
Vue.component(cardWrapper.name, cardWrapper)
Vue.component(navigation.name, navigation)
