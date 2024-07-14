import axios from "axios"

const notesAPI = axios.create({
    baseURL: "http://localhost:3001/api"
})

export default notesAPI