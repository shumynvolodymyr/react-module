import axios from "axios";

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/posts'});


const getPosts = () => {

    return axiosInstance.get('');
}

const getPost = (id) => {

    return axiosInstance.get('/' + id);
}

export {getPosts, getPost};