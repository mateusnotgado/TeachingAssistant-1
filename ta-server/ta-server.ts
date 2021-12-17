import express = require('express');
import {Aluno} from '../common/aluno';
import { Professor } from '../common/Professor';
import { CadastroDeProfessores } from './cadastro-de-professores';
import {CadastroDeAlunos} from './cadastrodealunos';

var taserver = express();

var cadastro: CadastroDeAlunos = new CadastroDeAlunos();
var cadProf: CadastroDeProfessores=new CadastroDeProfessores();
var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
taserver.use(allowCrossDomain);

taserver.use(express.json());

var server = taserver.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
taserver.get('/alunos', function (req: express.Request, res: express.Response) {
  console.log("eprgmspdrsigvjmdrg")
    res.send(JSON.stringify(cadastro.getAlunos()));
})

taserver.post('/aluno', function (req: express.Request, res: express.Response) {
    var aluno: Aluno = <Aluno> req.body; //verificar se é mesmo Aluno!
  
    if (cadastro.cadastrar(aluno)) {
      if(cadastro.verificarTamanhoSenha(aluno.senha))
      res.send({"success": "O aluno foi cadastrado com sucesso"});
      res.send({"failuere": "A senha precisa ter pelo menos 8 dígitos"});
    } else {
      res.send({"failure": "Cpf já cadastrado"});
    }
})

taserver.put('/aluno', function (req: express.Request, res: express.Response) {
    var aluno: Aluno = <Aluno> req.body;
    aluno = cadastro.atualizar(aluno);
    if (aluno) {
      res.send({"success": "O aluno foi atualizado com sucesso"});
    } else {
      res.send({"failure": "O aluno não pode ser atualizado"});
    }
})

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
})

function closeServer(): void {
  server.close();
}

export { server, closeServer }
