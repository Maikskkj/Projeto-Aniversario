function atualizarContador() {
  const agora = new Date();

  let proximoAniversario = new Date(
    agora.getFullYear(),
    6, // Julho
    26,
    0,
    0,
    0,
  );

  // Se o aniversário deste ano já passou,
  // conta para o próximo ano
  if (agora >= proximoAniversario) {
    proximoAniversario = new Date(
      agora.getFullYear() + 1,
      6, // Julho
      26,
      0,
      0,
      0,
    );
  }

  const diferenca = proximoAniversario - agora;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);

  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("dias").textContent = dias;

  document.getElementById("horas").textContent = String(horas).padStart(2, "0");

  document.getElementById("minutos").textContent = String(minutos).padStart(
    2,
    "0",
  );

  document.getElementById("segundos").textContent = String(segundos).padStart(
    2,
    "0",
  );
}

atualizarContador();

setInterval(atualizarContador, 1000);
