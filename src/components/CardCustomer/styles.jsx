import styled, { css } from 'styled-components';
import theme from '../../constants/theme';
const { fontFamily } = theme;

export const SCCardCustomer = styled.article`
  box-shadow: 0px 0px 10px -1px #33333322;
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  padding: 24px;
  border: 1px solid rgb(239, 242, 245);
  background: white;
  height: 80px;
`;

export const SCCardCustomerAvatar = styled.span`
  color: white;
  margin-bottom: 16px;
  font-weight: 400;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
  display: block;
  ${({ color }) =>
    css`
     background: ${color};
    `
  }  
`;

export const SCCardCustomerBags = styled.span`
  position: absolute;
  right: 43px;
  bottom: 13px;
  background: #EEE;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  color: #333;
  line-height: 21px;
  font-family: monospace;
`;


export const SCCardCustomerIcon = styled.img`
  width: 30px;
  height: auto;
  position: absolute;
  right: 10px;
  bottom: 10px;
  opacity: 0.7;
`;
