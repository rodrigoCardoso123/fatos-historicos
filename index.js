const express = require('express');
const app = express();

const servicoBuscarFatoPorAno = require("./servico/servicos")

app.get('/', (req, res) =>  {
    let Anofato = req.query.Anofato
    let ano = servicoBuscarFatoPorAno.servicoValidaAno(Anofato)

    if(ano){
        let fatosAnos = servicoBuscarFatoPorAno.servicoBuscarFatoPorAno(Anofato)
        res.json({fato: fatosAnos.Fato});
    }else{
        res.status(400).json({erro:'Parâmetro ano inválido'});
    }   
});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8081");
});