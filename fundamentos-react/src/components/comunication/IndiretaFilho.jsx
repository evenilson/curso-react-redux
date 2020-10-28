import React from 'react'



export default props => {

    //props.quandoClicar

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function(e){
                    props.quandoClicar('Evenilson', 56, false)
                }
            }>
                 Fornecer Informações
            </button>
        </div>
    )
}