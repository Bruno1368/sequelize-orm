const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const { TurmasServices } = require('../services')
const turmasServices = new TurmasServices();

class TurmaController {
    
    static async pegaTodasAsTurmas(req, res) {
        const { data_inicial, data_final } = req.query
        const where = {};
        try {
            const todasAsPessoas = await turmasServices.pegaTurmasPorData(data_inicial, data_final, where)
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
        
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params //ler o que for passado como parametro da url

        try {
            const umaPessoa = await turmasServices.pegaUmRegistro(id)
                return res.status(200).json(umaPessoa)
        } catch (error) {
                return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req, res) {
        const novaPessoa = req.body

        try {
            const novaPessoaCriada = await turmasServices.criaRegistro()
            return res.status(200).json(novaPessoaCriada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTurma(req, res) {
        const novasInfos = req.body
        const { id } = req.params

        try {
            await database.Pessoas.update(novasInfos, {where: {id: Number(id)}})
            const pessoaAtualizada = database.Pessoas.findOne( {where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
        }
    }
    
    static async apagaTurma(req, res){
        const { id } = req.params
        try {
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `id ${id} deletado com sucesso`})
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
}

module.exports = TurmaController;  