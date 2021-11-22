import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ArticleBox2 from "./ArticleBox2";

const Grid = styled.div`
display: grid;
/* height: 60vh; */
margin-left: 0;
grid-template-columns: auto 10px auto;
grid-template-rows: auto;
grid-template-areas: 
  "left space right";
padding-bottom: 20px;
`;

export default function Grid2(){
    return (
        <Grid>
          <ArticleBox2 direction="left"></ArticleBox2>
          <ArticleBox2 direction="right"></ArticleBox2>
        </Grid>
    );

}