class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaService()
    }

    inserir() {
        const idElemento = document.querySelector('#id')
        const nomeElemento = document.querySelector('#nome')
        
        const id = Number(idElemento.value)
        console.log(id);
        const disciplinaInserida = this.servico.inserir(id, nomeElemento.value)
        console.log(disciplinaInserida);
        const listaDisciplinaElemento = document.querySelector('#listaDisciplinas')
        
        if(disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinaElemento)
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement('li')
        disciplinaElemento.textContent = `ID: ${disciplina.id} - Nome ${disciplina.nome}`

        elementoDestino.appendChild(disciplinaElemento)
    }
}