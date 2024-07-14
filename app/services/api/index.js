import axios from "axios"

const notesAPI = axios.create({
    baseURL: "https://notes-73s8zlhnq-musab-fayyazs-projects.vercel.app/api"
})

export default notesAPI
