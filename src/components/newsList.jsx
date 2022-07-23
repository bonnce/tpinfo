import News from "./news"

const NewsList = ({articles})=> <div>
    {articles.map((a) => <News news={a} />)}
</div> 

export default NewsList