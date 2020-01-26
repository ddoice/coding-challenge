import React from 'react'
import SCButton from './styles'

export default function Button({ disabled = false, message, callback, children }) {
  return (
    <div>
      <SCButton disabled={disabled} onClick={() => !disabled && callback()}>
        {message || children}
      </SCButton>
    </div>
  )
}
