Scenario:aluno matriculado em disciplinas com sucesso
 Given o sistema possui o aluno de nome  "João", senha "12345678" e cpf "123"
 And ele não esta matriculado em nenhuma disciplina
 And existe a discplina de "Lógica" disponivel com capacidade "2" e total de alunos matriculados "0"
 When o sistema recebe uma soliticão de matricula do cpf "123" em  "Lógica" 
 Then o sistema insere "Lógica"   na coleção de disciplinas matriculadas do aluno de cpf "123"
 And incrementa o total de aluno matriculados de "Lógica" para "1"
 And retorna uma mensagem de sucesso : "Mátricula feita com sucesso"
Scenario: disciplina sem vaga
 Given o sistema possui o aluno de nome  "João", senha "12345678" e cpf "123"
 And ele não esta matriculado em nenhuma disciplina
 And existe a discplina de "Lógica" disponivel com capacidade "2" e total de alunos matriculados "0"
 When o sistema recebe uma soliticão de matricula do cpf "123" em  "Lógica" 
 Then o sistema insere "Lógica"   na coleção de disciplinas matriculadas do aluno de cpf "123"
 Then o sistema retorna uma mensagem de erro :" Disciplina sem vagas"
