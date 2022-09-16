import React from 'react'
import Input from '../Input/Input'
import {HeaderContainer,Logo} from './header.style'


const Header = ({HandleChange}) => {
  return (
    <HeaderContainer>
        <Logo>Previsão</Logo>
        <Input HandleInput={HandleChange} />
    </HeaderContainer>
  )
}

export default Header
