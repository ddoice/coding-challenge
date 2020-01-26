import styled, { css } from 'styled-components';
import theme from '../../constants/theme';
const { fontFamily, grey, formTransition, hasErrors } = theme;

export const SCHomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 62px);
  margin-top: 62px;
  padding-top: 31px;
`;

export const SCHomeBackground = styled.img`
  position: fixed;
  top: calc((100vh - 460px) / 2);
  left: calc((100vw - 778px) / 2);
  ${({ faded }) =>
    faded && css`opacity: 0.2;`}  
`;

export const SCHomeCardsContainer = styled.div`
  max-width: 960px;
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
`;