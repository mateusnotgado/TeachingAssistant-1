Scenario: Login feito com sucesso
 Given eu estou na pagina de Login
 And o cpf "00011122233" está cadastrado com a senha "12345678"
 And eu sou um "professor"
 When eu coloco o cpf "00011122233"
 And a senha "12345678"
 And eu confirmo o Login
 Then aparece uma mensagem confirmando o Login
 And aparece a interface do "professor"
 
Scenario: CPF não encontrado
Given eu estou na pagina de Login
 And o cpf "00011122233" não está cadastrado
 And eu sou um "professor"
 When eu coloco o cpf "00011122233"
 And a senha "12345678"
 And eu confirmo o Login
 Then aparece uma mensagem avisando que o cpf não foi encontrado
 And eu continuo na tela de Login

Scenario: Senha incorreta
 Given eu estou na pagina de Login
 And o cpf "00011122233" está cadastrado com a senha "12345678"
 And eu sou um "professor"
 When eu coloco o cpf "00011122233"
 And a senha "12345679"
 And eu confirmo o Login
 Then aparece uma mensagem avisando que a senha está incorreta
 And eu continuo na tela de Login
© 2021 GitHub, Inc.
Terms
Privacy
Securit