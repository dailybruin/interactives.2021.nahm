import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 50%;
    /* height: 100%; */
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
    flex-grow: 1;
`;

const Information = styled.div`
    background: #4183a6;
    flex-grow: 2;
    padding: 5%;
`;

const Title = styled.div`
    color: white;
    padding: 2%;
`;

const Content = styled.div`
    color: white;
    padding: 2%;
    font-weight: bold;
`;

const Author = styled.div`
    color: white;
    padding: 2%;
`;

export default function NewsItem(props) {
    return (
        <Wrapper>
            <Image src={props.src} alt={props.alt} />
            <Information>
                <Title>{props.title}</Title>
                <Content>{props.content}</Content>
                <Author>By {props.author}</Author>
            </Information>
        </Wrapper>
    );
}