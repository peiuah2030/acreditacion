document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-ghost");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Aquí puedes vincular una carpeta, documento o repositorio de evidencias.");
    });
  });
});
