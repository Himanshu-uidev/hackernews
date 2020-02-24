import axios from 'axios';

const httpInstance = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1/'
});

export default httpInstance;