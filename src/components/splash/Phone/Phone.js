import React from 'react'
import styled from 'styled-components'
import Demo from '../../../images/sustainDemo.mp4'
import DemoWebm from '../../../images/sustainDemo.webm'

const PhoneBody = styled.div`
    background: #FFFFFF;
    border: 7px solid #000000;
    box-sizing: border-box;
    border-radius: 50px;

    
    height: 660px;
    width: 313px;

    overflow: hidden;
    position: relative;

    
`

export const Phone = () => {
    return (
        <PhoneBody>
            <video autoPlay loop playsInline webKit-PlaysInline x5-PlaysInline muted preload="auto" style={{width: "100%", height: "100%"}}>
                <source src={Demo} type="video/mp4" />
                <source src={DemoWebm} type="video/webm" />
            </video>
        </PhoneBody>
    )
}
