import React from 'react'
import styled from 'styled-components';
import { Helmet } from "react-helmet"

const LayoutStyled = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    #main-content {
        width: 100%;
    }
`

export const Layout = ({ children }) => {
    return (
        <LayoutStyled>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="Description" content="Sustain is an upcoming iOS app to scan ingredient labels for unsustainable ingredients"/>
                <title>Sustain</title>
                <link rel="canonical" href="https://sustain.nordquists.com" />
            </Helmet>
            <main id="main-content">{ children }</main>
        </LayoutStyled>
    )
}

export default Layout;