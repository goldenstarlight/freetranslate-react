import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import galleryImg1 from "../assets/images/gallery/1.jpg";
import galleryImg2 from "../assets/images/gallery/5.jpg";
import galleryImg3 from "../assets/images/gallery/4.jpg";

class HomeGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={galleryImg1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{fontWeight: 'bolder', color: '#14a800'}}><b>FREELANCER</b></h1>
            <h3>
              <font style={{color: '#14a800'}}>Millions of people use </font>
              <font style={{color: 'purple'}}>freelancer.com</font> 
              <font style={{color: '#14a800'}}>to turn their ideas into reality.</font></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={galleryImg2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 style={{fontWeight: 'bolder'}}><b>CONTENT WRITING</b></h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={galleryImg3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 style={{ color: '#14a800', fontWeight: 'bolder' }}>UPWORK</h1>
            <h3>Upwork enables us to differentiate ourselves from our competitos and produce content at a high caliber</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default HomeGallery;