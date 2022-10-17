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
        /* height:190vh; */
        margin:0;
      }
      @media (width: 280px) {
        /* height:430vh; */
        margin:0;
      }
  `;
    const Image = styled.img`
    height: 350px;
    width:  350px;
    border-radius: 8%;
    margin:20px;
     //padding:15px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 1;
    @media (max-width: 768px) {
        margin:0;
        height: 180px;
    width:  180px;
    padding:15px;
    box-shadow: none;
    border-radius: 15%;
      }
      @media (width: 280px) {
        margin:0;
        height: 200px;
        width:  200px;
        padding:5px;
        border-radius: 15%;
        margin-bottom: 10px;
      }
  `;
    const H2 = styled.h2`
      margin-top:10px;
      
      `
    const images = [
        {
            id: 1,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project.jpg?v=1653711640953",

        },
        {
            id: 2,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project.png?v=1653711696160",

        },
        {
            id: 3,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project%20(9).png?v=1653712438473",

        },
        {
            id: 4,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project%20(1).jpg?v=1653713275279",

        },
        {
            id: 5,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project%20(2).png?v=1653711810772",

        },
        {
            id: 6,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project%20(4).png?v=1653711917433",

        },
        {
            id: 7,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project%20(5).png?v=1653712000268",

        },
        {
            id: 8,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project%20(6).png?v=1653712185231",

        },
        {
            id: 9,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project%20(7).png?v=1653712305651",

        },
        {
            id: 10,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project%20(8).png?v=1653712375144",

        },
        {
            id: 11,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project%20(1).png?v=1653711765422",

        },
        {
            id: 12,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project%20(10).png?v=1653712475432",

        },
        {
            id: 13,
            img: "https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/My%20project%20(11).png?v=1653713445872",

        },


    ]
    return (<>

        <H2 className="text-4xl text-indigo-600 font-semibold tracking-wide uppercase ">GALLERY</H2>
        <Container >
            {images.map((img) => (

                <Image alt="gallery" load="lazy" className='hover:animate-bounce rounded-xl ' src={img.img} key={img.id} />
            ))}
        </Container>
    </>
    )
}

export default Gallery