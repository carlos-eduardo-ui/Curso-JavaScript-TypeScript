const numero = Number(prompt('digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada de ${numero} é: ${numero * 0.5}<p>`;
texto.innerHTML += `<p>O número ${numero} é inteiro? ${Number.isInteger(numero)}<p>`;
texto.innerHTML += `<p>O dado ${numero} é um NaN? ${Number.isNaN(numero)} <p>`;
texto.innerHTML += `<p>O número ${numero} arrendondando para baixo é: ${Math.floor(numero)}<p>`;
texto.innerHTML += `<p>O número ${numero} arrendondando para cima é: ${Math.ceil(numero)}<p>`;
texto.innerHTML += `<p>O número ${numero} com apenas 2 casas decimais ficaria: ${numero.toFixed(2)}<p>`