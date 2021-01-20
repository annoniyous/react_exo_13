import './Article.css'
 import React, { Component } from 'react'
 
 export class Article extends Component {
     render() {
         return (this.props.info.map((article) =>
             <div >
                 <h1 key ={article.id}>{article.titre}</h1>
                 <p>{article.texte}</p>
                 <span></span>
             </div>
         )
        )
    }
}
    
 
 
export default Article
 