import React from 'react'
import Input from '../Input/Input'
import {HeaderContainer,Logo} from './header.style'


const Header = () => {
  return (
    <HeaderContainer>
        <Logo>Previsão</Logo>
        <Input />
    </HeaderContainer>
  )
}

export default Header
