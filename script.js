let tentativas = 0;

function abrirCarta() {
  const senha = document.getElementById("senha").value.trim().toLowerCase();
  const envelope = document.getElementById("envelope");
  const erro = document.getElementById("mensagemErro");
  const senhaContainer = document.getElementById("containerSenha");

  if (senha === "misto quente") {
    envelope.classList.add("open");
    envelope.classList.add("expandido");
    erro.textContent = "";
    senhaContainer.style.display = "none";
  } else {
    tentativas++;
    if (tentativas >= 5) {
      erro.innerHTML = 'Senha incorreta. Tente novamente.<br><strong>Dica:</strong> O prato que você faz que Vinícius ama';
    } else {
      erro.innerHTML = 'Senha incorreta. Tente novamente.';
    }
  }
}
