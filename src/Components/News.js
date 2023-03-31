import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general", 
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
      hasMore: true
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - React News`;
  }

   

  fetchNews = async () => {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let parsedData = await (await fetch(url)).json();
    console.log(parsedData)
    await this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });
    this.props.setProgress(100)

  }
  
  async componentDidMount() {
    this.props.setProgress(10)

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let parsedData = await (await fetch(url)).json();
    await this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });
    this.props.setProgress(100)

  }

  render() {
    return (
      <>
        <h1 className="text-center my-4" style={{ fontSize: "40px" }}>
          <strong>{`React News - Top ${this.capitalizeFirstLetter(
            this.props.category
          )} Headlines`}</strong>
        </h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles?.length  }
          next={this.fetchNews}
          hasMore={this.state.articles.length < this.state.totalArticles}
          loader={this.state.loading ? <Spinner /> : <div className="text-center my-4" >No more News Articles</div>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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


}
export default News;


