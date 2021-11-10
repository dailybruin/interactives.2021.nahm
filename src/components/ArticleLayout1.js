import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

const Container = styled("div")`
    border: 1px solid black;
    display: grid;
    width: 200px;
    grid-template-columns: 10fr 5fr;
    grid-template-rows: 5fr 2fr auto auto auto;
    gap: 5px;
    justify-content: center;
`
const LeftPicture = styled("div")`
    border: 1px solid black;
    grid-row: 1 / span 2;
 
`

const Box = styled("div")`
    border: 1px solid black;
`
const RightPicture = styled("div")`
    border: 1px solid black;
    grid-column-start: 2 ;
    grid-row: 2 / 5;
`

function articleLayout1(props){
    return(
        <Container>
            <LeftPicture>hello1</LeftPicture>
            <Box>hello2</Box>
            <Box>hello3</Box>
            <RightPicture>hello4</RightPicture>      
            <Box>hello5</Box>
        </Container>

    )
    
}

export default articleLayout1;