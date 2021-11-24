import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ArticleBoxBig3 from "./ArticleBoxBig3";
import ArticleBox2 from "./ArticleBox2";
import ArticleBoxSmall3 from "./ArticleBoxSmall3";
import { mediaQueries } from '../shared/config';


const Grid = styled.div`
width: 100%;
display: grid;
grid-template-columns: calc(45%-10px) calc(55%-10px);
grid-template-rows: auto auto;
column-gap: 20px;
row-gap: 20px;
/* column-gap: 5px; */
grid-template-areas: 
  "big small1"
  "big small2";
margin-bottom: 20px;

${mediaQueries.tablet}{
  display:flex;
  flex-direction: column;

}
`;
const OtherGrid = styled.div`
width: 100%;
display: grid;
grid-template-columns: 55% 45%;
grid-template-rows: auto auto;
column-gap: 20px;
row-gap: 20px;

grid-template-areas: 
  "small1 big"
  "small2 big";
padding-bottom: 40px;

${mediaQueries.tablet}{
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
  console.log(props.data);

  if (props.twoOnRight) {
    return (
      (props.data &&
        <Grid>
          {props.data.map(block=>{
            if(block.type === 'picture') {
              return(
                <ArticleBoxBig3 
            twoOnRight={props.twoOnRight} 
            color = {colorToString["greyish_blue"]} 
            direction="big" 
            image = {block.art_link}
            creds = {block.photo_credit}
            text={block.photo_caption}/>
              )
            }
            else if (block.type === 'article_card_top') {
              console.log("enter top article card")
              console.log(block.title);
              console.log(block.image_link);
              return(
                <ArticleBoxSmall3 
                  twoOnRight={props.twoOnRight} 
                  color={colorToString["brown"]} 
                  direction="small1"
                  image = {block.image_link}
                  section = {block.section}
                  sec_link = {block.section_link}
                  title = {block.title}
                  src = {block.article_link}
                  author = {block.byline}/>

              )
            }
            else{
              return(
                <ArticleBoxSmall3 
                  twoOnRight={props.twoOnRight} 
                  color={colorToString["blue"]} 
                  direction="small2"
                  image = {block.image_link}
                  section = {block.section}
                  sec_link = {block.section_link}
                  title = {block.title}
                  src = {block.article_link}
                  author = {block.byline}/>

              )
            }
          })}
      
          
         
        </Grid>
        )
        
    );
  }

  else{
    return (
      (props.data &&
        <OtherGrid>
          {props.data.map(block=>{
            if(block.type === 'picture') {
              return(
                <ArticleBoxBig3 
            twoOnRight={props.twoOnRight} 
            color = {colorToString["greyish_blue"]} 
            direction="big" 
            image = {block.art_link}
            creds = {block.photo_credit}
            text={block.photo_caption}/>
              )
            }
            else if (block.type === 'article_card_top') {
              console.log("enter top article card")
              console.log(block.title);
              console.log(block.image_link);
              return(
                <ArticleBoxSmall3 
                  twoOnRight={props.twoOnRight} 
                  color={colorToString["brown"]} 
                  direction="small1"
                  image = {block.image_link}
                  section = {block.section}
                  sec_link = {block.section_link}
                  title = {block.title}
                  src = {block.article_link}
                  author = {block.byline}/>

              )
            }
            else{
              return(
                <ArticleBoxSmall3 
                  twoOnRight={props.twoOnRight} 
                  color={colorToString["blue"]} 
                  direction="small2"
                  image = {block.image_link}
                  section = {block.section}
                  sec_link = {block.section_link}
                  title = {block.title}
                  src = {block.article_link}
                  author = {block.byline}/>

              )
            }
          })}
          {/* <ArticleBoxBig3 color = {colorToString["greyish_blue"]} direction="big" text="Awesome granny saves life, turns out to be queen elizabeth"></ArticleBoxBig3>
          <ArticleBoxSmall3 color={colorToString["brown"]} direction="small1"></ArticleBoxSmall3>
          <ArticleBoxSmall3 color={colorToString["yellow"]} direction="small2"></ArticleBoxSmall3> */}
        </OtherGrid>
        
        )
        
    );

  }

}
