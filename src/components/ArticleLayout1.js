import React from "react";
import styled from "styled-components";

const Column1 = styled.div`
    display:  grid;
    width: 60%;
    grid-template-rows: 40% 30% 30%;
    grid-template-areas: 
        "picture"
        "news"
        "news";
    grid-row-gap: 2%;
    padding-right: 1%;
`

const Column2 = styled.div`
    display:  grid;
    width: 40%;
    grid-template-rows: 30% 70%;
    grid-template-areas: 
        "news"
        "picture";
    grid-row-gap: 2%;
    padding-left: 1%;
`


export default function ArticleLayout1(props) {
    return (
        <>
            <Column1> "Hello" </Column1>
            <Column2> "Goodbye" </Column2>
        </>
    )
}