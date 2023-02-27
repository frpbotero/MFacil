import axios from "axios"
import * as dotenv from 'dotenv'
const result = dotenv.config()
const url = process.env.URL


export const api = axios.create({
    
})