// Importing Axios for making HTTP requests
import axios from 'axios'

// Create an Axios instance with a base URL pointing to your backend API
const API = axios.create({
    baseURL: 'https://my-manager-backend-xnsv.onrender.com/api'
})

// Request interceptor: attaches JWT token from localStorage to every request if available
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token')
    if (token) {
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})


// User authentication
export const register = (data) => API.post('/auth/register', data)
export const login = (data) => API.post('/auth/login', data)

// Task CRUD operations
export const getTasks = () => API.get('/tasks')
export const addTask = (data) => API.post('/tasks', data)
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data)
export const deleteTask = (id) => API.delete(`/tasks/${id}`)
