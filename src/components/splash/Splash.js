import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { Badge } from '../badge/Badge'
import { Phone } from './Phone/Phone'

const SplashWrapper = styled.div`
    background-color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    padding-top: 100px;

    @media (max-width: 460px) {
        padding-top: 50px;
    }
`

const Logo = styled.div`
    margin: 0 auto;

    width: 60px;
    height: 60px;

    margin-bottom: 20px;
`

const Title = styled.div`
    font-family: Libre Baskerville;
    font-style: normal;
    font-weight: bold;
    font-size: 3.3rem;
    line-height: 130%;
    text-align: center;

    color: #000000;
    
    margin-bottom: 20px;

    padding: 0 1rem;

    @media (max-width: 768px) {
        font-size: 2.9rem;
    }

    @media (max-width: 460px) {
        font-size: 2.2rem;
    }
`

const Subtitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 130%;
    text-align: center;

    color: #ADADAD;

    margin-bottom: 30px;

    padding: 0 1rem;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media (max-width: 460px) {
        font-size: 1rem;
    }
`

const TitleWrapper = styled.div`
    margin-top: 0px;
    margin-bottom: 50px;

    max-width: 700px;
    width: 100%;
`

const ColorSection = styled.div`
    background: #DE6B48;
    margin-top: 260px;
    display: flex;
    justify-content: center;
    align-items: center;

    bottom: 0;
    width: calc(100% + 30px);
    margin-left: -10px;
    height: 300px;
    z-index: 1;
    padding-bottom: 10rem;
`

const ImageWrapper = styled.div`
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;

    z-index: 2;
`

const BadgeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Splash = ({ imageData }) => {
    return (
        <SplashWrapper>
            <TitleWrapper>
                <Logo>
                    <Image fluid={imageData} alt="Sustain Logo"/>
                </Logo>
                <Title>
                    Let’s make sustainable living sustainable.
                </Title>
                <Subtitle>
                    Keeping up with what ingredients are sustainable and what aren’t can be a headache – let Sustain take care of that for you. 
                </Subtitle>
                <BadgeContainer>

                    <Badge href="https://github.com/nordquists/sustain">
                        Check us out on Github
                    </Badge>
                </BadgeContainer>
            </TitleWrapper>
            <ColorSection>
                <ImageWrapper>
                    <Phone/>
                </ImageWrapper>
            </ColorSection>
        </SplashWrapper>
    )
}

export default Splash;
