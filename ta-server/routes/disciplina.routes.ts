import { Router,Request,Response } from "express";

const router = Router();

router.route("/")
    .get((req: Request, res: Response) => {
        return res.json({Hello: "World"})
    })
export default router;