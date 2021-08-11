import axios from "axios";

let axiosInstance = axios.create({baseURL: "https://jsonplaceholder.typicode.com/comments"});

const getComments = () => {
    return axiosInstance.get('');
}

const getComment = (id) => {
    return axiosInstance.get('/' + id);
}

export {getComments, getComment};