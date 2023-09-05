import styled from "styled-components";
// @ts-ignore
import bgvideo from "../../assets/bgcontacts.webm";
import React from "react";

const StyledBgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.1;

  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Backgroundvideo = () => {
    return (
        <StyledBgVideo>
            <video autoPlay muted loop>
                <source src={bgvideo} type="video/webm"/>
            </video>
        </StyledBgVideo>
    );
};

export default Backgroundvideo;