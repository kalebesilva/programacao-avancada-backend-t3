/*

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/

/*

setTimeout(() => { console.log('esperando 5 segundos para aparecer...') } , 5000)

console.log('quando isso aparece?')

*/

/*

Desafio: utilize a classe nativa Date para, dentro de uma função, exibir via console uma string com o dia, mês e ano atual. Em outras palavras: crie uma função sem parâmetros, crie um objeto do tipo Date dentro dela e utilize os métodos getHours, getMinutes e getSeconds para montar uma string com a hora, minuto e segundo. Após a função, acrescente o código setTimeout(nomeDaFuncao, 5000) três vezes. Teste com o comando node ./nomedoarquivo.js via terminal. Perguntas retóricas: o que acontece? Qual o motivo disso acontecer?

Agora, utilize o método setInterval apenas uma vez no lugar de setTimeout e responda às mesmas perguntas.

*/

/*

const fs = require('fs')
console.log('Primeira saída.')
fs.readFile('./text.txt',callback)
function callback(err, conteudo){
    if(err) return console.error(err)
    console.log(String(conteudo))
}
console.log('Segunda saída.')
console.log('Terceira saída.')

*/
/*

function soma(){
    const resultado = 2 + 1
    if(resultado === 2) sucesso()
    else erro()
}
function sucesso(){
    console.log('Sucesso! A soma é 2.')
}
function erro(){
    console.log('Erro! A soma não deu 2.')
}
soma()

*/
// o código acima é síncrono, ou seja, não estamos passando funções como argumentos
// vamos transformar num código assíncrono (com callback)

function soma(callback, callbackErro){
    const resultado = 3 + 1
    if (resultado === 2) callback()
    else callbackErro()
}
soma( () => { console.log('Sucesso! A soma é 2.') } , () => { console.log('Erro! A soma não deu 2.') } )


// Promises
// São classes que possuem métodos específicos para quando o resultado de uma execução for concluído com sucesso ou quando fugir do esperado.
// No construtor, é passada como argumento uma função anônima que possui dois parâmetros:
// resolve - o que vai ser executado quando o resultado for o esperado;
// reject - o que vai ser executado quando o resultado não for o esperado.
// resolve e reject são métodos que, quando executados, também passam argumentos que são resolvidos no then e no catch.

const p = new Promise((resolve, reject) => {
    const resultado = 1 + 1
    if (resultado === 2) resolve('Sucesso! A soma é 2.')
    else reject('Erro! A soma não deu 2.')
})

p.then((mensagem) => {
    console.log(mensagem) 
}).catch((mensagem) => {
    console.log(mensagem)
})


// voltando para callback

const melhorProgramador = 'João Felix'

function oMelhor(callback, callbackErro){
    if(melhorProgramador == 'João Felix'){
        callback({
            nome: melhorProgramador,
            mensagem: 'humildemente o melhor!'
        })
    }else{
        callbackErro({
            mensagem01: 'Tá errado...',
            mensagem02: melhorProgramador + ', sério? '
        })
    }
}
oMelhor((objeto)=>{
    console.log(objeto.nome + ' é ' + objeto.mensagem)
}, (objeto)=>{
    console.log(objeto.mensagem02 + objeto.mensagem01)
})

// Transforme essa callback em Promise.