import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date , source } = this.props;
    return (
      <div className="my-3 center">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc="
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title my-4">
              <strong>
                {title}...{" "}
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger"> {source}
                </span>
              </strong>
            </h5>
            <p className="card-text my-4">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on {new Date(date)
                  .toLocaleString(undefined, {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short",
                  })
                  .replace("GMT+5:30", "IST")}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
