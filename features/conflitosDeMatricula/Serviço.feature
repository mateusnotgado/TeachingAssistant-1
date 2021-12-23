Scenario:aluno matriculado em disciplinas com sucesso
 Given o sistema tem o aluno "João" e senha "12345678"  e cpf "123"
 And "João" está matriculado em  "Algoritmos", que ocorre na "Segunda" de "13:00" ate as "15:00"
 And existe a discplina de "Lógica" disponivel com capacidade "2" e total de alunos "0", que ocorre na 
 "Terça", das "15:00" as "17:00"
 When o sistema recebe uma solitação de matricula do cpf "123" em  "Lógica" 
 Then o sistema insere "Lógica"   na coleção de disciplinas matriculadas do aluno de cpf "123"
 And incrementa o total de aluno matriculados de "Lógica" para "1"
 And retorna uma mensagem de sucesso : "Mátricula feita com sucesso"
Scenario: conflito de matrícula
Given o sistema tem o aluno "João" e senha "12345678"  e cpf "123"
 And "João" está matriculado em  "Algoritmos", que ocorre na "Segunda" de "13:00" ate as "15:00"
 And existe a discplina de "Lógica" disponivel com capacidade "2" e total de alunos "0", que ocorre na 
 "Segunda", das "14:00" as "16:00"
 When o sistema recebe uma solitação de matricula do cpf "123" em  "Lógica" 
 Then o sistema retorna uma menagem de erro " Conflito de horário na matricula"