import News from "./news"

const NewsList = ({articles})=> <div className="container column gap-md news-container">
    {articles.map((a) => <News news={a} key={`${a.author}-${a.title}-${a.url}`} />)}
</div> 

export default NewsList