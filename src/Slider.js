import React from 'react'
import { Carousel } from 'react-bootstrap'
import img from './images/img-1.jpg'
import img1 from './images/img-2.jpg'
import img2 from './images/img-3.jpg'

export const Slider = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={img}
            alt='First slide'
            style={{ width: '100%' }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img1} alt='Second slide' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img2} alt='Third slide' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
