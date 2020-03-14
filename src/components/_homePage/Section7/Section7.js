import React from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';

import {
  TwitterCard1,
  TwitterCard2,
  TwitterCard3,
  TwitterCard4,
} from './TwitterCards';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const Section7 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    fadeIn: true,
    autoplay: false,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        <TwitterCard1 />
        <TwitterCard2 />
        <TwitterCard3 />
        <TwitterCard4 />
      </Slider>
    </Container>
  );
};
