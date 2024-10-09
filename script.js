// Métados úteis para Promise Pomises.all Pomises.race Pomises.resolve Pomises.reject 

function alea(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Erro ");
    setInterval(() => {
      resolve(msg);
    }, alea(1, 3));
  });
}


const promise = [
  esperaAi("Buscando dados da Base", alea(1, 5)),
  esperaAi("Dados Encontrados", alea(1, 5)),
  esperaAi('Exibe dados na Tela',alea(1,5))
];
Promise.race(promise).then(function(valor){
        console.log(valor)
}).catch(function(erro){
        console.log(erro)
})
