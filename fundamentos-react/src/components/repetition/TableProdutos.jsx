import React from 'react'
import produtos from '../../data/produtos'

import './TableProdutos.css'

export default (props) => {
    const tds = produtos.map((produto, i) => {
        return(
            <tr key={produto.id} className={i % 2 === 0 ? 'par' : 'impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td> R${produto.preco.toFixed(2).replace('.',',')}</td>
            </tr>
        )
    })
    return(
        <div className='tabela-produtos'>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nome</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                <tbody>
                    {tds}
                </tbody>
            </table>
        </div>
    )
}