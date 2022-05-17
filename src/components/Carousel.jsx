import React from 'react'
import "./Carousel.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

const SlideShow = () => {
    return (
      
      
      <Carousel> 
  <Carousel.Item interval={3000}>
    <img
      className="d-block"
      src="https://media.smallbiztrends.com/2022/03/Upcycled-Jewelry-Projects-to-Make-and-Sell.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block"
      src="https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block"
      src="https://images.pexels.com/photos/11932917/pexels-photo-11932917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block"
      src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
       
       
    )
}

export default SlideShow;