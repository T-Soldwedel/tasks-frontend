import React from "react";
import "../styles/NewsItem.css";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-item">
      <img src={urlToImage} alt={urlToImage} />
      <div className="news-content">
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
