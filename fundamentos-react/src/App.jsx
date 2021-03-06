import React from 'react'

import './App.css'

import Mega from './components/mega/Mega'
import Contador from './components/counter/Contador'
import Input from './components/form/Input'
import IndiretaPai from './components/comunication/IndiretaPai'
import DiretaPai from './components/comunication/DiretaPai'
import UsuarioInfo from './components/conditional/UsuarioInfo'
import ParOuImpar from './components/conditional/ParOuImpar'
import TableProdutos from './components/repetition/TableProdutos'
import ListAlunos from './components/repetition/ListAlunos'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basics/Aleatorio'
import Fragmento from './components/basics/Fragmento'
import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'



export default () => {
    return (
        <div className='app'>
            <h1>Fundamentos React</h1>

            <div className='cards'>

                <Card titulo='#13 - Desafio Megasena' color='#ff99b3'>
                    <Mega qtde={7}/>
                </Card>

                <Card titulo='#12 - Contador' color='#330066'>
                    <Contador numeroInicial={8}></Contador>
                </Card>

                <Card titulo='#11 - Component controlado(Input)' color='#b3ff99'>
                    <Input></Input>
                </Card>

                <Card titulo='#10 - Comunicação Indireta' color='#ca00e3'>
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo='#09 - Comunicação Direta' color='#605b4f'>
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo='#08 - Repetição Condiciconal' color='#232c43'>
                    <ParOuImpar number={68}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                    <UsuarioInfo usuario={{ email: 'fer@gmail.com' }} />
                </Card>

                <Card titulo='#07 - Desafio Repetição' color='#b491b2'>
                    <TableProdutos></TableProdutos>
                </Card>

                <Card titulo='#06 - Repetição' color='#9bc693'>
                    <ListAlunos></ListAlunos>
                </Card>

                <Card titulo='#05 - Componente com Filhos' color='#ff69b4'>
                    <Familia sobrenome='Silvaa'>
                        <FamiliaMembro nome='Pedro' />
                        <FamiliaMembro nome='Evenilson' />
                        <FamiliaMembro nome='Jose' />
                    </Familia>
                </Card>

                <Card titulo='#04 - DesafioAleatório' color='#000080'>
                    <Aleatorio min={10} max={50} />
                </Card>

                <Card titulo='#03 - Fragmento' color='#00FFFF'>
                    <Fragmento />
                </Card>

                <Card titulo='#02 - Com Parametro' color='#00FF00'>
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Evenilson Liandro"
                        nota={8.1}
                    />

                </Card>

                <Card titulo='#01 - Primeiro componente' color='#FF0000'>
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div >
    )
}

