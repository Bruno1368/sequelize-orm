const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
 .get('/pessoas', PessoaController.pegaTodasAsPessoas)
 .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
 .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
 .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
 .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
 .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
 .get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
 .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
 .put('/pessoas/:id', PessoaController.atualizaPessoa)
 .delete('/pessoas/:id', PessoaController.apagaPessoa)
 .post('/pessoas', PessoaController.criaPessoa)
 .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
 .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
 .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
 .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)

module.exports = router;