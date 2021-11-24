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
grid-row-gap: 35px;

}

`;

const colorToString = {
  "greyish_blue": "#607888",
  "blue": "#448DB6",
  "yellow": "#D7AB4A",
  "brown": "#A15026"
};


export default function Grid2(props){
    console.log(props.data)
    console.log(props.data[1].image_link)
    console.log(props.data[1].title)
    return (
      
        (props.data &&
          <Grid>
          <ArticleBox2 direction="left" 
          color = {colorToString['blue']} 
          image = {props.data[0].image_link}
          section = {props.data[0].section}
          sec_link = {props.data[0].section_link}
          title = {props.data[0].title}
          src = {props.data[0].article_link}
          author = {props.data[0].byline}/>

          <ArticleBox2 direction="right" color={colorToString['yellow']}
          color = {colorToString['yellow']} 
          image = {props.data[1].image_link}
          section = {props.data[1].section}
          sec_link = {props.data[1].section_link}
          title = {props.data[1].title}
          src = {props.data[1].article_link}
          author = {props.data[1].byline}/>
        </Grid>
        
        )
        
      
        
    );

}