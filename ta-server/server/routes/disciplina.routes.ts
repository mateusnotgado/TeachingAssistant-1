import { Router, Request, Response } from "express";

const disciplinaRouter = Router();

disciplinaRouter.route("/")
    .get((req: Request, res: Response) => {
        return res.json({Hello: "World"})
    })
export default disciplinaRouter;