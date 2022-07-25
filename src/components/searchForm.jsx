import InputText from "./inputText"
import InputButton from "./inputButton"
import { useState } from "react"
import getNews from "utils/apiRequests"
import { minLength } from "utils/validation"

const SearchForm = ({onSubmit, onLoading})=>{
    const [inputSearch, setInputSearch] = useState('')
    const [disabledSubmit, setDisSubmit] = useState(true)
    const handleSearch = (value) =>{
        setInputSearch(value)
        const valid = minLength(value,3)
        setDisSubmit(!valid)
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
    return <form onSubmit={handleSubmit} className='container md full-width form-search'>
        <InputText onChange={handleSearch} />
        <InputButton disabled={disabledSubmit} />
    </form>
}

export default SearchForm