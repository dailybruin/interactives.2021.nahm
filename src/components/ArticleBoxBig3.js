import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Box = styled.a`
/* text-decoration: none; */
color: black;

grid-area: ${(props) => props.direction};
display: flex;
flex-direction: column;
text-decoration: none;;
justify-content: center;
align-items: center;
grid-gap: 8px; 
`;

const Image = styled.div`
  flex: 1 600px;
  width: 100%;
  object-fit: cover;
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
  background-position: center;
  background-size: cover;
  /* position: relative; */
`;

const Text = styled.div`
background-color: gray;
width: 100%;
color: black;
/* padding-top: 20px; */
padding-bottom: 10px;
min-height: 60px;
justify-content: center;
text-align: center;
background-color: ${(props) => props.color};;
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
padding-bottom: 10px;
`;

export default function ArticleBoxBig3(props) {
    let dir = props.direction;
    let caption = props.text;
    let source = "http://google.com"; //get it from props.src
    return (
        <Box direction = {dir} href={source}> 
            <Image src="" alt=""/>
            <Text color={props.color}>
                {/* <News> NEWS </News>
                Limited time on campus, remote learning presents unique challenges
                <Byline> By Emily McAnnis </Byline> */}
                {caption}
            </Text>
        </Box>
      );
}
