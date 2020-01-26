import styled, { css } from 'styled-components';
import theme from '../../constants/theme';
const { fontFamily, grey, formTransition, hasErrors } = theme;

export const SCInputContainer = styled.div`
  font-family: ${fontFamily};
  font-size: 16px;
  height: 56px;
  line-height: 1.2;
  position: relative;
  text-align: left;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 32px;
  background: rgb(255, 255, 255);
  border-radius: 4px;
`;

export const SCPlaceHolder = styled.div`
  color: ${grey};
  font-family: ${fontFamily};
  font-weight: 400;
  left: 0px;
  line-height: 22px;
  pointer-events: none;
  position: absolute;
  user-select: none;
  z-index: 1;
  transition: all ${formTransition};
  ${(props) =>
    props.condensed 
    ? css`
    font-size: 12px;
    top: 4px;
    `
    : css`
    font-size: 16px;
    top: calc(100% - 30px);
    `
  }
`;

export const SCError = styled.div`
  color: ${hasErrors};
  font-family: ${fontFamily};
  font-weight: 400;
  right: 0px;
  line-height: 22px;
  pointer-events: none;
  position: absolute;
  user-select: none;
  z-index: 1;
  font-size: 12px;
  top: 4px;
  transition: all ${formTransition};
`;

export const SCInput = styled.input`
  outline: none;
  display: flex;
  position: absolute;
  background-color: transparent;
  left: 0px;
  bottom: 0px;
  font-size: 16px;
  line-height: 22px;
  width: 100%;
  font-weight: 400;
  font-family: ${fontFamily};
  white-space: nowrap;
  text-overflow: ellipsis;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  border-radius: 0px;
  padding: 0px 0px 5px;
  transition: border-bottom ${formTransition};
  overflow: hidden;
  border-bottom: 1px solid ${grey};  
`;


export default SCInput;