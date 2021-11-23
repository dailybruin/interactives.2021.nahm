import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

const WhiteBox = styled("div")`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`
const Header = styled("div")`
    background: #448DB6;
    padding: 50px;
    width: 15%;
    color: white;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    font-style: "Roboto";
    margin: auto;
    justify-content: center;
    position: relative;
    z-index: 1;
    display: inline-block;
    top: 50px;

    ${mediaQueries.tablet}{
    width: 30%;
    font-size: 30px;
    padding: 40px;
}

`

const Box = styled("div")`
    margin: auto;
    justify-content: center;
    background-color: white;
    width: 85%;
    height: 100%;
    padding-top: 1.5%;
    vertical-align: middle;
    position: aboslute;
    z-index: 0;
    ${mediaQueries.tablet}{
    width: 90%;
    font-size: 30px;
    padding: 40px;
}
`

const TextWrap = styled("div")`
    padding: 70px;
    width: 70%;
    font-size: 24px;
    color: #4A4D55;
    font-weight: bold;
    text-align: left;
    margin: auto;
    justify-content: center;

`

export default function Editor(props) {
    return (
        <WhiteBox>
            <Header>
                <text> editor's note </text>
            </Header> 
        <Box>
            <TextWrap>
                <text>
                editor’s goes here headline goes here headline goes here headline goes here headline 
                goes here headline goes here headline goes here headline goes here headline goes here 
                headline goes here headline goes here headline goes here headline goes here headline goes here.
                </text>
            </TextWrap>
        </Box>
        </WhiteBox>
    )
}