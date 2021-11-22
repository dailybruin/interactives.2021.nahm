import React from "react";
import ArticleBox2 from "./ArticleBox2";

export default function MobileArticles(props) {
    let articleDetails = props.articles;
    return (
        articleDetails.map((ele, index) => {
            return (
            <div>
            <ArticleBox2 color={"right color string"} text={"For any newspaper crap"} caption={"for any image crap"}/>
            </div>
            );
        })
    )


}