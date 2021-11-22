import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Box = styled.div`
/* height: 100%; */
/* margin-left: 0px; */
/* margin-left: 70px; */
/* margin-left: 5px; */
width: calc(100% - 10px);
/* justify-self: center; */
border-style: solid;
border-color: black;
border-width: 5px;
grid-area: ${(props) => props.direction};
`;

const Image = styled.div`
  height: 600px;
  /* width: 100%; */
  object-fit: cover;
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
  background-position: center;
  background-size: cover;
  /* position: relative; */
`;

const Text = styled.div`
background-color: gray;
color: black;
/* padding-top: 20px; */
padding-bottom: 10px;
min-height: 60px;
justify-content: center;
text-align: center;
`;

const News = styled.div`
background-color: gray;
color: black;
padding-top: 8px;
padding-bottom: 10px;
`;

const Byline = styled.div`
background-color: gray;
color: black;
padding-top: 10px;
padding-bottom: 10px;
`;

export default function ArticleBoxBig3(props) {
    let dir = props.direction;
    let caption = props.text;
    return (
        <Box direction = {dir}> 
            <Image src="" alt=""/>
            <Text>
                {/* <News> NEWS </News>
                Limited time on campus, remote learning presents unique challenges
                <Byline> By Emily McAnnis </Byline> */}
                {caption}
            </Text>
        </Box>
      );
}
