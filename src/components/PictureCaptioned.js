import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* display: grid; */
    /* grid-template-rows: 6fr 1fr; */
    width: 500px;
    height: 600px;
    /* border-style: dashed; */
    position: relative;
`

const Image = styled.div`
    width: 100%;
    height: 100%;
`;

const Caption = styled.div`
    position: absolute;
    width: 100%;
    height: 15%;
    bottom: 0;
    font-family: Roboto;
    background-color: #607888;
    font-size: 20px;
    text-align: left;
    color: #FFFFFF;
    padding: 2%;
`

const Credits = styled.div`
    position: absolute;
    bottom: 20%;
    margin-left: ${props => props.isRight ? "auto" : "2%"};
    margin-right: ${props => props.isRight ? "2%" : "auto"};
    margin: 2%;
    text-transform: uppercase;
    font-size: 20px;
`;

export default function Picture(props) {
    return (
        <>
            <Container>
                <Image src={props.src}/>
                <Credits isRight={props.isRight}>{props.credits}</Credits>
                <Caption> {props.caption} </Caption>
            </Container>
        </>
    )
    
}