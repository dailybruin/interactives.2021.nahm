import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ArticleBoxBig3 from "./ArticleBoxBig3";
import ArticleBox2 from "./ArticleBox2";
import ArticleBoxSmall3 from "./ArticleBoxSmall3";

const Grid = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
grid-template-areas: 
  "big small1"
  "big small2"
`;

export default function Grid3(){
    return (
        <Grid>
          <ArticleBoxBig3 direction="big"></ArticleBoxBig3>
          <ArticleBoxSmall3 direction="small1"></ArticleBoxSmall3>
          <ArticleBoxSmall3 direction="small2"></ArticleBoxSmall3>
        </Grid>
    );

}