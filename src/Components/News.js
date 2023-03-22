import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export class News extends Component {

  static defaultProps = {
    country:"in",
    pageSize:6,
    category:"general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

   capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - React News`
  }

  async updateNews(){
    const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6711492a3e11496a95231829d20b996f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
    articles: parsedData.articles,
    totalArticles: parsedData.totalResults,
    loading:false
  });

  } 

  async componentDidMount() {
    this.updateNews();
    
    
  }

  handlePrevious = async () => {
    console.log("previous");

    await this.setState({page: this.state.page - 1, });
    this.updateNews();
  };

  handleNext = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles /this.props.pageSize)) {
    } 
    else {
    await this.setState({page: this.state.page + 1, });
    this.updateNews();

    }
  };

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center my-4" style={{fontSize:"40px"}} ><strong>{`React News - Top ${this.capitalizeFirstLetter(this.props.category)} Headlines`}</strong></h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title != null ? element.title : ""
                  }
                  description={
                    element.description != null
                      ? element.description
                      : ""
                  }
                  author={element.author}
                  date={new Date (element.publishedAt)}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" class="btn btn-dark my-4" 
            disabled={this.state.page <= 1}
           
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button type="button" class="btn btn-dark my-4"
          
           disabled={(this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize))}
            
            onClick={this.handleNext}
          >
            Next &larr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
