addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.querySelector(".btn_menu");
  if (btn_menu) {
    btn_menu.addEventListener("click", () => {
      const menu_items = document.querySelector(".menu");
      menu_items.classList.toggle("active");
    });
  }

  const btn_cerrar = document.querySelector(".btn_cerrar");
  if (btn_cerrar) {
    btn_cerrar.addEventListener("click", () => {
      const menu_items = document.querySelector(".menu");
      menu_items.classList.remove("active");
    });
  }
});
