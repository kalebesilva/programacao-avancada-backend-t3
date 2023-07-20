const p = new Promise((resolve, reject) => {
  //Cria obj P do tipo promisse
  const resultado = 1 + 1;
  if (resultado === 2)
    resolve("Sucesso do P"); // Usando a funcao async do resolve
  else reject("Erro"); // Usando a funcao async do erro
});

p.then((resultOfOperation) => {
  console.log(resultOfOperation);
}).catch((erroInOperation) => {
  console.log(erroInOperation);
});

// ---------------------------------
//Voltando para callbacks

const melhorProgramador = "Paulo sem pão";

function oMelhor(sucesso, erro) {
  if (melhorProgramador == "João feliz") {
    sucesso({
      nome: "João",
      mensagem2: "Sim, sucesso feliz",
    });
  } else {
    erro({
      mensagem1: "Erro",
      mensagem2: "Só vejo erros :(",
    });
  }
}

oMelhor(
  (objSucesso) => {
    console.log(objSucesso.nome + " A");
    console.log(objSucesso.mensagem2);
  },
  (objErro) => {
    console.log(objErro.mensagem1);
    console.log(objErro.mensagem2);
  }
);

// ---------------------------------
// Transformando a callback anterior em promisse
const theBest = "Joao Fliz";

const myOmelhorPromisse = new Promise((resolve, reject) => {
  if (theBest == "Joao Feliz")
    resolve({
      nome: theBest,
      mensagem: "Eita",
    });
  else
    reject({
      mensagem1: "F, erro",
      mensagem2: theBest + "não é o mior",
    });
});

myOmelhorPromisse
  .then((objResult) => {
    console.log(objResult.nome);
    console.log(objResult.mensagem);
  })
  .catch((objError) => {
    console.log(objError.mensagem1);
    console.log(objError.mensagem2);
  });
