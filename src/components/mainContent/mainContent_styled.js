import styled from 'styled-components';
import { ColorVariables } from '../../styles/variables';
import { Device } from '../../styles/breakPoints';

export const ContainerContent = styled.div`
  background-color: ${ColorVariables.mainWhite};
  text-align: center;
`;

export const TitleContent = styled.h1`
  color: black;
  margin: 0px;
  padding: 2rem;
  border-bottom: 1px solid ${ColorVariables.mainBlack};

  @media ${Device.mobileS} {
    padding: 1rem;
  }
`;
