import React from 'react'
import Header from '../Header/Header'
import { ContainerEl } from './StyleContainer'

export const Container = (props) => {
  return (
    <ContainerEl>
        <Header title={props.title}/>
         {props.child}
    </ContainerEl>
  )
}
