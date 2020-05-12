import axios from 'axios';
const api = axios.create({
    baseURL: 'http://192.168.1.32:3333'//ip do celular: copiar do Expo para que não haver erro
                                       //a porta tem que ser a mesma onde está rodando o backend
});

export default api;