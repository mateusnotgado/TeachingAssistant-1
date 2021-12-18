import express from 'express';
import disciplinaRouter from './routes/disciplina.routes';


const app = express();
const port = 3008;
app.use(express.json())
app.use('/cadastroDisciplina', disciplinaRouter)
app.listen(port,() =>{
    console.log(`servidor executando na porta ${port}`);
})