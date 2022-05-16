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
const Header = () => {
  return (
    <Container className='bg-no-repeat bg-cover bg-contain bg-center'   ></Container>
  )
}

export default Header