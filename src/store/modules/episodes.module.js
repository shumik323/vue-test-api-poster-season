
import {apiEndpoint} from '../../shared/index';
import ApiService from '../../services/api.services';

const endpoint = `${apiEndpoint}/episodes`;

    console.log(apiEndpoint)

const state = {
    data: null,
    pending: false,
    error: null,
};

const getters = {
    loaded: (state) => !state.pending && state.data != null,
    episodes: (state, getters) => (getters.loaded ? state.data : []),

};

const mutations = {

    data(state, { data = null, error = null } = {}) {
        state.pending = false;
        state.data = data;
        state.error = error;
    },
};


const actions = {
    async fetchData({commit}) {
        try {
            const { data } = await ApiService.get(`${endpoint}`);
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
