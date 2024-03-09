function validarFormulario() {
  const campoA = document.getElementById('campoA');
  const campoB = document.getElementById('campoB');
  const mensagemResultado = document.getElementById('mensagemResultado');

  // Convertendo os valores para números
  const valorCampoA = parseFloat(campoA.value);
  const valorCampoB = parseFloat(campoB.value);

  // Limpar mensagens anteriores
  mensagemResultado.innerHTML = '';

  // Validar se B é maior que A
  if (valorCampoB > valorCampoA) {
    const mensagemSucesso = document.createElement('div');
    mensagemSucesso.className = 'valido';
    mensagemSucesso.innerHTML = `Campo B <b>${campoB.value}</b> é maior que <b>${campoA.value}</b>`;
    mensagemResultado.appendChild(mensagemSucesso);
  } else {
    const mensagemSemSucesso = document.createElement('div');
    mensagemSemSucesso.className = 'invalido';
    mensagemSemSucesso.innerHTML = `Campo B <b>${campoB.value}</b> não é maior que <b>${campoA.value}</b>`;
    mensagemResultado.appendChild(mensagemSemSucesso);
  }
}