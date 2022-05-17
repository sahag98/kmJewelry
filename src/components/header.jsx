import React from 'react'
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  padding: 20px;
  min-height : 100vh;
  justify-content: space-between;
  background: url(https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/Upcycled-Jewelry-Projects-to-Make-and-Sell.png?v=1652728642933);
  background-repeat: no-repeat;
  background-size : cover;
  `;
  const featuredImages = ['https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/Upcycled-Jewelry-Projects-to-Make-and-Sell.png?v=1652728642933', 'img-2', 'img-3'];
const Header = () => {
  return (
    <Container className='object-contain'>
      {/* <img src={featuredImages[0]} alt="" /> */}
    </Container>
  )
}

export default Header