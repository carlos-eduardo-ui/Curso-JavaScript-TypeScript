/* 
&& -> ONE False 
|| -> ALL False

Se eu uso &&: Ele retorna o primeiro valor falso da expresão,
caso todas seja verdadeiro retorna o ultimo valor;

Se eu uso ||: Retorna o primeiro valor true da expresão, 
caso todas sejam falsas retorna o ultimo valor.

Se eu uso !: eu nego a expressão!

 FALSY -> Não literal
 false -> literal

 0
 '' "" ``
 null / undefined
 NaN

*/

function falaOi () {
    return 'oi';
}

const vaiExecutar = 'joaozinho';

console.log(vaiExecutar && falaOi());

console.log(0 || false || 1 || "eduardo" ) // "1"



const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // -> ESSE 
const d = false;
const e = NaN;
console.log(a || b || c || d || e) 

