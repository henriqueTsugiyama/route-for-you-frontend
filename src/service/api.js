import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-route-4-you.herokuapp.com/'
})

export { api };