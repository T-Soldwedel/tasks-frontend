import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "../components/NewsItem";

const Feed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=politics&apiKey=696227f2d3c646dd878a1ec7d19c551d"
        );
        setArticles(response.data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // getArticles();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Hello</h1>
      {articles.slice(0, 10).map((article, index) => (
        <NewsItem
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
        />
      ))}
    </>
  );
};

export default Feed;