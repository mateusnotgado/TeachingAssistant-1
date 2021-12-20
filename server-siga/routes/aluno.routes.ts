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
 .get((req:Request, res: Response)=>{
   let aluno = req.body;
   let log = alunoControl.encontrarAluno(aluno.cpf,aluno.senha);
   if(log==true){
     return res.json({message:"permissão concedida"});
   }else {
    return res.status(409).json({err:"permissão negada"})
   }
    
 });
 export default alunoRouter;