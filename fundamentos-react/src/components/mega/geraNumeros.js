function geraAleatorio(){
    return Math.ceil( Math.random() * (60)) + 0;
}

function verificaNumero (numeros, numero) {
    if (numeros.indexOf(numero) === -1) {
        return true
    } else if (numeros.indexOf(numero) > -1) {
        return false
    }
}

function gerarNumeros(qtde){
    var numeros =[]

    for (let i = 0; i < qtde; i++) {
        console.log(i)
        var novoNumero = geraAleatorio()
        if(verificaNumero(numeros, novoNumero)){
            numeros.push(novoNumero)
        }else{
            --i
        }
        
        
    }

    return numeros
}

export default gerarNumeros
