import axios from "axios"

const instance = axios.create({  // чтобы не писать каждый раз  localhost:4444
    baseURL: "http://localhost:4444"
});

instance.interceptors.request.use((config) => {  // вшиваем наш токен авторизации в хедеры запросов (я хз как ты в файл этот ваще попал, но лучше не трогай)
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
});

export default instance;