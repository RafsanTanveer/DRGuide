import axios from "axios";
import { serverAddress } from '../api/serverAddress'

const api = axios.create({
    baseURL: serverAddress
});

export default api;