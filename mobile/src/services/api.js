// Configuração da nossa API do backend

import axios from 'axios';

const api = axios.create({
    // Colocar seu ip que aparece no EXPO (ou buscar por ipconfig)
    baseURL: 'http://192.168.1.10:3333',
});

export default api;