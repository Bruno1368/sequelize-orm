const database = require('../models')


class TurmaController {
    
    static async pegaTodasAsTurmas(req, res) {
        
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
        
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params //ler o que for passado como parametro da url

        try {
            const umaPessoa = await database.Pessoas.findOne( {where: {id: // colocar dentro da variavel uma pessoa bancodedados,pessoa e econtrar uma ONDE id for igual o id da variavel
                Number(id)}} );
                return res.status(200).json(umaPessoa)
        } catch (error) {
                return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req, res) {
        const novaPessoa = req.body

        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
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