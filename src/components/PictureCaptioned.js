import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-rows: 85% 15%;
    width: 500px;
    height: 600px;
`

const Image = styled.img` 
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
`

const Caption = styled.div`
    width: 100%;
    height: 100%;
    background-color: #607888;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
`

export default function Picture(props) {
    return (
        <>
            <Container>
                <Image src={props.src}/>
                <Caption> {props.caption} </Caption>
            </Container>
        </>
    )
    
}