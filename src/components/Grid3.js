import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ArticleBoxBig3 from "./ArticleBoxBig3";
import ArticleBox2 from "./ArticleBox2";
import ArticleBoxSmall3 from "./ArticleBoxSmall3";
import { mediaQueries } from '../shared/config';


const Grid = styled.div`
width: 100%;
display: grid;
grid-template-columns: 45% 55%;
grid-template-rows: auto auto;
column-gap: 20px;
row-gap: 20px;
/* column-gap: 5px; */
grid-template-areas: 
  "big small1"
  "big small2";
margin-bottom: 20px;

${mediaQueries.tablet}{
/* grid-template-columns: 100%;
grid-template-rows: auto auto auto;
gap: 8px 0px; 
grid-template-areas:
  "small1"
  "big"
  "small2"; */
  display:flex;
  flex-direction: column;

}
`;
const OtherGrid = styled.div`
display: grid;
grid-template-columns: 55% 45%;
row-gap: 20px;
column-gap: 20px;
grid-template-rows: auto auto;
grid-template-areas: 
  "small1 big"
  "small2 big";
padding-bottom: 40px;

${mediaQueries.tablet}{
/* grid-template-columns: 100%;
grid-template-rows: auto auto auto;;
grid-template-areas:
  "small1"
  "small2"
  "big";
gap: 8px 0px; */
display:flex;
flex-direction: column;
} 
`;

const colorToString = {
  "greyish_blue": "#607888",
  "blue": "#448DB6",
  "yellow": "#D7AB4A",
  "brown": "#A15026"
};


export default function Grid3(props){
  console.log(props.twoOnright);
  if (props.twoOnRight) {
    return (
        <Grid>
          <ArticleBoxBig3 twoOnRight={props.twoOnRight} color = {colorToString["greyish_blue"]} direction="big" text="Awesome granny saves life, turns out to be queen elizabeth"></ArticleBoxBig3>
          <ArticleBoxSmall3 twoOnRight={props.twoOnRight} color={colorToString["brown"]} direction="small1"></ArticleBoxSmall3>
          <ArticleBoxSmall3 twoOnRight={props.twoOnRight} color={colorToString["blue"]} direction="small2"></ArticleBoxSmall3>
        </Grid>
    );
  }

  else{
    return (
        <OtherGrid>
          <ArticleBoxBig3 color = {colorToString["greyish_blue"]} direction="big" text="Awesome granny saves life, turns out to be queen elizabeth"></ArticleBoxBig3>
          <ArticleBoxSmall3 color={colorToString["brown"]} direction="small1"></ArticleBoxSmall3>
          <ArticleBoxSmall3 color={colorToString["yellow"]} direction="small2"></ArticleBoxSmall3>
        </OtherGrid>
    );

  }

}
