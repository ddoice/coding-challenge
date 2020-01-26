import React from 'react'
import { Link } from "react-router-dom";
import { SCNavBarLogo, SCNavBarContainer } from './style'
import Logo from './logo.svg'

export default function NavBar() {
  return (
    <SCNavBarContainer>
      <div color="#e83f40" >
        <div color="#e83f40" >
          <div role="button">
            <Link to="/"          >
              <SCNavBarLogo src={Logo}></SCNavBarLogo>
            </Link>
          </div>
        </div>
      </div>
    </SCNavBarContainer>
  )
}
