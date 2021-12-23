Scenario:aluno matriculado em disciplinas com sucesso
 Given eu loguei com "João" e senha "12345678"  e cpf "123"
 And eu vejo as disciplinas disponíveis para matrícula
 And eu  não estou matriculado em nenhuma dela
 And existe a discplina de "Lógica" disponivel com capacidade "2" e total de alunos "0"
 When eu seleciono a opção para me matricular em   "Lógica" 
 Then aparece "Lógica"  na coleção de disciplinas matriculadas
 And aparece uma mensagem de sucesso : "Mátricula feita com sucesso"
Scenario: disciplina sem vaga
 Given eu loguei com "João" e senha "12345678"  e cpf "123"
 And eu vejo as disciplinas disponíveis para matrícula 
 And eu  não estou matriculado em nenhuma dela
 And existe a discplina de "Lógica" disponivel com capacidade "2" e total de alunos "2"
 When eu seleciono a opção para me matricular em   "Lógica" 
 Then aparece uma mensagem de erro :" Disciplina sem vagas"
 And "lógica" não aparece na coleção de disciplinas matriculadas