import axios from "axios";
const api = axios.create({
    baseURL: process.env.PUBLIC_URL,
    headers: {
        'Access-Control-Allow-Origin': 'https://www.metaweather.com',
        'Access-Control-Allow-Methods': ' GET, PUT, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json',
    }
});
export default api;

