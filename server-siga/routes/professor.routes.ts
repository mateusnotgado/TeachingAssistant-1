import { Router,Request,Response } from "express";
import { professorController } from "../controllers/professor.controller";


const professorControl = new professorController();
const professorRouter =Router(); 
professorRouter.route("/cadastro")

.get((req: Request, res: Response)=>{
  let professor = professorControl.getProfessor();
 return res.json(professor);
})
.post((req: Request, res: Response)=>{
  let resposta=professorControl.cadastrar(req.body);
  if(resposta=="cadastro feito com sucesso"){
     return res.json({message:resposta});
  } else if (resposta=="Cpf já cadastrado"){
    return res.status(409).json({err:resposta})
  } else {
    return res.status(409).json({err:resposta})
  }
   
});


professorRouter.route("/login")
  .get((req:Request,res:Response)=>{
    return res.json(professorControl.getDadosLogin())
  })
 .post((req:Request, res: Response)=>{
   let cpf=req.body.cpf;
   let senha=req.body.senha;
   let permissao = professorControl.getPermissaoLogin(cpf,senha);
   console.log(permissao+" "+cpf+" "+senha)
   if(permissao){
    professorControl.setProfessor(cpf);
    return res.json({message:"Login feito"});
   }else{
      return res.status(409).json({err:"Cpf e/ou senha inválidos"});
   }
   
 });
 export default professorRouter;