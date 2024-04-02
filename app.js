//UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro
//Análise e Desenvolvimento de Sistemas
//Disciplina: Tópicos Avançados de SI - I
//Autor: Paulo Aquino
//Desafio: Criar caminhos para calcular o dolar, nota e o IMC.


// Definindo a porta
const PORT = 4800;

// Importando os módulos
const http = require('http');
const url = require('url');

// Criando o servidor
const server = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;

    if (path === '/') {
        res.writeHead(200, { "Content-Type": "/plain; charset=utf-8" })
        res.end('End-Point: INDEX (' / ')');
    } else if (path === '/imc') {
        const peso = parseFloat(query.peso);
        const altura = parseFloat(query.altura);


        if (isNaN(peso) || isNaN(altura)) {
            res.writeHead(200, { "Content-Type": "html/plain; charset=utf-8" })
            res.end('Erro 400')
        } else {
            const imc =  peso / (altura ^ 2) 
            if (imc < 18.5) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`IMC abaixo do peso ideal:${imc.toFixed}`)
            } else if (imc >= 18.5 && imc < 24.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`IMC no peso normal:${imc.toFixed(2)}`)
            } else if (imc > 25 && imc < 29.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`IMC acima do peso ideal:${imc.toFixed(2)}`)
            } else if (imc > 30 && imc < 34.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Obesidade nivel I IMC:${imc.toFixed(2)}`)
            } else if (imc > 35 && imc < 39.9) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Obesidade nivel II IMC:${imc.toFixed}`)
            } else {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Obesidade nivel  III IMC:${imc.toFixed}`)
            }
        }


    } else if (path === "/notas") {
        const nota1 = parseFloat(query.n1);
        const nota2 = parseFloat(query.n2);

        if (isNaN(nota1) || isNaN(nota2)) {
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end('Erro 404')
        } else {
            const media = (nota1 + nota2) / 2
            if (media >= 6) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Parabéns, voce foi aprovado media: ${media}`)
            } else if (media == 5) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Você está de recuperação media: ${media}`)
            } else if (media < 5) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
                res.end(`Você foi reprovado media${media}`)
            }

        }

    } else if (path === "/dolar") {

        const dolar = 5.06;
        const valorReal = parseFloat(query.real);

        if (isNaN(valorReal)) {
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end('Erro 404')
        } else {

            const conversao = valorReal / dolar

            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end( `Com R$ ${valorReal.toFixed(2)} Seu saldo convertido para dolár é U$ ${conversao.toFixed(2)}`)
        }
    } else {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
        res.end('Erro 404')
    }
});


server.listen(PORT, () => {
    console.log(`[OK] - Servidor iniciado em http://localhost:${PORT} ...`);
});