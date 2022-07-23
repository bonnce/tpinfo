
const News = ({news})=>{
    
    const {source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt } = news

    const {name} = source

    return <div >
        <a href={url} />
        <header>
            <h2>{name} - {title} by {author}</h2>
        </header>
        <img src={urlToImage} alt={name} />
        <main>
            <p>{description}</p>
        </main>
        <footer>
            {publishedAt}
        </footer>
    </div>
}

export default News