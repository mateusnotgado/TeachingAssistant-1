Scenario:aluno matriculado em disciplinas com sucesso
 Given eu loguei com "João" e senha "12345678"  e cpf "123"
 And eu vejo as disciplinas disponíveis para matrícula
 And eu estou matriculado apenas em Algoritmos, que ocorre na "Segunda" de "13:00" ate as "15:00"
 And existe a discplina de "Lógica" disponivel com capacidade "2" e total de alunos "0", que ocorre na 
 "Terça", das "15:00" as "17:00"
 When eu seleciono a opção para me matricular em   "Lógica" 
 Then aparece "Lógica"  na coleção de disciplinas matriculadas
 And aparece uma mensagem de sucesso : "Mátricula feita com sucesso"
Scenario: conflito de matrícula
Given eu loguei com "João" e senha "12345678"  e cpf "123"
 And eu vejo as disciplinas disponíveis para matrícula
 And eu estou matriculado apenas em Algoritmos, que ocorre na "Terça" de "14" ate as "16:00"
 And existe a discplina de "Lógica" disponivel com capacidade "2" e total de alunos "0", que ocorre na 
 "Terça", das "15:00" as "17:00"
 When eu seleciono a opção para me matricular em   "Lógica" 
 Then aparece umas mensagem de erro "Conflito de horario na matricula"
 And "Lógica" não aparece na minha coleção de disciplinas matriculadas