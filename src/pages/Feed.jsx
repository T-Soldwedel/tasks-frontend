import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "../components/NewsItem";

const Feed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=politics&apiKey=696227f2d3c646dd878a1ec7d19c551d"
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, []);

  return (
    <> 
      {articles.slice(0, 10).map((article, index) => {
        return (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}

    </>
  );
};

export default Feed;
