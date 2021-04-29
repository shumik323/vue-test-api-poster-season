
import {apiHeroes} from '../../shared/index';
import ApiService from '../../services/api.services';

const endpointHeroes = `${apiHeroes}`;


const state = {
    data: null,
    pending: false,
};

const getters = {
    loaded: (state) => !state.pending && state.data != null,
    heroes: (state, getters) => (getters.loaded ? state.data : []),
};

const mutations = {
    data(state, { data = null, error = null } = {}) {
        state.pending = false;
        state.data = data;
        state.error = error;
    },
};


const actions = {
    async fetchHeroes({commit}, item) {
        try {
            const { data } = await ApiService.get(`${endpointHeroes}?name=${item}`);
            commit('data', { data });

        } catch (error) {
            console.log(error)
            commit('data', { error });
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
