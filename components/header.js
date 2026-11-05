function headerComponent(el) {
  const componenteEl = document.createElement("div");
  componenteEl.innerHTML = `<header class="header">
      <img class="logo-img" src="./imagenes/logo-agustin.png" alt="" />
      <img class="logo-menu" src="./imagenes/menu.png" alt="" />
      <div class="ventana">
        <div class="cont-ventana__cerrar">
          <img
            class="ventana__cerrar"
            src="./imagenes/close-svgrepo-com (1) 1.png"
            alt=""
          />
        </div>
        <div class="cont-espacio"></div>
        <div class="ventana-menu-cont">
          <a class="ventana_title" href="./portfolio.html">Portfolio</a>
          <a class="ventana_title" href="./servicios.html">Servicios</a>
          <a class="ventana_title" href="./contacto.html">Contacto</a>
        </div>
      </div>
    </header>`;

  el.appendChild(componenteEl);
}

function menuVentana() {
  //Logica del Menu de Opciones
  const abreVentanaEl = document.querySelector(".logo-menu");
  const ventanaEl = document.querySelector(".ventana");
  const cerrarVentanaEl = document.querySelector(".ventana__cerrar");
  // Abrir ventana
  abreVentanaEl.addEventListener("click", (e) => {
    ventanaEl.style.display = "inherit";
  });
  // Cerrar vetana
  cerrarVentanaEl.addEventListener("click", (e) => {
    ventanaEl.style.display = "";
  });
}
