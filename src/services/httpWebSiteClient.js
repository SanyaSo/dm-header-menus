import axios from 'axios';


const httpClient = axios.create({
    baseURL: 'https://api-site.dom.kz/api',
});

httpClient.interceptors.request.use(function(config) {
    // добавляем токен ко всем запросам на api
    config.headers = authHeader();
    return config;
});

function authHeader () {
    let token = localStorage.getItem('auth._token.local');
    if (token) {
        return { Authorization: token};
    } else {
        return {};
    }
}

export default httpClient