import React from 'react';
import Slider from '../slider/slider';
import { ContainerContent, TitleContent } from './mainContent_styled';

const MainContent = () => {

  return (
    <ContainerContent>
        <TitleContent>Example layout with styled-components</TitleContent>
        <Slider/>
    </ContainerContent>
  )
}

export default MainContent