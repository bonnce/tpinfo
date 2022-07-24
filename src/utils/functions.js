const formatStrDate = (str)=>{
    const date = new Date(str)
    const correctFormat = date.toLocaleString('en-GB').replaceAll('/','-').replace(/:\d+$/,'').split(', ')
    return correctFormat
}

export {
    formatStrDate
}