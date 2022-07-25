import { useState } from "react"

const InputText = ({onChange})=>{
    const [value, setValue] = useState('')
    const handleChange = (e)=>{
        const value = e.target.value
        setValue(value)
        onChange?.(value)
    }

    return <div className="input-search-container">

    <input type='text' className="input-search" value={value} onChange={handleChange}/>
    <span className={`placeholder ${!value || 'hidden'}`}>Enter something to search...</span>
    </div>
}

export default InputText