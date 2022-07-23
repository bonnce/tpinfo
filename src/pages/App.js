import 'assets/style/App.css';
import Footer from 'components/footer';
import Header from 'components/header';
import NewsList from 'components/newsList';
import Pagination from 'components/pagination';
import SearchForm from 'components/searchForm';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null)
  const handleData = (newsData)=>{
    setData(newsData)
  }
  return (
    <div className="App">
      <Header/>
      <SearchForm onSubmit={handleData} />
      {data &&
      <>
        <Pagination totalResults={data.data.totalResults} onChange={handleData} searchValue={data.searchValue} />
        <NewsList articles={data.data.articles} />
      </>
      }
      <Footer/>
    </div>
  );
}

export default App;
