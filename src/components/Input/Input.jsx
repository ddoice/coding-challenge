import React from 'react'
import { SCInputContainer, SCPlaceHolder, SCInput, SCError } from './style'

export default function Input({ disabled = false, placeHolder, value,  errorMessage, handleChange }) {
  return (
    <SCInputContainer>
      <SCPlaceHolder condensed={value.length > 0}>{placeHolder}</SCPlaceHolder>
      {value.length > 0 && errorMessage && <SCError>{errorMessage}</SCError>}
      <SCInput autocomplete="off" disabled={disabled} onChange={handleChange} value={value}>
      </SCInput>
    </SCInputContainer>
  )
}
