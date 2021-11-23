import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ArticleBox2 from "./ArticleBox2";
import { mediaQueries } from '../shared/config';

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 20px;
margin-bottom: 20px;
/* 
grid-template-areas: 
  "left space right";
padding-bottom: 20px; */

${mediaQueries.tablet}{
grid-template-columns: 100%;
grid-template-rows: auto;
grid-column-gap: 0;
grid-row-gap: 10px;

}

`;

const colorToString = {
  "greyish_blue": "#607888",
  "blue": "#448DB6",
  "yellow": "#D7AB4A",
  "brown": "#A15026"
};


export default function Grid2(){
    return (
        <Grid>
          <ArticleBox2 direction="left" color = {colorToString['blue']}></ArticleBox2>
          <ArticleBox2 direction="right" color={colorToString['yellow']}></ArticleBox2>
        </Grid>
    );

}