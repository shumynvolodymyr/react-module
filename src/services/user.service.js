import axios from 'axios';

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/users'});

const getUsers = () => {

    return axiosInstance.get('');
}

const getUser = (id) => {

    return axiosInstance.get('/' + id);
}

export {getUsers, getUser};