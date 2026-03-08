
    const botonAdd = document.querySelector('.addTarefa');
    const tarefas = document.querySelector('.tarefas');
    const valorInput = document.querySelector('.valor');
    const apaga = document.querySelector('.apagar')

    function criaBotaoApagar(li) {
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'apagar';
        // botaoApagar.classList.add('apagar);
        botaoApagar.setAttribute('class', 'apagar');    
        li.appendChild(botaoApagar);
    }

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    valorInput.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            if (!valorInput.value) return;
            criaTarefa(valorInput.value);
        }
    })

    function limpaInput() {
        valorInput.value = '';
        valorInput.focus();
    }

    function criaTarefa(textoInput) {
        const li = criaLi();
        li.innerText = textoInput;
        tarefas.appendChild(li);
        limpaInput(); //vai limpar o input e voltar para ele caso queira adc mais uma tarefa 
        criaBotaoApagar(li);
        salvarTarefas();
    }

    botonAdd.addEventListener('click', function(e) {
        if (!valorInput.value) return; //nao deixa inserir valores nulos 
        criaTarefa(valorInput.value); // pega o valor do input text
    });    

    document.addEventListener('click', function(e) {
        const el = e.target;
        console.log(el)

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
    })

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li')
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('apagar', '').trim(); //tira o nome da classe na hora da exibiçao e trim() remove espaço na  
            listaDeTarefas.push(tarefaTexto);
        }
        
        const tarefasJSON = JSON.stringify(listaDeTarefas); //converte elemento js para string JSON
        localStorage.setItem('tarefas', tarefasJSON);
    
    }

    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');

        if (!tarefas) return; //evita erro se não existir nada salvo

        const listaDeTarefas = JSON.parse(tarefas); //converte dvolta para objeto javaScript
        for (let tarefa of listaDeTarefas){
            criaTarefa(tarefa);
        }
    }
    adicionaTarefasSalvas();