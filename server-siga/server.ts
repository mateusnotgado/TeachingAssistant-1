import express from 'express';
import alunoRouter from './routes/aluno.routes';
const app = express();
const port = 8080;


app.use(express.json());

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,  content-type');
    next();
}
app.use(allowCrossDomain);

app.use('/aluno',alunoRouter);

app.listen(port, ()=>{
    console.log(`Servido escutando na porta ${port}`);
});