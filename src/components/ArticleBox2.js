import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


const Box = styled.a`
display: flex;
flex-direction: column;
text-decoration: none;;
justify-content: center;
align-items: center;
background-color: ${(props) => props.color};
&:hover{
        box-shadow: 5px 5px 5px rgba(0,0,0);
    }

`;

const Image = styled.div`
  flex: 1 200px;
  min-height: 420px;
  width: 100%;
  background-image: url(${"https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg"});
  background-position: center;
  background-size: cover;
  ${mediaQueries.tablet}{
    min-height: 210px;
}
`;

const Text = styled.div`
width: 90%;
color: white;
text-align: left;
margin: 15px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 20px;

${mediaQueries.tablet}{
    font-size: 15px;
}

`;

const News = styled.div`
padding-top: 8px;
padding-bottom: 10px;
font-weight: 500;
`;

const Byline = styled.div`
font-weight: 400;
padding-top: 10px;
padding-bottom: 10px;
`;

export default function ArticleBox2(props) {
    let dir = props.direction;
    let color = props.color;
    if (typeof(props.text) == 'undefined' && typeof(props.caption) != 'undefined') {
        return (
          <Box direction = {dir} color={color} href={"http://google.com"}> 
              <Image src="" alt=""/>
              <Text >
                  Limited time on campus, remote learning presents unique challenges
                  <Byline> By Emily McAnnis </Byline>
              </Text>
          </Box>
        );
    }

    else {
      return (
          <Box direction = {dir} color={color} href={"http://google.com"}> 
              <Image src="" alt=""/>
              <Text color={color}>
                  <News> NEWS </News>
                  Limited time on campus, remote learning presents unique challenges
                  <Byline> By Emily McAnnis </Byline>
              </Text>
          </Box>
        );
    }
}
