import React from 'react'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'



export default (props) => {
    return (
        <div id='app'>
            <h1>Fundamentos React</h1>

            <Card titulo='#04 - DesafioAleatório'>
                <Aleatorio min={10} max={50} />
            </Card>

            <Card titulo='#03 - Fragmento'>
                <Fragmento />
            </Card>

            <Card titulo='#02 - Com Parametro'>
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Evenilsond Liandro"
                    nota={8.1}
                />

            </Card>

            <Card titulo='#01 - Primeiro componente'>
                <Primeiro></Primeiro>
            </Card>
        </div>
    )
}

