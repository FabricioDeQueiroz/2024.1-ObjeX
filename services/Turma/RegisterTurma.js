const Turma = require("../../models/Turma");
const Professor = require("../../models/Professor");

const register_turma = async(req, res) => {
    // recebe os dados da requisiçao
    const { nome, horario, professor } = req.body;

    // verifica se já existe uma turma com o memso nome
    if(await Turma.findOne({ nome })) return res.status(400).json({
        error: 'Já existe uma turma com esse nome.'
    });
    
    // cria uma novo turma
    const new_turma = await Turma.create({
        nome,
        horario,
    });
    
    // verifica se a turma foi cadastrada
    if(!new_turma) return res.status(500).json({
        error: 'Erro ao cadastrar turma.'
    });

    // retorna os dados da turma 
    return res.status(201).json({
        turma: {
            id: new_turma._id,
            nome: new_turma.nome,
            horario: new_turma.horario,
        }
    });
};

module.exports = register_turma;