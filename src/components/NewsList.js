import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import "./NewsList.scss";

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr" +
            query +
            "&apiKey=291b00c075b44ba48adfa38caba8fb81"
        );
        setArticles(response.data.articles);
      } catch (e) {
        prompt(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <div className="loadingBlock">Now loading...</div>;
  }

  if (!articles) {
    return null;
  }

  return (
    <div className="newsListBlock">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
