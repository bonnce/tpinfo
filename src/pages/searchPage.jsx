import 'assets/style/App.css';
import Footer from 'components/footer';
import Header from 'components/header';
import NewsList from 'components/newsList';
import Pagination from 'components/pagination';
import SearchForm from 'components/searchForm';
import { useState } from 'react';

function Search() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleData = (newsData)=>{
    setData(newsData)
  }

  const handleLoading = (band)=>{
    setLoading(band)
  }

  return (
    <div className="search container column">
      <Header/>
      <SearchForm onSubmit={handleData} onLoading={handleLoading} />
      {data && (
        ((data.error || data?.data?.status === 'error') &&
        <p className='error'>{data.error || data.data.message}</p>)
        ||
        (data.data &&
        <>
        <Pagination totalResults={data.data.totalResults} onChange={handleData} onLoading={handleLoading} 
        searchValue={data.searchValue} />

        <NewsList articles={data.data.articles} />

        <Pagination totalResults={data.data.totalResults} onChange={handleData} onLoading={handleLoading} 
        searchValue={data.searchValue} />
      </>)
      )}
    { loading && 
    <div className='loading-container container'> 
      <div className='loading' /> 
    </div>
    }
      <Footer/>
    </div>
  );
}

export default Search;
