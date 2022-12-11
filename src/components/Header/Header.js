import React from 'react'
import { HeaderStyle } from './StyleHeader'

const Header = (props) => {
  return (
    <HeaderStyle >
    <h1>{props.title}</h1>
    </HeaderStyle>
  )
}

export default Header