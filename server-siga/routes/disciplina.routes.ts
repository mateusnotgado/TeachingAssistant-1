import { Router,Request,Response } from "express";
import { disciplinaController } from "../controllers/disciplina.controller";



const disciplinaControl = new disciplinaController();
const disciplinaRouter =Router(); 

disciplinaRouter.route("/cadastroDisciplina")

  .get((req: Request, res: Response)=>{
    
    let disciplinas = disciplinaControl.getDisciplinas();
    return res.json({disciplinas});
  })
  .post((req: Request, res: Response)=>{
    let resposta=disciplinaControl.cadastrar(req.body);
    if(resposta=="Cadastro feito com sucesso"){
      return res.json({sucess:resposta});
    } else {
      return res.json({error:resposta})
    }
    })
  .put((req: Request, res: Response)=>{
      return res.json({Warning:"Funcionando"});
  })
    ;

    

disciplinaRouter.route("/ofertaDisciplina")

  .get((req: Request, res: Response)=>{
    
    let disciplinas = disciplinaControl.getDisciplinas();
    return res.json({disciplinas});
  })
 

export default disciplinaRouter;
