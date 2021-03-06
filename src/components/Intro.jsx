import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';
import Navlinks from './navLinks';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from './responsive';
import MobileNavlinks from './mobileNavLinks';


const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display:flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
  flex: 1;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height:100%;
  justify-content: center;
`;

export default function Intro(props) {

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile})

  return (
     <NavBarContainer>
       <LeftSection>
          <Logo />
       </LeftSection>
       <MiddleSection>
          {!isMobile && <Navlinks />}
       </MiddleSection>
       {isMobile && <MobileNavlinks />}
     </NavBarContainer>
    
  )
}