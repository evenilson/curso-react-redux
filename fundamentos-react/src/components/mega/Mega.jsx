import React, { useState } from 'react'

import './Mega.css'

import numeros from './geraNumeros'

export default (props) => {

    const [qtde, setQtde] = useState(props.qtde || 7)


    function mudarQtde(e){
        setQtde(+e.target.value)
    }

    const nuns = numeros(qtde)

    function geraLis(numeros) {
        const lis = []
        for (let index = 0; index < numeros.length; index++) {
            lis.push(
                <li key={index}>{numeros[index]}</li>
            )
        }
        return lis
    }

    return (

        <div className='mega'>
            <h2>Mega</h2>
            <label htmlFor="passoInput">Total gerado: </label>
            <input
                min={7}
                max={15}
                id="passoInput"
                type="number"
                value={qtde}
                onChange={mudarQtde}
            />
            <ul>
                {geraLis(nuns)}
            </ul>
        </div>
    )
}