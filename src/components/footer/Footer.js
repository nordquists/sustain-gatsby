import React from 'react'
import styled from 'styled-components';
import Image from 'gatsby-image'

const Wrapper = styled.div`
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 200px;
    width: 100%;

    // position: absolute;
`

const FooterWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    margin-bottom: 20px;
`

const FooterContent = styled.footer`
    margin-top: 150px;
`

const Title = styled.div`
    font-family: Libre Baskerville;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 130%;
    text-align: left;

    color: #000000;
    
    margin-bottom: 40px;

    width: 15rem;

    padding: 0 1rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 460px) {
        font-size: 1.9rem;
    }
`

const Links = styled.div`
    padding: 0 1rem;
    margin-left: auto;
    display: flex;
    flex-direction: row;
`

const Link = styled.a`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;

    color: #DE6B48;

    margin-right: 20px;
    &:hover {
        color: #999;
    }
`

const Logo = styled.div`
    margin-left: 10px;

    width: 60px;
    height: 60px;

    margin-bottom: 20px;
`

export const Footer = ({ logo }) => {
    return (
        <Wrapper>
            <FooterWrapper>
                <FooterContent>
                    <Logo>
                        <Image fluid={logo} alt="Sustain Logo"/>
                    </Logo>
                    <Title>
                        Let's take out the guess work
                    </Title>
                    <Links>
                        <Link href="https://github.com/nordquists/sustain">Github</Link>
                        <Link href="mailto:sean@nordquists.com">Contact</Link>
                    </Links>
                </FooterContent>
            </FooterWrapper>
        </Wrapper>
    )
}
