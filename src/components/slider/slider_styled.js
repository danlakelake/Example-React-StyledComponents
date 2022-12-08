import styled from 'styled-components';
import { ColorVariables } from '../../styles/variables';

export const ContainerSlider = styled.div`
  padding: 2rem;
`;

export const TitleSlider = styled.h1`
  color: ${ColorVariables.mainBlack};
`;

export const Carousel = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
