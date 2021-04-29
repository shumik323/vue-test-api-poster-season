
import {apiDeath} from '../../shared/index';
import ApiService from '../../services/api.services';

const endpointDeath = `${apiDeath}`;


const state = {
    data: null,
    pending: false,
    error: null,
    dataBcs: null,
};

const getters = {
    loaded: (state) => !state.pending && state.data != null,
    deaths: (state, getters) => (getters.loaded ? state.data : []),
};

const mutations = {
    data(state, { data = null, error = null } = {}) {
        state.pending = false;
        state.data = data;
        state.error = error;
    },
};


const actions = {
    async fetchDeath({commit}) {
        try {
            const { data } = await ApiService.get(`${endpointDeath}`);
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
