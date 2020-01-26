import React from 'react'
import { SCHeader } from './style';

export default function Header({ children }) {
  return (
    <SCHeader>
      <span>
        {children}
      </span>
    </SCHeader>
  )
}
