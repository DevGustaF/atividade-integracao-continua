function soma(a, b) {
}
function subtracao(a, b) {
}

function divisao(a, b) {
}

function multiplicacao(a, b) {
}

module.exports = {
    soma: (a, b) => {
        return a+b
    },
    subtracao: (a, b) => {
        return a-b
    },
    divisao: (a, b) => {
        if(b === 0){
            throw new TypeError("Divisão ilegal por zero!")
        }
        return a/b
    },
    multiplicacao: (a, b) => {
        return a*b
    }
};