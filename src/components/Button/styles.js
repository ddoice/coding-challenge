import styled, { css } from 'styled-components';
import theme from '../../constants/theme';
const { primary, white } = theme;

export const SCButton = styled.button`
  border-radius: 8px;
  border: 0;
  padding: 0.7em 1em;
  color: ${white};
  background-color: ${primary};
  text-align: center;
  width: 100%;
  font-size: 15px;
  ${(props) =>
    props.disabled 
    && css`
    opacity: 0.5;
    cursor: not-allowed;
    `
  }  
`;

export default SCButton;

