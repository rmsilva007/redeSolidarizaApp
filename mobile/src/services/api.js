import axios from 'axios';
const api = axios.create({
    baseURL: 'http://192.168.1.38:3333'//ip do celular: copiar do Expo para que não haver erro
})

export default api;