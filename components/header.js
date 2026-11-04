function headerComponent(el) {
  const componenteEl = document.createElement("div");
  componenteEl.innerHTML = `<header class="header">
      <img class="logo-img" src="./imagenes/logo-agustin.png" alt="" />
      <img class="logo-menu" src="./imagenes/menu.png" alt="" />
    </header>`;

  el.appendChild(componenteEl);
}
