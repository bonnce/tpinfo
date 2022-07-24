import { useEffect, useState } from "react"
import getNews from "utils/apiRequests"

const Pagination = ({searchValue, onChange, onLoading})=>{
    const [page, setPage] = useState(1)
    const [newSearch, setNewSearch ] = useState(searchValue)

    const handleClick = (e)=>{
        const value = parseInt(e.target.value)
        setPage(value)
    }
    const handleBack = (e)=>{
        setPage(prev => prev - 1)
    }

    const handleNext = (e)=>{
        setPage(prev => prev + 1)
    }

    const maxPage = 10
    const maxToSee = 3
    const maxPageToSee = new Array(maxToSee).fill(0)

    useEffect(()=>{
        const handleChangePage = async ()=>{
            onLoading(true)
            if(searchValue !== newSearch) {
                setNewSearch(searchValue)
                setPage(1)
            }
            try{

                const data = await getNews(searchValue,searchValue !== newSearch ? 1 : page)
                if(data){
                    onChange({data, searchValue})
                }
            }catch(error){
                onChange({error})
            }
            onLoading(false)
        }
        handleChangePage()
    },[page, searchValue])

    return <div className="container align-stretch gap-sm wrap md">

        <input className="input-pag" type="button" value='<' onClick={handleBack} disabled={page === 1} />
        <input className={`input-pag ${page=== 1 ? 'input-pag-focused' : ''}`} type="button" value={1} onClick={handleClick} />       
        {(page) > 2 && <p className="input-pag">...</p>}
        {maxPageToSee.map((v,i)=> ((page + i ) < maxPage && (page + i) > 1) && 
        <input className={`input-pag ${i=== 0 ? 'input-pag-focused' : ''}`} type="button" key={`${searchValue}-${i}-${page}`} value={page + i} onClick={handleClick} />)}
        {(page + maxToSee) < maxPage && <p className="input-pag">...</p>}
        <input className={`input-pag ${page=== maxPage ? 'input-pag-focused' : ''}`} type="button" value={maxPage} onClick={handleClick} />       
        <input className="input-pag" type="button" value='>' onClick={handleNext} disabled={page === maxPage}/>
        
    </div>
}

export default Pagination