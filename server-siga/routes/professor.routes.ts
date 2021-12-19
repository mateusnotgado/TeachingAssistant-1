import { Router,Request,Response } from "express";
import { professorController } from "../controllers/professor.controller";


const professorControl = new professorController();
const professorRouter =Router(); 
professorRouter.route("/cadastro")

.get((req: Request, res: Response)=>{
  let alunos = professorControl.getAlunos();
 return res.json({alunos});
})
.post((req: Request, res: Response)=>{
  let resposta=professorControl.cadastrar(req.body);
  if(resposta=="cadastro feito com sucesso"){
     return res.json({sucess:resposta});
  } else if (resposta=="Cpf já cadastrado"){
    return res.json({error:resposta})
  } else {
    return res.json({error:resposta})
  }
   
});


professorRouter.route("/login")
 .get((reg:Request, res: Response)=>{
    return res.json({Hello:"login"});
 });
 export default professorRouter;