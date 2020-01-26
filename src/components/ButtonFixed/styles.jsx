import styled, { css } from 'styled-components';
import theme from '../../constants/theme';
const { grey } = theme;

export const SCButtonFixedContainer = styled.div`
  padding-bottom: 16px;
  position: absolute;
  bottom: 0;
  padding-left: 0px;
  padding-right: 16px;
  left: inherit;
  right: 0px;
`;

export const SCButtonFixedContainer2 = styled.span`
  display: flex;
  padding-left: 32px;
  padding-top: 16px;
  float: right;
`;

export const SCButtonFixedButton = styled.button`
  background-color: rgb(232, 63, 64);
  box-shadow: 0 1px 6px rgba(0,0,0,.1), 0 2px 24px rgba(0,0,0,.2);
  transition: box-shadow .1s ease-in-out;
  position: relative;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  cursor: pointer;
`;

export const SCButtonFixedButtonIcon = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: block;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  cursor: pointer;
`;