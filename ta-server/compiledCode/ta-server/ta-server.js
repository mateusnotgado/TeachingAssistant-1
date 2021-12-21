"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeServer = exports.server = void 0;
const express = require("express");
const cadastro_de_professores_1 = require("./cadastro-de-professores");
const cadastrodealunos_1 = require("./cadastrodealunos");
var taserver = express();
var cadastro = new cadastrodealunos_1.CadastroDeAlunos();
var cadProf = new cadastro_de_professores_1.CadastroDeProfessores();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
taserver.use(allowCrossDomain);
taserver.use(express.json());
var server = taserver.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports.server = server;
taserver.get('/alunos', function (req, res) {
    console.log("eprgmspdrsigvjmdrg");
    res.send(JSON.stringify(cadastro.getAlunos()));
});
taserver.post('/aluno', function (req, res) {
    var aluno = req.body; //verificar se é mesmo Aluno!
    if (cadastro.cadastrar(aluno)) {
        if (cadastro.verificarTamanhoSenha(aluno.senha))
            res.send({ "success": "O aluno foi cadastrado com sucesso" });
        res.send({ "failuere": "A senha precisa ter pelo menos 8 dígitos" });
    }
    else {
        res.send({ "failure": "Cpf já cadastrado" });
    }
});
taserver.put('/aluno', function (req, res) {
    var aluno = req.body;
    aluno = cadastro.atualizar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi atualizado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser atualizado" });
    }
});
/*taserver.get('/professores', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(cadProf.getAlunos()));
})

taserver.post('/professor', function (req: express.Request, res: express.Response) {
  var professor: Professor = <Professor> req.body; //verificar se é mesmo Aluno!
  professor = cadProf.cadastrar(professor);
  if (professor) {
    res.send({"success": "O aluno foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser cadastrado"});
  }
})

taserver.put('/professor', function (req: express.Request, res: express.Response) {
  var professor: Professor = <Professor> req.body;
  professor = cadProf.atualizar(professor);
  if (professor) {
    res.send({"success": "O aluno foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser atualizado"});
  }
})
*/
var server = taserver.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=ta-server.js.map