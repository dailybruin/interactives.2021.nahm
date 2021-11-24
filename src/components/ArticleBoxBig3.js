import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';



const Box = styled.a`
color: black;
grid-area: ${(props) => props.direction};
display: flex;
flex-direction: column;
text-decoration: none;;
justify-content: center;
align-items: center;
background-color: ${(props) => props.color};


${mediaQueries.tablet}{
  align-items: left;
}
 
`;

const Image = styled.div`
  flex: 1 600px;
  width: 100%;
  object-fit: cover;
  background-image: url(${(props)=>props.src});
  background-position: center;
  background-size: cover;
  position: relative;
  /* position: relative; */
  ${mediaQueries.tablet}{
    flex: 1 300px;
}
`;

const Text = styled.div`
/* background-color: gray; */
width: 90%;
color: white;
font-family: 'Roboto', sans-serif;
font-size: 16px;
padding: 10px 0px 10px 0px;
min-height: 60px;
justify-content: center;
text-align: center;

${mediaQueries.tablet}{
    font-size: 13px;
}
`;

const News = styled.div`
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

const BigTextContainer = styled("div")`
    /* border: 1px solid white; */
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px;
    text-transform: uppercase;
    /* display: flex;
    flex-direction: column; */
`;

const BigText = styled("div")`
    text-align: right;
    color: white;
    font-size: 12px;
    ${mediaQueries.tablet} {
        font-size: 10px;
    }
`;

export default function ArticleBoxBig3(props) {
    let dir = props.direction;
    let caption = props.text;
    console.log(props.image)
    return (
        <Box direction = {dir} color={props.color}> 
            <Image src={props.image} alt="">
              <BigTextContainer>
                <BigText> {props.creds} </BigText>
              </BigTextContainer>
            </Image>
            
            <Text >
                {props.text}
            </Text>
        </Box>
      );
}
