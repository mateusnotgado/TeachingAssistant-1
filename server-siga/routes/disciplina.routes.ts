import { Router,Request,Response } from "express";
import { disciplinaController } from "../controllers/disciplina.controller";



const disciplinaControl = new disciplinaController();
const disciplinaRouter =Router(); 

disciplinaRouter.route("/cadastroDisciplina")

.get((req: Request, res: Response)=>{
    
    let disciplinas = disciplinaControl.getDisciplinas();
    return res.json(disciplinas);
})
.post((req: Request, res: Response)=>{
  let disciplina=req.body;
    let resposta=disciplinaControl.camposPreenchidos(disciplina);
    if(!resposta){
     return res.status(409).json({error:"Por favor preencha todos os campos"})
    }
    resposta=disciplinaControl.checarClonflitos(disciplina);
    if(resposta){
      return res.status(409).json({error:"Conflito detectado, por favor verifique os horários"})
    }
    disciplinaControl.cadastrar(disciplina);
    return res.json({sucess:"Cadastro feito com sucesso"});
    })
  .put((req: Request, res: Response)=>{
      return res.json({Warning:"Put não suportado para essa rota"});
  });

    

disciplinaRouter.route("/ofertaDisciplina")

  .get((req: Request, res: Response)=>{
    
    let disciplinas = disciplinaControl.getDisciplinas();
    return res.json(disciplinas);
  })
  .put((req: Request, res: Response)=>{
    return res.json({Warning:"Put não suportado para essa rota"});
})

export default disciplinaRouter;
