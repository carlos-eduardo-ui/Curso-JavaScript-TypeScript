function saudacao(nome) {
    console.log(`Bom dia ${nome}!`); 
    return `Bom dia ${nome}!`;
}
const variavel = saudacao('Luiz');
console.log(variavel);


function soma(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2));
console.log(soma(3, 2));
console.log(soma(5, 10));

const resultado = soma(2, 2);


const raiz = n => n** 0.5;
console.log(raiz(20));