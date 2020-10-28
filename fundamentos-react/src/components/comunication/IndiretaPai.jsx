import React from 'react'

import IndiretaFilho from './IndiretaFilho'

export default propss => {

    function fornecerInformacoes(name, age, nerd){
        console.log(name, age, nerd)
    }

    return (
        <div>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}