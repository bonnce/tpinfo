import { useState } from "react"

const InputText = ({onChange})=>{
    const [value, setValue] = useState('')
    const handleChange = (e)=>{
        const value = e.target.value
        setValue(value)
        onChange?.(value)
    }

    return <input type='text' value={value} onChange={handleChange} />
}

export default InputText