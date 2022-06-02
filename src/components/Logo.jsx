import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  display:flex;
  align-items: center;  
`;

const LogoImg = styled.div`
width: auto;
height: 5rem;

img{
    width: 100%;
    height: 100%;
}
`;



export default function Logo(props){
  return (
    <LogoWrapper>
        <LogoImg><img src="https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/Add_a_heading__3_-removebg-preview.png?v=1653865947431" alt="KM Jewelry" /></LogoImg>
        
    </LogoWrapper>
  )
}
