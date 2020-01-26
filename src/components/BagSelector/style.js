import styled, { css } from 'styled-components';
import theme from '../../constants/theme';
const { primary, white, fontFamily, grey, formTransition } = theme;

export const SCBagSelectorOuterContainer = styled.div`
  padding-top: 18px;
  width: 100%;
  display: block;
`;

export const SCBagSelectorInnerContainer = styled.div`
  position: relative;
  display: block;
  z-index: 2;
  width: 100%;
  flex: 1 1 100%;
`;

export const SCBagSelectorInputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  box-sizing: border-box;
  height: 44px;
  color: rgb(37, 42, 49);
  font-size: 14px;
  cursor: text;
  border-radius: 8px;
  `;

export const SCBagSelectorInputLeft = styled.div`
  height: 100%;
  color: rgb(95, 115, 140);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  pointer-events: none;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 3;
  padding: 0px 0px 0px 12px;
`;

export const SCBagSelectorInputValue = styled.input`
  text-align: center;
  -webkit-appearance: none;
  font-family: Roboto, -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
  font-size: inherit;
  font-weight: 400;
  color: inherit;
  background-color: transparent;
  cursor: inherit;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: 2;
  min-width: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 0px 12px;
  flex: 1 1 20%;
  border-radius: 8px;
`;

export const SCBagSelectorInputRight = styled.div`
  height: 100%;
  color: rgb(95, 115, 140);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  pointer-events: none;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 3;
  padding: 0px 12px 0px 0px;
`;

export const SCBagSelectorInputIcon = styled.img`
  cursor: pointer;
  pointer-events: auto;
  flex-shrink: 0;
  vertical-align: middle;
  fill: currentcolor;
  color: rgb(95, 115, 140);
  width: 24px;
  height: 24px;
  ${(props) =>
    props.disabled 
    && css`
    opacity: 0.5;
    `
  }  
`;