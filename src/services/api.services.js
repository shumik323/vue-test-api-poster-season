import axios from 'axios';

const ApiService = {
    init(endpoint) {
        axios.defaults.baseURL = endpoint;
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.defaults.withCredentials = true;
    },

    get(path, config = undefined) {
        return axios.get(path, config);
    },
    post(path, data, config = undefined) {
        return axios.post(path, data, config);
    },
    put(path, data, config = undefined) {
        return axios.put(path, data, config);
    },
    patch(path, data, config = undefined) {
        return axios.patch(path, data, config);
    },
    delete(path, config = undefined) {
        return axios.delete(path, config);
    },
    request(config) {
        return axios(config);
    },
};

export default ApiService;
