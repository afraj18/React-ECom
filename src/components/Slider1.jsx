import React, { useState } from 'react'
import styled from "styled-components"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { sliderItems } from '../data';

const Container = styled.div`
    width:100%;
    height:100vh;
    overflow:hidden;
    display:flex;
    position:relative;
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color: white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin:auto;
    opacity:0.5;
    cursor:pointer;
    z-index:2;
    
`
const Wrapper = styled.div`
    height:100%;
    display:flex;
    transition : all 1.5s ease;
    transform : translate(${props => props.sliderIndex * -100}vw);
`
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background: #${props => props.bg}
`
const ImgContainer = styled.div`
        height:100%;
        flex : 1;
`
const Image = styled.img`

    height:80%;
    display :flex;
    align-items:center;
    justify-content:center;

`
const InfoContainer = styled.div`
    padding : 50px;    
    flex:1;`
const Title = styled.h1`
    font-size:60px;    
`
const Desc = styled.p`
    font-size: 20px;
    margin 30px 0px;
    font-weight:500;
    letter-spacing: 3px;
`
const Button = styled.button`
    font-size:20px;
    padding:5px;
    background:transparent;
    cursor:pointer;
    border:2px solid black;
`

export const Slider1 = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
        }
        else {
            setSliderIndex(sliderIndex < 3 ? sliderIndex + 1 : 0);
        }

    }
    return (

        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftIcon />
            </Arrow>
            <Wrapper sliderIndex={sliderIndex}>
                {sliderItems.map((items) => (
                    <Slide bg={items.bg} key={items.id}>
                        <ImgContainer>
                            <Image src={items.img} alt="Perfume" />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{items.title}</Title>
                            <Desc>{items.desc}</Desc>
                            <Button>Shop Now</Button>
                        </InfoContainer>
                    </Slide>
                ))}


            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightIcon />
            </Arrow>
        </Container >

    )
}
