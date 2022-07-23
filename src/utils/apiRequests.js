import axios from "axios";

const baseURL = 'https://newsapi.org/'
const endpoint = 'v2/everything'
const apiKey = '520061d9a0884461a3607f73fa318b60'
const pageSize = '10'
const language = 'es'
const params = {
    apiKey,
    pageSize,
    language
}
const baseAxios = axios.create({baseURL})

const getNews = async (search, page)=>{
    try{
        const response = await baseAxios.get(endpoint,{ params:{...params, q:search, page} })
        const data = response.data
        return data
    }catch(e){
        return e
    }
}

export default getNews