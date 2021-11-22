import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Box = styled.div`
width: calc(100% - 10px);
justify-self: center;
border-style: solid;
border-color: black;
border-width: 5px;
grid-area: ${(props) => props.direction};
`;

const Image = styled.div`
  height: 50vh;
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

export default function ArticleBox2(props) {
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
