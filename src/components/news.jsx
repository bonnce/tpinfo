import { formatStrDate } from "utils/functions"

const News = ({news})=>{
    
    const {source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt } = news

    const {name} = source
    const [date, time] = formatStrDate(publishedAt)

    return <div className="container gap-sm news">
        <a href={url} target='_blank' className="news-link" />
        <img src={urlToImage} alt={name} className='news-img' />
        <div className="container column news-content gap-sm">
            <header>
                <h2>{name} - {title} by {author}</h2>
            </header>
            <main>
                <p>{description}</p>
            </main>
            <footer>
                <p>Publicado el: {date} a las {time} hs</p>      
            </footer>
        </div>
    </div>
}

export default News