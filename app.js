const botaoResumido = document.getElementById("botaoResumido");
botaoResumido.addEventListener("click", () => {
  document.getElementById("selectOrcamentoResumido").style.display = "block";
  document.getElementById("selectOrcamentoNormal").style.display = "none";
});

const botaoNormal = document.getElementById("botaoNormal");
botaoNormal.addEventListener("click", () => {
  document.getElementById("selectOrcamentoNormal").style.display = "block";
  document.getElementById("selectOrcamentoResumido").style.display = "none";
});
