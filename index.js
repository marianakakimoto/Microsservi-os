const express = require('express');
const app = express();
const PORT = 3000; 
let alunos = [];
app.use(express.json()); 


app.post('/alunos', (req, res) => {
    const { ra, nome, turma } = req.body;
    const novoAluno = { ra, nome, turma, cursos: [] };
    alunos.push(novoAluno); 
    res.send('Aluno adicionado com sucesso');
});

app.post('/alunos/:ra/cursos', (req, res) => {
    const { ra } = req.params;
    res.send('Curso adicionado ao aluno');
});


app.put('/alunos/:ra', (req, res) => {
    const { ra } = req.params;
    res.send('Dados do aluno alterados');
});


app.put('/alunos/:ra/cursos/:cursoId', (req, res) => {
    const { ra, cursoId } = req.params;
    res.send('Curso do aluno alterado');
});


app.delete('/alunos/:ra', (req, res) => {
    const { ra } = req.params;
    res.send('Aluno removido');
});

app.delete('/alunos/:ra/cursos/:cursoId', (req, res) => {
    const { ra, cursoId } = req.params;
    res.send('Curso do aluno removido');
});


app.get('/alunos', (req, res) => {
    res.send(alunos); 
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



app.post('/alunos', (req, res) => {
    const { ra, nome, turma } = req.body;
    const novoAluno = { ra, nome, turma, cursos: [] };
    alunos.push(novoAluno);
    res.send('Aluno adicionado com sucesso');
});


app.post('/alunos/:ra/cursos', (req, res) => {
    const { ra } = req.params;
    const { curso } = req.body;
    const aluno = alunos.find((aluno) => aluno.ra === ra);
    if (aluno) {
        aluno.cursos.push(curso);
        res.send('Curso adicionado ao aluno');
    } else {
        res.status(404).send('Aluno não encontrado');
    }
});

app.get('/alunos/:ra', (req, res) => {
    const { ra } = req.params;
    const aluno = alunos.find((aluno) => aluno.ra === ra);
    if (aluno) {
        res.send({
            nome: aluno.nome,
            turma: aluno.turma,
            cursos: aluno.cursos
        });
    } else {
        res.status(404).send('Aluno não encontrado');
    }
});

console.log(alunos)