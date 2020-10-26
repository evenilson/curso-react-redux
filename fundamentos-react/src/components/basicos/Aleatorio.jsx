import React from 'react'


export default (props) => {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    return(
        <div>
            <h3>Valor aleatório</h3>
            <h5>Valor mínimo: {min}</h5>
            <h5>Valor maximo: {max}</h5>
            <h5>Valor aleatorio: {aleatorio}</h5>
        </div>
    )

}