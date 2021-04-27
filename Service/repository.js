import axios from 'axios'


const baseDomain = 'https://breakingbadapi.com/';
const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL,
    headers: {
        Accept: 'application/json'
    }
})

