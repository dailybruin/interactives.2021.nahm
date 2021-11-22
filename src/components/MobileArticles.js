import React from "react";
import ArticleBox2 from "./ArticleBox2";

const colorToString = [
    "#607888",
    "#448DB6",
    "#D7AB4A",
    "#A15026"
];

export default function MobileArticles(props) {
    let articleDetails = props.articles;
    if (typeof props.articles == "undefined") {
        
        let arr = []
        for (var i = 0; i < 8; i++) {
            let color = colorToString[i%4];
            arr.push((<div>
                <ArticleBox2 color={color} text={"For any newspaper crap"} caption={"for any image crap"}/>
                </div>));
        }

        return (
            arr.map((ele, index) => {
            return ele;
        })
        );
    }
    else {
        return (
            articleDetails.map((ele, index) => {
                let color = colorToString[index%4];
                return (
                <div>
                <ArticleBox2 color={color} text={"For any newspaper crap"} caption={"for any image crap"}/>
                </div>
                );
            })
        )
    }

}