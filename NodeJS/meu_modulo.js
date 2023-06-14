module.exports = {
     soma(a,b) {
        return a + b
    },
    sub(a,b){
        return a - b
    },
    div(a,b){
        if(b == '0'){
            alert('valor errado')
        }
        else{
            return a/b
        }
    },
    quadrado(a,b){
        return Math.pow(a,b)
    },
};
