import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ArticleBoxBig3 from "./ArticleBoxBig3";
import ArticleBox2 from "./ArticleBox2";
import ArticleBoxSmall3 from "./ArticleBoxSmall3";

const Grid = styled.div`
display: grid;
grid-template-columns:  calc(30% - 5px) 10px calc(70% - 5px);
grid-template-rows: auto auto;
grid-template-areas: 
  "big space small1"
  "big space small2";
  padding-bottom: 40px;
`;
const OtherGrid = styled.div`
display: grid;
grid-template-columns: calc(70% - 5px) 10px calc(30% - 5px);
grid-template-rows: auto auto auto;
grid-template-areas: 
  "small1 space big"
  "small2 space big";
  padding-bottom: 40px;
`;

export default function Grid3(props){
  if (props.twoOnRight) {
    return (
        <Grid>
          <ArticleBoxBig3 direction="big" text="Awesome granny saves life, turns out to be queen elizabeth"></ArticleBoxBig3>
          <ArticleBoxSmall3 direction="small1"></ArticleBoxSmall3>
          <ArticleBoxSmall3 direction="small2"></ArticleBoxSmall3>
        </Grid>
    );
  }

  else if (props.twoOnLeft) {
    return (
        <OtherGrid>
          <ArticleBoxBig3 direction="big" text="Awesome granny saves life, turns out to be queen elizabeth"></ArticleBoxBig3>
          <ArticleBoxSmall3 direction="small1"></ArticleBoxSmall3>
          <ArticleBoxSmall3 direction="small2"></ArticleBoxSmall3>
        </OtherGrid>
    );

  }

}
