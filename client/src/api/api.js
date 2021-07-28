import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true
})

instance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}, function (error) {
    return Promise.reject(error);
})

export const API = {
    login(email, password) {
        return instance.post('auth/login', {email, password})
    },
    getContacts() {
        return instance.get('products')
    },
    addContact(name, lastName, phone) {
        return instance.post('products', {name, lastName, phone})
    },
    deleteContact(id) {
        return instance.delete(`products/${id}`)
    },
    putContact(id, name, lastName, phone) {
        return instance.put(`products/${id}`, {name, lastName, phone})
    }
}


