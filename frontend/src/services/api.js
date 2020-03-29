// Configuração da nossa API do backend

import axios from 'axios';

const api = axios.create({
    // Colocar seu ip que aparece no EXPO (ou buscar por ipconfig)
    baseURL: 'http://localhost:3333'
});

export default api;