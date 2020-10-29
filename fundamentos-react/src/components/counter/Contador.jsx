import React, { Component } from 'react'

import './Contador.css'

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

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value
        })
    }

    render() {
        return (
            <div  className='contador'>
                <h2>Contador</h2>
                <h3>{this.state.number}</h3>

                <label htmlFor="passoInput">Passo: </label>
                <input
                    id="passoInput" 
                    type="number"
                    value={this.state.passo}
                    onChange={this.setPasso}
                />

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.desc}>-</button>
                </div>
            </div>
        )
    }

}


export default Contador