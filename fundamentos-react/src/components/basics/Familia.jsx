import React from 'react'
import { cloneElement } from 'react'

export default (props) =>{
    return(
        <div>
            {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props)
                })
            }
        </div>
    )
}