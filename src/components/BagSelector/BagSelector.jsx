import React from 'react'
import {
  SCBagSelectorOuterContainer,
  SCBagSelectorInnerContainer,
  SCBagSelectorInputContainer,
  SCBagSelectorInputLeft,
  SCBagSelectorInputValue,
  SCBagSelectorInputRight,
  SCBagSelectorInputIcon
} from './style';
import {
  SCPlaceHolder,
  SCError,
  SCInputContainer
} from '../Input/style';

import IconMinus from './IconMinus.svg'
import IconPlus from './IconPlus.svg'

export default function Input({ disabled = false, errorMessage, value, handleChange }) {
  return (
    <SCInputContainer>
      <SCPlaceHolder condensed={true}>Num bags</SCPlaceHolder>
      {errorMessage && <SCError>{errorMessage}</SCError>}
      <SCBagSelectorOuterContainer>
        <SCBagSelectorInnerContainer>
          <SCBagSelectorInputContainer>

            <SCBagSelectorInputLeft>
              <SCBagSelectorInputIcon src={IconMinus} onClick={() => handleChange({ target: { value: (value > 0 ? value - 1 : 0) } })}>
              </SCBagSelectorInputIcon>

            </SCBagSelectorInputLeft>

            <SCBagSelectorInputValue disabled={true} value={value} onChange={handleChange}></SCBagSelectorInputValue>

            <SCBagSelectorInputRight>
              <SCBagSelectorInputIcon src={IconPlus} onClick={() => handleChange({ target: { value: value + 1 } })}>
              </SCBagSelectorInputIcon>
            </SCBagSelectorInputRight>

          </SCBagSelectorInputContainer>
        </SCBagSelectorInnerContainer>
      </SCBagSelectorOuterContainer>
    </SCInputContainer>
  )
}
