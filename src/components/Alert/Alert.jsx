import React from 'react'
import {
  SCAlertContainer,
  SCAlertContent,
  SCAlertIcon
} from './style';

import IconSuccess from './success.svg';

export default function Input({ children, type = 'success' }) {
  return (
    <SCAlertContainer type={type}>
      <SCAlertContent>
        <SCAlertIcon src={IconSuccess}></SCAlertIcon>
        {children}
      </SCAlertContent>
    </SCAlertContainer>
  )
}
