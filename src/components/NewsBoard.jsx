// import React from 'react'

import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { VITE_API_KEY } from "./constant";

const NewsBoard = () => {


  const getNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${VITE_API_KEY}`
    const data = await fetch (url);
    const json = await data.json();
    console.log(json);
    setArticles(json.articles);
  }
  const [articles, setArticles] = useState([]);
  console.log(articles);

  useEffect(()=>{
    
    // fetch(url).then(response =>response.json()).then(data => setArticles(data.articles))
    getNews();

  },[]);

  return (
    <div>
    <h2 className="text-center py-4">Latest <span className=" badge bg-danger">News</span></h2>
      {articles.map((news,index)=> {
        return <NewsItem key ={index} title = {news.title} description = {news.description} src = {news.urlToImage} url ={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard;
