import styled, { css } from 'styled-components';
import theme from '../../constants/theme';
const { primary, white, fontFamily, grey, alert } = theme;

export const SCAlertContainer = styled.div`
  margin-top: 18px;
  padding: 16px;
  position: relative;
  display: flex;
  width: 100%;
  font-family: Roboto, -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
  font-size: 14px;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  padding: 8px;  
  ${(props) =>
    css`
     color: ${alert[props.type].color};
     border-color: ${alert[props.type].border};
     background: ${alert[props.type].background};
  }  
`}
`;

export const SCAlertContent = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
`;

export const SCAlertIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;