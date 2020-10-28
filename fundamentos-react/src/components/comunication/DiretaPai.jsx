import React from 'react'

import DiretaFilho from './DiretaFilho'

export default propss => {
    return (
        <div>
            <DiretaFilho name='Evenilson' age={8} nerd={true}></DiretaFilho>
            <DiretaFilho name='Liandro' age={43} nerd={false}></DiretaFilho>
        </div>
    )
}