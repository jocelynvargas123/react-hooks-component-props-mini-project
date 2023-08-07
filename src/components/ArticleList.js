import React from "react";
import Article from "./Article"

function ArticleList(prop){
    const articles = prop.map((art)=> {
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