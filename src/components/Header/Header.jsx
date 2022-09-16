import React from 'react'
import Input from '../Input/Input'
import {HeaderContainer,Logo} from './header.style'


const Header = ({HandleChange, HandleSubmit}) => {
  return (
    <HeaderContainer>
        <Logo>Previsão</Logo>
        <Input HandleInput={HandleChange} HandleSubmit={HandleSubmit}  />
    </HeaderContainer>
  )
}

export default Header
