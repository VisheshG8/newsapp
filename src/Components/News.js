import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0)
  const [progress , setProgress] = useState(0)


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 const fetchNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(50)
    let parsedData = await (await fetch(url)).json();
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalArticles(parsedData.totalResults)
    setLoading(false)
    setPage(page+1)
    props.setProgress(100)

  }
  useEffect(() => {
    fetchNews();
  }, []);
  
    return (
      <>
        <h1 className="text-center my-4" style={{ fontSize: "40px" }}>
          <strong>{`React News - Top ${capitalizeFirstLetter(
            props.category
          )} Headlines`}</strong>
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles?.length  }
          next={fetchNews}
          hasMore={articles.length < totalArticles}
          loader={loading ? <Spinner /> : <div className="text-center my-4" >No more News Articles</div>}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title !== null ? element.title : ""}
                      description={
                        element.description !== null
                          ? element.description
                          : ""
                      }
                      author={element.author}
                      date={new Date(element.publishedAt)}
                      imageUrl={element.urlToImage}
                      url={element.url}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

    
      </>
    );

}



News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general", 
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News;


