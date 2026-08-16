document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-imagem");
  const modalImg = document.getElementById("modal-img");
  const btnFechar = document.getElementById("modal-fechar");
  const imagensGaleria = document.querySelectorAll(".galeria__image");

  // Abre o modal ao clicar em qualquer imagem da galeria
  imagensGaleria.forEach((img) => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt || "Imagem ampliada";
      modal.showModal(); // Método nativo para abrir o <dialog>
    });
  });

  // Fecha ao clicar no botão 'X'
  btnFechar.addEventListener("click", () => {
    modal.close();
  });

  // Fecha ao clicar no fundo escuro (fora da imagem)
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});
