import InputText from "./inputText"
import InputButton from "./inputButton"
import { useState } from "react"
import getNews from "utils/apiRequests"

const SearchForm = ({onSubmit, onLoading})=>{
    const [inputSearch, setInputSearch] = useState('')
    const handleSearch = (value) =>{
        setInputSearch(value)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        onLoading(true)
        try{
            const data = await getNews(inputSearch,1)
            if(data){
                onSubmit({data, searchValue: inputSearch})
            }
        }catch(error){
            onSubmit({error})
        }
        onLoading(false)
    }
    return <form onSubmit={handleSubmit} className='container md'>
        <InputText onChange={handleSearch} />
        <InputButton />
    </form>
}

export default SearchForm