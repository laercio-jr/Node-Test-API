//Testando os metodos GET, POST, PUT e DELETE com o Node.JS 

const express = require('express');
const server = express();
server.use(express.json()); //Server recebendo informações de Express convertida em JSON

const cursos = ['Curso 1', 'Curso 2', 'Curso 3']; //Banco na memória

//GET, para consultar um unico curso passando id na rota
server.get('/cursos/:index', (req, res) => {
    const {index} = req.params;

    return res.json(cursos[index]);

});

//GET, para recuperar todos os cursos
server.get('/cursos', (req,res) => {
    return res.json(cursos);
});

//POST, de um curso novo
server.post('/cursos', (req,res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//PUT, para atualizar um registro
server.put('/cursos/:index', (req,res) => {
    const { index } = req.params;
    const { name } = req.body;
    
    cursos[index] = name;

    return res.json(cursos);
});

//DELETE, para excluir um curso pelo id informado rota
server.delete('/cursos/:index', (req,res) => {
    const { index } = req.params;
    
    cursos.splice(index, 1)

    return res.json({message: `Curso ${index} deletado`});
});


server.listen(3000); //Porta que ficará hospedado no localhost