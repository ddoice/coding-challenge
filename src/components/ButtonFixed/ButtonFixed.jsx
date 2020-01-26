import React from 'react'
import { Link } from "react-router-dom";
import { SCButtonFixedContainer, SCButtonFixedContainer2, SCButtonFixedButton, SCButtonFixedButtonIcon } from './styles'

export default function ButtonFixed({ img, linkTo }) {
  return (
    <SCButtonFixedContainer>
      <SCButtonFixedContainer2>
        <Link to={linkTo}>
          <SCButtonFixedButton>
            <SCButtonFixedButtonIcon src={img} ></SCButtonFixedButtonIcon>
          </SCButtonFixedButton>
        </Link>
      </SCButtonFixedContainer2>
    </SCButtonFixedContainer>
  )
}
