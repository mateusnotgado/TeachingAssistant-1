import { Router,Request,Response } from "express";
import { alunoController } from "../controllers/aluno.controller";


const alunoControl = new alunoController();
const alunoRouter =Router(); 
alunoRouter.route("/cadastro")

.get((req: Request, res: Response)=>{
  let alunos = alunoControl.getAlunos();
 return res.json(alunos);
})
.post((req: Request, res: Response)=>{
  let resposta=alunoControl.cadastrar(req.body);
  if(resposta=="cadastro feito com sucesso"){
     return res.json({message:resposta});
  } else if (resposta=="Cpf já cadastrado"){
    return res.status(409).json({err:resposta})
  } else {
    return res.status(409).json({err:resposta})
  }
   
});


alunoRouter.route("/login")
  .get((req:Request,res:Response)=>{
    return res.json(alunoControl.getAluno())
  })
 .post((req:Request, res: Response)=>{
   let cpf=req.body.cpf;
   let senha=req.body.senha;
   let permissao = alunoControl.getPermissaoLogin(cpf,senha);
   if(permissao){
     alunoControl.setAluno(cpf);
     return res.json({message:"Login feito"});
   }else{
      return res.status(409).json({err:"Cpf e/ou senha inválidos"});
   }
   
 })
 .put((req:Request,res:Response)=>{
  let temConflito= alunoControl.matricula(req.body.disciplina,req.body.aluno)
   if(temConflito){
    return res.status(409).json({err:"Disciplina não pode ser cadastrada por conflitos de horário"});
   }else {
return res.json({message:"Matricula feita com sucesso"})
   }
   
 });
 export default alunoRouter;