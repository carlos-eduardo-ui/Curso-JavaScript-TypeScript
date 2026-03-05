try {
    //executado quando nao ha erros
    //console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo ');
    console.log(erro);
} catch (e){
    //e executado quando há erros
    console.log('Tratando o erro');
} finally {
    //sempre executado
    console.log('Finally: Sempre sou executado');
}


function retornaHora (data) {
    if (data && !(data instanceof Date)) {
      throw new TypeError('Esperando instacia de date.')
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false //remove o timezone 
    })
}
try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(11);
    console.log(hora);
} catch(e) {
    //trata erro
} finally {
    console.log('tenha um bom dia');
}

