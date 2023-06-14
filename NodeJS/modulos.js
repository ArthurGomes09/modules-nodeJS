const meuModulo = require("./meu_modulo")

const soma = meuModulo.soma
const sub = meuModulo.sub
const div = meuModulo.div
const quadrado = meuModulo.quadrado






console.log(` 
    \n
   soma ${soma(1,3)} 
   subtração ${sub(1,5)}
   quadrado ${quadrado(2,2)}
   divisão ${div(36,6)}
    `
)