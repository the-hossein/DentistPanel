import React from 'react'
import { BoxEl } from './StyleBox'

export const Box = (props) => {
    return (
        <BoxEl>
            <p>نمونه کارها</p>
             {props.children}
        </BoxEl>
    )
}
