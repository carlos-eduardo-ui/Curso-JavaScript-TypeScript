// IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0

/*  num1 = ((num1 * 100) + (num2 * 100)  /100); //0.8
    num1 = ((num1 * 100) + (num2 * 100)  /100); //0.9
    num1 = ((num1 * 100) + (num2 * 100)  /100); //1.0 */

console.log(num1);
console.log(Number.isInteger(num1)); 

// num1 = num1.toString()
//console.log(num1.toString() + num2);
//console.log('num1 é um ' +typeof num1);

//console.log('representaçao binaria de num1 '+num1.toString(2))

//console.log('arrendonda o numero num1 se caso ele for decimal ' +num1.toFixed(4));

//console.log('O numero recebido é inteiro? ' +Number.isInteger(num1));

/*let temp = num1 * 'ola';
console.log(Number.isNaN(temp)); */
