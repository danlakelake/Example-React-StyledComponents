import React from 'react';
import { ContainerSlider, TitleSlider, Carousel } from './slider_styled';

const Slider = () => {
  return (
    <ContainerSlider>
        <TitleSlider>Slider Images</TitleSlider>
        <Carousel>
            <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="first-img" />
        </Carousel>
    </ContainerSlider>
  )
}

export default Slider;