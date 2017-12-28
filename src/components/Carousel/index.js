import React from 'react'
import Slider from 'react-slick'

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
}

const Carousel = ({ images }) => (
  <Slider {...settings}>
    {images.map((image, index) => (
      <div
        key={`carousel-image-${index}`}
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100%',
        }}
      />
    ))}
  </Slider>
)

export default Carousel
