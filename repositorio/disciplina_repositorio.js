class DisciplinaRepositorio {
    constructor() {
        this.disciplinas = []
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina)
    }

    remover(id) {
        const indxDisciplinaARemover = this.disciplinas.findIndex(
            (disciplina) => {
                disciplina.id === id
            }
        )

        if(indxDisciplinaARemover > -1) {
            this.disciplinas.splice(indxDisciplinaARemover, 1)
        }
    }

    listar() {
        return this.disciplinas
    }

    atualizar(id, novoNome) {
        const indxDisciplinaAAtualizar = this.disciplinas.findIndex(
            (disciplina) => {
                disciplina.id === id
            }
        )

        if(indxDisciplinaAAtualizar > -1) {
            this.disciplinas[indxDisciplinaAAtualizar].nome = novoNome
        }
    }
}
