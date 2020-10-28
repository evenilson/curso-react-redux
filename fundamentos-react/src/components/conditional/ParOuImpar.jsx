import React from 'react'

export default (props) => {

    const isPar = props.number % 2 === 0

    return (
        <div>
            {props.number} é {isPar ? <span>Par</span> : <span>Impar</span>}

        </div>
    )
}