import React from 'react'
import {
  SCAlertContainer,
  SCAlertContent,
  SCAlertIcon
} from './style';

import IconSuccess from './success.svg';
import IconDanger from './danger.svg';

export default function Input({ children, type = 'success' }) {
  return (
    <SCAlertContainer type={type}>
      <SCAlertContent>
        <SCAlertIcon src={type === 'success' ? IconSuccess : IconDanger}></SCAlertIcon>
        {children}
      </SCAlertContent>
    </SCAlertContainer>
  )
}
