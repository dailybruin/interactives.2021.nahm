import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


const Box = styled.a`
display: flex;

flex-direction: row;
text-decoration: none;
color: white;
background-color: ${(props) => props.color};
grid-area: ${(props) => props.direction};
flex: 1 200px;
&:hover{
        box-shadow: 5px 5px 5px rgba(0,0,0);
    }
${mediaQueries.tablet}{
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

const ReverseBox = styled.a`
display: flex;
flex-direction: row-reverse;
text-decoration: none;
color: black;
background-color: ${(props) => props.color};
grid-area: ${(props) => props.direction};
&:hover{
        box-shadow: 5px 5px 5px rgba(0,0,0);
    }

${mediaQueries.tablet}{
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`

const Image = styled.div`
  object-fit: cover;
  background-image: url(${(props)=>props.src});
  background-position: center;
  background-size: cover;
  min-width: 50%;

  ${mediaQueries.tablet}{
    width: 100%;
    min-height: 210px;
}
`;

const Text = styled.div`
color: white;
width: 90%;
margin: 15px;

font-family: 'Roboto', sans-serif;
font-weight: 700;
text-align: left;
${mediaQueries.tablet}{
  text-align: left;
  font-size: 15px;
}
`;

const News = styled.div`
/* padding-top: 8px; */
padding-bottom: 10px;
font-weight: 500;
`;

const Byline = styled.div`
padding-top: 10px;
font-weight: 400;

`;

export default function ArticleBoxSmall3(props) {
    let dir = props.direction;
    let source = "http://google.com"; //get value from props.src
    console.log(props.direction);
    console.log(props.image);
    console.log(props.title);
    if (props.twoOnRight) {
    return (
        <Box color={props.color} direction = {dir} href={props.src}> 
            <Image src={props.image} alt=""/>
            <Text >
                <News> {props.section} </News>
                {props.title}
                <Byline> {props.author} </Byline>
            </Text>
        </Box>
      );
    }
    else{
      return (
        <ReverseBox color={props.color} direction = {dir} href={source}> 
            <Image src={props.image} alt=""/>
            <Text color={props.color}>
                <News> {props.section} </News>
                {props.title}
                <Byline> {props.author} </Byline>
            </Text>
            
            </ReverseBox>
      );

    }
}
