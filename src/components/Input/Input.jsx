import React from 'react'
import { InputText } from './input.style'

const Input = ({HandleInput}) => {

  return (
    <div>
      <InputText
        type='text'
        placeholder='Procurar'
        onKeyPress={HandleInput}
      />
    </div>
  )
}

export default Input
