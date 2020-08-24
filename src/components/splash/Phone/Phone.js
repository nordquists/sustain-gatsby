import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Demo from '../../../images/sustainDemo.mp4'

const PhoneBody = styled.div`
    background: #FFFFFF;
    border: 7px solid #000000;
    box-sizing: border-box;
    border-radius: 50px;

    
    height: 660px;
    width: 312px;

    overflow: hidden;
    position: relative;

    
`
// ${media.lessThan("940px")`
    //     height: 600px;
    //     width: 285px;
    //     border: 5px solid #000000;
    //     box-sizing: border-box;
    //     border-radius: 40px;
    // `}

export const Phone = () => {
    return (
        <PhoneBody>

        <video autoPlay playsInline webKit-PlaysInline x5-PlaysInline muted preload="auto" style={{width: "100%", height: "100%"}}>
            <source src={Demo} type="video/mp4" />
        </video>
            {/* <ReactPlayer
                    className='react-player'
                    url='../../../images/sustainDemo.mp4'
                    width='100%'
                    height='100%'
                    muted={true}
                    controls={false}
                    playing={true}
                    playsinline={true}
                    /> */}
        </PhoneBody>
    )
}
