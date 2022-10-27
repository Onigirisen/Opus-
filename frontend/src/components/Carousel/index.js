import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel1.css'
import carouselpic from "../../assets/profile/goat.jpeg"
import carouselpic2 from "../../assets/profile/goat.jpeg"
import carouselpic3 from "../../assets/profile/goat.jpeg"
import Carousel from 'react-bootstrap/Carousel'

function OwnCarousel () {
  return (
      <>
      <div className="carousel-container">

    
    <Carousel>
      <Carousel.Item >
         
        <div className="img-container">
            <img className="d-block w-100" src={carouselpic} alt="First slide" />
  
            <img className="d-block w-100" src={carouselpic2} alt="Second slide"/>
            
            <img className="d-block w-100" src={carouselpic3} alt="Third slide"/>
        </div>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <div className="img-container">
            <img className="d-block w-100" src={carouselpic} alt="First slide" />
  
            <img className="d-block w-100" src={carouselpic2} alt="Second slide"/>
            
            <img className="d-block w-100" src={carouselpic3} alt="Third slide"/>
        </div>
       

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <div className="img-container">
            <img className="d-block w-100" src={carouselpic} alt="First slide" />
  
            <img className="d-block w-100" src={carouselpic2} alt="Second slide"/>
            
            <img className="d-block w-100" src={carouselpic3} alt="Third slide"/>
        </div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default OwnCarousel;