import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


const Box = styled.a`
display: flex;
flex-direction: row;
text-decoration: none;
color: black;
/* height: 95%; */
/* width: calc(100% - 10px); */
grid-area: ${(props) => props.direction};
/* width: */
/* margin-top: 100px; */
${mediaQueries.tablet}{
  flex-direction: column;
  grid-gap: 8px;
}
`;

const ReverseBox = styled.a`
display: flex;
flex-direction: row-reverse;
text-decoration: none;
color: black;
/* height: 95%; */
/* width: calc(100% - 10px); */
grid-area: ${(props) => props.direction};
/* width: */
/* margin-top: 100px; */

${mediaQueries.tablet}{
  flex-direction: column;
}
`

const Image = styled.div`
  /* height: 70%; */
  object-fit: cover;
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
  background-position: center;
  background-size: cover;
  width: 70%;
  /* position: relative; */
  ${mediaQueries.tablet}{
  width: 100%;
  min-height: 300px;
}
`;

const Text = styled.div`
color: black;
min-height: 30%;
/* padding-top: 20px; */
/* margin-bottom: 800px; */
/* padding-bottom: 10px; */
background-color: ${(props) => props.color};
`;

const News = styled.div`
/* background-color: gray; */
color: black;
padding-top: 8px;
padding-bottom: 10px;
`;

const Byline = styled.div`
/* background-color: gray; */
color: black;
padding-top: 10px;
/* padding-bottom: 10px; */
`;

export default function ArticleBoxSmall3(props) {
    let dir = props.direction;
    let source = "http://google.com"; //get value from props.src
    if (props.twoOnRight) {
    return (
        <Box direction = {dir} href={source}> 
            <Image src="" alt=""/>
            <Text color={props.color}>
                <News> NEWS </News>
                Limited time on campus, remote learning presents unique challenges
                <Byline> By Emily McAnnis </Byline>
            </Text>
        </Box>
      );
    }
    else {
      return (
        <ReverseBox direction = {dir} href={source}> 
            <Image src="" alt=""/>
            <Text color={props.color}>
                <News> TWO ON LEFT </News>
                Limited time on campus, remote learning presents unique challenges
                <Byline> By Emily McAnnis </Byline>
            </Text>
            </ReverseBox>
      );

    }
}
