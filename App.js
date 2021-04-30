addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.querySelector(".btn_menu");
  if (btn_menu) {
    btn_menu.addEventListener("click", () => {
      const menu_items = document.querySelector(".menu_items");
      menu_items.classList.toggle("mostrar");
      btn_menu.classList.toggle("ocultar");
      const logo = document.querySelector(".logo");
      logo.classList.toggle("ocultar_logo");
      const cerrar = document.querySelector(".btn_cerrar");
      cerrar.classList.toggle("mostrarCerrar");
      // const menu = document.querySelector(".btn");
      // menu.classList.toggle("cerrar");
    });
  }
});
