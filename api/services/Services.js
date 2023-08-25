const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTudo() {
        return database[this.nomeDoModelo].findAll()
    }

    async pegaUmRegistro(id) {
        return database[this.nomeDoModelo].findOne({ where: {id: Number(id)} })
    }

    async criaRegistro(pessoa) {
        return database[this.nomeDoModelo].create(pessoa)
    }

    async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
        return database[this.nomeDoModelo].update(dadosAtualizados, { where: {id: id} }, transacao)
    }

    async atualizaRegistros(dadosAtualizados, filter, transacao = {}) {
        return database[this.nomeDoModelo].update(dadosAtualizados, { where: {...filter} }, transacao)
    }

    async deletaRegistro(id){
        return database[this.nomeDoModelo].destroy({ where: {id: Number(id)} })
    }

    async restauraRegistro(id) {
        return database[this.nomeDoModelo].restore({ where: {id: Number(id)} })
    }
}

module.exports = Services