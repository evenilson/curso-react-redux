import React, { Component } from 'react'

import './Contador.css'

import Display from  './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

    state = {
        number: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.passo
        })
    }
    desc = () => {
        this.setState({
            number: this.state.number - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div  className='contador'>
                <h2>Contador</h2>
                <Display number={this.state.number}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDesc={this.desc} />
            </div>
        )
    }

}


export default Contador