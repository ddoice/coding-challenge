import styled, { css } from 'styled-components';
import theme from '../../constants/theme';
const { fontFamily, grey, formTransition, hasErrors } = theme;

export const SCNavBarContainer = styled.div`
  border-bottom-right-radius: 144px 77px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 2;
  border-bottom: 1px solid rgb(232, 63, 64);
  background: rgb(255, 255, 255);
`;

export const SCNavBarLogo = styled.img`
  width: 58px;
  height: 58px;
`;



