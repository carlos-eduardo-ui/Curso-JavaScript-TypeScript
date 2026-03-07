function relogio() {

    function getTimeFromSeconds(seconds) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT' //ou  'UTC'
        });
    };

    console.log()

    const timer = document.querySelector('.timer');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let contador;

    function iniciarRelogio() {
        contador = setInterval(function () {
            segundos++;
            timer.innerHTML = getTimeFromSeconds(segundos);
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const el = e.target //captura o local onde clicou

        if (el.classList.contains('zerar')) {
            clearInterval(contador);
            timer.classList.remove('pausado');
            timer.innerHTML = '00:00:00';
            segundos = 0;
        }

        if (el.classList.contains('pausar')) {
            clearInterval(contador);
            timer.classList.add('pausado');;
        }

        if (el.classList.contains('iniciar')) {
            timer.classList.remove('pausado');
            clearInterval(contador);
            iniciarRelogio();
        }
    });

    /*
    iniciar.addEventListener('click', function(event) {
        timer.classList.remove('pausado');
        clearInterval(contador);
        iniciarRelogio();
        });
        
        pausar.addEventListener('click', function(event) {
            clearInterval(contador);
            timer.classList.add('pausado');;
            });
            
            zerar.addEventListener('click', function(event) {
                clearInterval(contador);
                timer.classList.remove('pausado');
                timer.innerHTML = '00:00:00';
                segundos = 0;
                });
                */
}

relogio();