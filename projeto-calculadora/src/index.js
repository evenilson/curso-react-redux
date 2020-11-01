import reactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Calculator from './main/Calculator'

reactDOM.render(
    <div>
        <h2>Calculadora</h2>
        <Calculator/>
    </div>
    
    ,document.getElementById('root')
)