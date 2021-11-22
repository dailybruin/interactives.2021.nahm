import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Box = styled.a`
text-decoration: none;
color: black;
height: 95%;
/* width: calc(100% - 10px); */
grid-area: ${(props) => props.direction};
/* width: */
/* margin-top: 100px; */
`;

const Image = styled.div`
  height: 70%;
  object-fit: cover;
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
  background-position: center;
  background-size: cover;
  
  /* position: relative; */
`;

const Text = styled.div`
/* background-color: gray; */
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
