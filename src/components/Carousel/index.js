import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
}

const Carousel = ({ images }) => (
  <Slider {...settings}>
    {images.map((image, index) => (
      <div key={`carousel-image-${index}`}>
        <img
          src={image.src}
          alt={image.alt}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </div>
    ))}
  </Slider>
)

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Carousel
