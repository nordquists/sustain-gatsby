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

    max-height: 1000px;
    width: 100%;

    padding-top: 100px;
`

const Logo = styled.div`
    width: 40px;
    height: 40px;
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
`

const Subtitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    text-align: center;

    color: #ADADAD;

    margin-bottom: 30px;
`

const TitleWrapper = styled.div`
    margin-top: 70px;
    margin-bottom: 70px;

    max-width: 700px;
    width: 100%;
`

const ColorSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #DE6B48;
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 300px;
    z-index: 1;
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
                    <Image fluid="./images/rectangle.png" alt="Sustain Logo"/>
                </Logo>
                <Title>
                    Let’s make sustainable living sustainable.
                </Title>
                <Subtitle>
                    Keeping up with what ingredients are sustainable and what aren’t can be a headache – let Sustain take care of that for you. 
                </Subtitle>
                <BadgeContainer>
                    <Badge>
                        BETA
                    </Badge>
                </BadgeContainer>
            </TitleWrapper>
            <ImageWrapper>
                <Phone/>
            </ImageWrapper>
            <ColorSection/>
        </SplashWrapper>
    )
}

const query  = graphql`
  query {
    fileName: file(relativePath: { eq: "images/myimage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `

export default Splash;
