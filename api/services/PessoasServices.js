const Services = require('./Services')
const database = require('../models')


class PessoasServices extends Services {
    constructor(){
        super('Pessoas')
        this.matriculas = new Services('Matriculas')
    }

    async pegaRegistrosAtivos(filter = {}) {
        return database[this.nomeDoModelo].findAll({ where: {...filter} })
    }

    async pegaTodosOsRegistros(filter = {}) {
        return database[this.nomeDoModelo].scope('todos').findAll({ where: {...filter} })

    }

    async cancelaPessoaEMtriculas(estudanteId){
        return database.sequelize.transaction(async transacao => {
            await super.atualizaRegistro({ativo: false}, estudanteId, {transaction: transacao})
            await this.matriculas.atualizaRegistros({status: 'cancelado'}, {estudante_id: estudanteId}, {transaction: transacao})
        })
        
 }

}




module.exports = PessoasServices

