const { default: axios } = require("axios");
const fs = require('fs');
const path = require('path');
const { stdout, stderr } = require("process");
const exec = require('child_process').exec;

const run_interpreter_code_and_test = async(req, res) => {
    const { code, atividade_id, usuario_id } = req.body;
    let test_cases = '';
    // TODO DEIXAR A ROTA DINAMICA
    try {
        const res = await axios.get(`http://localhost:3001/atividade/casos/teste?atividade_id=${atividade_id}`);
        test_cases = res.data;
    } catch (error) {
        console.log(error);
    }

    const temp_code = `${code}\n${test_cases}`;
    const upload_directory = path.join(__dirname, '../uploads');
    const file_path = path.join(upload_directory, 'temp_code.py');
    fs.writeFileSync(file_path, temp_code);
    const command = `python3 ${file_path}`;
    exec(command, async(error, stdout, stderr) => {
        if (error) {
            res.json({
                status: 'error',
                message: error.message
            });
            return;
        }
        if(stderr){
            res.json({
                status: 'error',
                message: stderr
            });
            return;
        }
        // TODO DEIXAR A ROTA DINAMICA
        await axios.post(`http://localhost:3001/atividade/registrar/resposta`, {
            code: code,
            atividade_id: atividade_id,
            passed: true,
            usuario_id: usuario_id,
        })
        res.json({
            status: 'success',
            message: stdout
        });
    })
    // res.send(temp_code);
}

module.exports = run_interpreter_code_and_test;