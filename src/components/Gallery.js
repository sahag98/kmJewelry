import React from 'react'
import styled from 'styled-components'
const Gallery = () => {
    const Container = styled.div`
    flex: 4;
    flex-wrap: wrap;
    margin:5px;
   
    display:flex;
    justify-content: center;
    
    @media (max-width: 767px) {
        height:110vh;
        margin:0;
      }
      @media (width: 280px) {
        height:310vh;
        margin:0;
      }
  `;
    const Image = styled.img`
    height: 350px;
    width:  350px;
    margin:5px;
    padding:15px;
    z-index: 1;
    @media (max-width: 768px) {
        margin:0;
        height: 180px;
    width:  180px;
      }
      @media (width: 280px) {
        margin:0;
        height: 200px;
    width:  200px;
    padding:5px;
      }
  `;
    const H2 = styled.h2`
      margin-top:10px;
      
      `
    const images = [
        {
            id: 1,
            img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",

        },
        {
            id: 2,
            img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",

        },
        {
            id: 3,
            img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",

        },
        {
            id: 4,
            img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",

        },
        {
            id: 5,
            img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",

        },
        {
            id: 6,
            img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",

        },
        {
            id: 7,
            img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",

        },


    ]
    return (<>
        <H2 className="text-4xl text-indigo-600 font-semibold tracking-wide uppercase ">GALLERY</H2>
        <Container >
            {images.map((img, idx) => (

                <Image alt="gallery" className='hover:animate-bounce' src={img.img} key={img.id} />
            ))}
        </Container>
    </>
    )
}

export default Gallery