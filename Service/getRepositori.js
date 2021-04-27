import Repository from "./Repository";



export default {
    get(path, config = undefined) {
        return axios.get(path, config);
    },


}
