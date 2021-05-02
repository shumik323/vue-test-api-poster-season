
import {apiHeroes} from '../../shared/index';
import ApiService from '../../services/api.services';

const endpointHeroes = `${apiHeroes}`;


const state = {
    data: null,
    allHeroes: null,
    key: null,
    pending: false,
};

const getters = {
    loaded: (state) => !state.pending && state.data != null,
    heroes: (state, getters) => (getters.loaded ? state.data : []),
    loadedHeroes: (state) => !state.pending && state.allHeroes != null,
    heroesAll: (state, getters) => (getters.loadedHeroes ? state.allHeroes : []),
    keyHeroes: (state) => state.key,
};

const mutations = {
    setKey(key) {
        if (key) {
            state.key = key;
        }
    },
    data(state, { data = null, error = null } = {}) {
        state.pending = false;
        state.data = data;
        state.error = error;
    },
    allHeroes(state, { data = null, error = null } = {}) {
        state.pending = false;
        state.allHeroes = data;
        state.error = error;
    },
};


const actions = {
    async keyLocaleHeroes({commit}, key) {
        try {
            commit('setKey', key)
        } catch (e) {
            commit('setKey', e)
        }

    },
    async fetchHeroes({commit}, item) {
        try {
            const { data } = await ApiService.get(`${endpointHeroes}?name=${item}`);
            commit('data', { data });

        } catch (error) {
            commit('data', { error });
        }
    },
    async allHeroes({commit}) {
        try {
            const { data } = await ApiService.get(`${endpointHeroes}`);
            commit('allHeroes', { data });

        } catch (error) {
            commit('allHeroes', { error });
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
