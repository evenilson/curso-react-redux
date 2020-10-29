import React, { useState } from 'react'

import './Input.css'

export default (props) => {

    const [valor, setValor] = useState('')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className='input'>
            <h2>{valor}</h2>
            <div style={{display:'flex', flexDirection:'column'}}>
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly/>
                <input value={undefined} />
            </div>
        </div>
    )
}