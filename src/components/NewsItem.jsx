// import React from 'react'
// import {title, description, src, url} from "./NewsBoard"
import image from "../assets/news.jpg"

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 p-2" style={{maxWidth:"345px"}}>
  <img src={src ?src : image} style = {{height:"200px", width:"325px"}}className="card-img-top" alt="Image"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description? description.slice(0,90): "Stay informed with our news app, your go-to source for the latest updates and stories from around the world."}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default NewsItem
