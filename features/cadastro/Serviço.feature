Scenario: Login feito com sucesso
 Given o sistema possui o cpf "00011122233" que está cadastrado com a senha "12345678"
 And é de um "professor"
 When o sistema recebe uma solicitação de login  
 And o é cpf "00011122233"
 And a senha é "12345678"
 Then o sistema retorna uma mensagem de confirmação
 And o sistema autoriza o uso do "professor"
 
Scenario: CPF não encontrado
Given o cpf "00011122233" não está cadastrado
 And eu sou um "professor"
 When o sistema recebe uma solicitação de login
 And o cpf é "00011122233"
 And a senha "12345678"
 Then o sistema retorna uma mensagem avisando que o cpf não foi encontrado
 And o sistema não autoriza o uso do "professor"

Scenario: Senha incorreta
 Given o sistema possui o cpf "00011122233" que está cadastrado com a senha "12345678"
 And é de um "professor"
 When o sistema recebe uma solicitação de login  
 And o é cpf "00011122233"
 And a senha é "12345679"
 Then o sistema retorna uma mensagem avisando que a senha está incorreta
 And o sistema não autoriza o uso do "professor"