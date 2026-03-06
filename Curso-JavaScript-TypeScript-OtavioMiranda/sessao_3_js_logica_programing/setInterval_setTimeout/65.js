function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });   
}

function intervalo() {
    console.log(mostraHora());
}


const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000);

setTimeout(function() {
    console.log('ola mundo');
}, 5000)