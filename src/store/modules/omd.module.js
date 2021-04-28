
import {apiOmd , apiOmdTwo} from '../../shared/index';
import ApiService from '../../services/api.services';

const endpoint = `${apiOmd}`;
const endpointTwo = `${apiOmdTwo}`;


const state = {
    data: null,
    pending: false,
    error: null,
    dataBcs: null,
};

const getters = {
    loaded: (state) => !state.pending && state.data != null,
    infoSerial: (state, getters) => (getters.loaded ? state.data : []),
    loadedBcs: (state) => !state.pending && state.dataBcs != null,
    infoSerialBcs: (state, getters) => (getters.loadedBcs ? state.dataBcs : []),
};

const mutations = {
    data(state, { data = null, error = null } = {}) {
        state.pending = false;
        state.data = data;
        state.error = error;
    },
    dataBcs(state, { data = null, error = null } = {}) {
        state.pending = false;
        state.dataBcs = data;
        state.error = error;
    },
};


const actions = {
    async fetchDataOmd({commit}) {
        try {
            const { data } = await ApiService.get(`${endpoint}`);
            commit('data', { data });

        } catch (error) {
            console.log(error)
            commit('data', { error });
        }
    },
    async fetchDataBcs({commit}) {
        try {
            const { data } = await ApiService.get(`${endpointTwo}`);
            console.log(data)
            commit('dataBcs', { data });

        } catch (error) {
            console.log(error)
            commit('dataBcs', { error });
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
