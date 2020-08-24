import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Wrapper = styled.div`
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 500px;
    width: 100%;

    // position: absolute;
`

const TextWrapper = styled.div`
    max-width: 25rem;
    width: 100%;
    height: 341px;

    margin-left: 60px;
    margin-top: 50px;

    @media (max-width: 700px) {
        margin-left: 0;
    }
`

const ImageWrapper = styled.div`
    height: 340px;
    width: 150px;
    margin-top: 70px;
    
    @media (max-width: 700px) {
        display: none;
    }
`

const Logo = styled.div`
    margin-left: 20px;

    width: 60px;
    height: 60px;

    margin-bottom: 10px;
`

const Title = styled.div`
    font-family: Libre Baskerville;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 130%;
    text-align: left;

    color: #000000;
    
    margin-bottom: 20px;

    padding: 0 1rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 460px) {
        font-size: 1.9rem;
    }
`

const Subtitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 130%;
    text-align: left;

    color: #ADADAD;

    margin-bottom: 30px;

    padding: 0 1rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 460px) {
        font-size: 1rem;
    }
`

export const IngredientFeature = ({ ingredientImage, logo }) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image fluid={ingredientImage} alt="Ingredient list" height={100}/>
            </ImageWrapper>
            <TextWrapper>
                <Logo>
                    <Image fluid={logo} alt="Sustain Logo"/>
                </Logo>
                <Title>
                    Sustain knows what to look for
                </Title>
                <Subtitle>
                    There are dozens of unsustainably derived products that go by increasingly harder to remember names.
                </Subtitle>
            </TextWrapper>
        </Wrapper>
    )
}
