import axios from 'axios';

const url = {baseURL: 'https://jsonplaceholder.typicode.com'};
const configUsers = '/users';
const configPosts = '/posts';

const axiosInstance = axios.create(url);

const getUsers = () => {
    return axiosInstance(configUsers)
}
const getPosts = () => {
    return axiosInstance(configPosts)
}

export {getUsers, getPosts}
