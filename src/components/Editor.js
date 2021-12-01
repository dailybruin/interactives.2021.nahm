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
    width: 40%;
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
    width: 60%;
    height: 20px;
    font-size: 15px;
    padding: 40px;
    /* font-size: 15px; */
    /* top: 60px; */
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
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 3%;
    font-size: 30px;
}
`

const TextWrap = styled("div")`
    padding: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    /* color: #4A4D55; */
    font-weight: 700;
    /* text-align: left; */
    /* margin: auto; */
    /* justify-content: center; */

    ${mediaQueries.tablet}{
    font-size: 12px;
    width: 50%;
    text-align: center;
    padding: 50px 20px 20px 20px;
    margin: 5px;
    width: 80%;
    /* padding-top: 20px; */
    /* padding: 30px; */
}`

const Text = styled("div")`

`

export default function Editor(props) {
    return (
        <WhiteBox>
            <Header>
                <text> {props.title}</text>
            </Header> 
        <Box>
            <TextWrap>
                <Text>
                {props.text}
                </Text>
            </TextWrap>
        </Box>
        </WhiteBox>
    )
}