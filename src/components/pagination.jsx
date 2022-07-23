import { useEffect, useState } from "react"
import getNews from "utils/apiRequests"

const Pagination = ({totalResults, searchValue, onChange})=>{
    const [page, setPage] = useState(1)

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
    const maxToSee = 5
    const maxPageToSee = new Array(maxToSee).fill(0)

    useEffect(()=>{
        const handleChangePage = async ()=>{
            const data = await getNews(searchValue,page)
            if(data.articles){
                onChange({data, searchValue})
            }
        }
        handleChangePage()
    },[page])

    return <div>

        <input type="button" value='<' onClick={handleBack} disabled={page === 1} />
        <input type="button" value={1} onClick={handleClick} />       
        {(page) > 1 && <p>...</p>}
        {maxPageToSee.map((v,i)=> ((page + i ) < maxPage && (page + i) > 1) && <input type="button" value={page + i} onClick={handleClick} />)}
        {(page + maxToSee) < maxPage && <p>...</p>}
        <input type="button" value={maxPage} onClick={handleClick} />       
        <input type="button" value='>' onClick={handleNext} disabled={page === maxPage}/>
        
    </div>
}

export default Pagination