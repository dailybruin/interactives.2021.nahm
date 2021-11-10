import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ArticleBox2 from "./ArticleBox2";

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
          <ArticleBox2 direction="big"></ArticleBox2>
          <ArticleBox2 direction="small1"></ArticleBox2>
          <ArticleBox2 direction="small2"></ArticleBox2>
        </Grid>
    );

}