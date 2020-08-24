import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const BadgeBackground = styled.div`
    background: #3590F3;
    border-radius: 20px;
    // height: 42px;
    width: max-content;
    padding: 10px 20px;
`

export const Badge = ({ children, ...props }) => {
    return (
        <BadgeBackground props={props}>
            <Text>
                {children}
            </Text>
        </BadgeBackground>
    )
}
