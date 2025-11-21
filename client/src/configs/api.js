import axios from 'axios'


const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || 'https://ai-resumebuilder-eo0g.onrender.com'
})


export default api;