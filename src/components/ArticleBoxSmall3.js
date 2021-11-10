import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Box = styled.div`
height: 95%;
width: 85%;
justify-self: center;
/* border-style: solid;
border-color: black;
border-width: 3px; */
grid-area: ${(props) => props.direction};
`;

const Image = styled.div`
  height: 70%;
  object-fit: cover;
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
  background-position: center;
  background-size: cover;
  border-top-width: 3px;
  border-left-width: 3px;
  border-right-width: 3px;
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  /* position: relative; */
`;

const Text = styled.div`
background-color: gray;
color: black;
height: 30%;
/* padding-top: 20px; */
padding-bottom: 10px;
border-bottom-width: 3px;
border-bottom-style: solid;
border-left-width: 3px;
border-right-width: 3px;
  border-left-style: solid;
  border-right-style: solid;
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
/* padding-bottom: 10px; */
`;

export default function ArticleBoxSmall3(props) {
    let dir = props.direction;
    return (
        <Box direction = {dir}> 
            <Image src="" alt=""/>
            <Text>
                <News> NEWS </News>
                Limited time on campus, remote learning presents unique challenges
                <Byline> By Emily McAnnis </Byline>
            </Text>
        </Box>
      );
}
