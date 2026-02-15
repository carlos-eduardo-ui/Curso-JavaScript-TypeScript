//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia);

//const data = new Date(2019, 3, 20, 15, 14, 27); //ano, mes, dia, hour, Min, seg, ms
//console.log(data.toString());

/*
const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('mes', data.getMonth() + 1); //mes cmc do zero
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Da Semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
*/
//console.log(Date.now());


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data1 = new Date();
const dataBrasil = formataData(data1);
console.log(dataBrasil);