import InputText from "./inputText"
import InputButton from "./inputButton"
import { useState } from "react"
import getNews from "utils/apiRequests"

const SearchForm = ({onSubmit})=>{
    const [inputSearch, setInputSearch] = useState('')

    const handleSearch = (value) =>{
        setInputSearch(value)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const data = await getNews(inputSearch,1)
        if(data.articles){
            onSubmit({data, searchValue: inputSearch})
        }
    }
    return <form onSubmit={handleSubmit}>
        <InputText onChange={handleSearch} />
        <InputButton />
    </form>
}

export default SearchForm