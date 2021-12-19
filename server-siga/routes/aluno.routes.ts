import { Router,Request,Response } from "express";
import { alunoController } from "../controllers/aluno.controller";


const alunoControl = new alunoController();
const alunoRouter =Router(); 
alunoRouter.route("/cadastro")

.get((req: Request, res: Response)=>{
  let alunos = alunoControl.getAlunos();
 return res.json({alunos});
})
.post((req: Request, res: Response)=>{
  let resposta=alunoControl.cadastrar(req.body);
  if(resposta=="cadastro feito com sucesso"){
     return res.json({sucess:resposta});
  } else if (resposta=="Cpf já cadastrado"){
    return res.json({error:resposta})
  } else {
    return res.json({error:resposta})
  }
   
});


alunoRouter.route("/login")
 .get((req:Request, res: Response)=>{
   let aluno = req.body;
   let log = alunoControl.encontrarAluno(aluno.cpf,aluno.senha);
   if(log==true){
     return res.json({sucess:"permissão concedida"});
   }else {
    return res.json({error:"permissão negada"})
   }
    
 });
 export default alunoRouter;