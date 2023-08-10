import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    console.log(posts)
    const articles = posts.map((art)=> {
        return (
        <Article key={art.id} title={art.title} date={art.date} preview={art.preview}/>
        )
    })
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList