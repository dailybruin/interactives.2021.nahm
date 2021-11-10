import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ArticleBox from "./ArticleBox";

const Grid = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto;
grid-template-areas: 
  "left right"
`;

export default function Grid1(){
    return (
        <Grid>
          <ArticleBox direction="left"></ArticleBox>
          <ArticleBox direction="right"></ArticleBox>
        </Grid>
    );

}