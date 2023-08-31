class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio()
    }

    inserir(id, nome) {
        const disciplinaPesquisada = this.pesquisarPorId(id)

        if(disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!')
        } 

        const disciplina = new Disciplina(id, nome)
        this.repositorio.inserir(disciplina)

        return disciplina
    }

    remover(id) {
        this.repositorio.remover(id)
    }

    pesquisarPorId(id) {
        return this.repositorio
            .listar()
            .filter((disciplina) => disciplina.id === id)
    }

    inserirAlunoNaDisciplina(id, aluno) {
        const disciplina = this.pesquisarPorId(id)

        if(disciplina.length == 0) {
            throw new Error('Disciplina não encontrada!')
        }

        disciplina[0].adicionar(aluno)
    }
    atualizar(id, novoNome) {
        const disciplina = this.pesquisarPorId(id)
        if(disciplina.length > 0) {
            this.repositorio.atualizar(id, novoNome)
        } else {
            throw new Error('Disciplina não encontrada!')
        }
    }
}
