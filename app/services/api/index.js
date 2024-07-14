import axios from "axios"

const notesAPI = axios.create({
    baseURL: "https://backend-delta-beige.vercel.app/api"
})

export default notesAPI
