import ApiService from '../../services/api.services';
import { apiQuote } from '../../shared/index';

const endpointQuote = `${apiQuote}`;


const state = {
    quotes: null,
    pending: false,
    error: null,
};

const getters = {
    loadedQuote: (state) => !state.pending && state.quotes != null,
    quotes: (state, getters) => (getters.loadedQuote ? state.quotes : []),
};

const mutations = {
    data(state, { data = null, error = null } = {}) {
        state.pending = false;
        state.quotes = data;
        state.error = error;
    },
};


const actions = {
    async fetchDataQuote({commit}, name) {
        try {
            const { data } = await ApiService.get(`${endpointQuote}?author=${name}`);
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
