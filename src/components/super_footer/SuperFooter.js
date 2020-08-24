import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const ColorSection = styled.div`
    background-color: #DE6B48;

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 300px;
    width: calc(100% + 20px);
    margin-left: -10px;
    // position: absolute;
    z-index: 1;
`

const Title = styled.div`
    font-family: Libre Baskerville;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 130%;
    text-align: center;

    color: #fff;
    
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
    text-align: center;

    color: #fff;

    margin-bottom: 30px;

    width: 20rem;

    padding: 0 1rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 460px) {
        font-size: 1rem;
    }
`

const Logo = styled.div`
    margin: 0 auto;

    width: 60px;
    height: 60px;

    margin-bottom: 20px;
`

const Link = styled.a`
    width: fit-content;

    font-weight: 600;
    color: #fff;

    margin-bottom: 7px;

    cursor: pointer;
    transition: 200ms;
    text-decoration: none;

    &:hover {
        color: #111;
    }
    &:active {
        color: #111;
    }
`

const Wrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 3rem 2rem;
`

export const SuperFooter = ({ logo }) => {
    return (
        <ColorSection>
            <Wrapper>
                <Logo>
                    <Image fluid={logo} alt="Sustain Logo"/>
                </Logo>
                <Title>
                    Sustain is coming soon.
                </Title>
                <Subtitle>
                    For now, check out our <Link href="https://github.com/nordquists/sustain">Github</Link> for a demonstration of the technology.
                </Subtitle>
            </Wrapper>
        </ColorSection>
    )
}
