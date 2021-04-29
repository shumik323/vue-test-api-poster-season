
import { apiDetail } from '../../shared/index';
import ApiService from '../../services/api.services';

const apiDetails = `${apiDetail}`;


const state = {
    data: null,
    pending: false,
    error: null,
};

const getters = {
    loaded: (state) => !state.pending && state.data != null,
    infoSerials: (state, getters) => (getters.loaded ? state.data : []),
};

const mutations = {
    data(state, { data = null, error = null } = {}) {
        state.pending = false;
        state.data = data;
        state.error = error;
    },

};


const actions = {
    async fetchDataEpisode({commit}, item) {
        try {
            const { data } = await ApiService.get(`${apiDetails}${item}?series=Breaking+Bad`);
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
