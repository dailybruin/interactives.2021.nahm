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
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
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
    if (props.twoOnRight) {
    return (
        <Box color={props.color} direction = {dir} href={source}> 
            <Image src="" alt=""/>
            <Text >
                <News> NEWS </News>
                Limited time on campus, remote learning presents unique challenges
                <Byline> By Emily McAnnis </Byline>
            </Text>
        </Box>
      );
    }
    else{
      return (
        <ReverseBox color={props.color} direction = {dir} href={source}> 
            <Image src="" alt=""/>
            <Text color={props.color}>
                <News> TWO ON LEFT </News>
                article title
                <Byline> By Emily McAnnis </Byline>
            </Text>
            
            </ReverseBox>
      );

    }
}
