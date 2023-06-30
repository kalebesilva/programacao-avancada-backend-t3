function soma(resultado) {
  if (resultado() == true) console.log("Sucesso");
  else console.log("Erro");
}

soma(() => {
  const resultado = 2;
  if (resultado === 2) return true;
  else return false;
});
