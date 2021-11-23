import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./components/NewsItem";
import "./App.css";

function App() {
    const [data, setData] = useState(null);

    // useEffect(() => {
    // 	fetch("<TODO: insert api url here>")
    // 	.then(res => res.json())
    // 	.then(res => setData(res.data['article.aml']))
    // }, [])

    return (
        <NewsItem
            src="https://picsum.photos/500"
            alt="A Sample Picture"
            title="A Sample Title"
            content="Sample Content"
            author="Angad Kapoor"
        />
    );
}

export default App;
