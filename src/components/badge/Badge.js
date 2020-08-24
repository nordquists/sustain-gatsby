import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    text-align: center;
`

const BadgeBackground = styled.a`
    background: #3590F3;
    border: 1px solid #3590F3;
    border-radius: 20px;
    // height: 42px;
    width: max-content;
    padding: 7px 20px;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: #fff;
        color: #3590F3;
    }
`

export const Badge = ({ children, href }) => {
    return (
        <BadgeBackground href={href}>
            <Text>
                {children}
            </Text>
        </BadgeBackground>
    )
}
