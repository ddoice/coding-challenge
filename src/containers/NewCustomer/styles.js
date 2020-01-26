import styled, { css } from 'styled-components';
import theme from '../../constants/theme';
const { fontFamily, grey, formTransition, hasErrors } = theme;

export const SCNewCustomerContainer = styled.div`
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
  display: flex;
  margin-bottom: 224px;
  margin-top: 72px;
  flex-flow: row wrap;
  padding: 0px 16px;  
`;

export const SCNewCustomerForm = styled.div`
margin-left: auto;
margin-right: auto;
width: 456px;
display: block;
`;
