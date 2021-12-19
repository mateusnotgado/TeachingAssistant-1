import { Router,Request,Response } from "express";
import { DisciplinaController } from "../controllers/disciplina.controller";



const disciplinaControl = new DisciplinaController();
const disciplinaRouter =Router(); 
disciplinaRouter.route("/")

.get((req: Request, res: Response)=>{
  
 return res.json("lista de diciplinas");
})
.post((req: Request, res: Response)=>{
 return res.json("disciplina ofertada!");
  });

export default disciplinaRouter;
