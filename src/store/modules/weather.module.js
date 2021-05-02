
import {apiWeather } from '../../shared/index';
import ApiService from '../../services/api.services';

const endpoint = `${apiWeather}`;


const state = {
    weather: null,
    pending: false,
    error: null,
};

const getters = {
    loaded: (state) => !state.pending && state.weather != null,
    weather: (state, getters) => (getters.loaded ? state.weather : []),
};

const mutations = {
    data(state, { data = null, error = null } = {}) {
        state.pending = false;
        state.weather = data;
        state.error = error;
    },

};

const actions = {
    async fetchWeather({commit}, date) {
        try {
            const { data } = await ApiService.get(`${endpoint}${date}`);
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
