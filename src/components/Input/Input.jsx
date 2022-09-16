import React from 'react'
import { InputText } from './input.style'

const Input = ({HandleInput, HandleSubmit}) => {

  return (
    <div>
      <InputText
        type='text'
        placeholder='Procurar'
        onChange={HandleInput}
        onKeyPress={HandleSubmit}
      />
    </div>
  )
}

export default Input
