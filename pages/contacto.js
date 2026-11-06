function contactoComponent(el) {
  const componenteEl = document.createElement("div");

  componenteEl.innerHTML = `<section class="contacto">
        <h3 class="contacto__title">Escribime</h3>
        <form class="contacto__form">
          <div class="cont-datos">
            <label class="cont-label">
              <h3 class="contacto__label">Nombre</h3>
              <input
              class="contacto__input"
              type="text"
              placeholder=" tu nombre"
              />
            </label>
            <div class="espacio__cont-label"></div>
            <label class="cont-label">
              <h3 class="contacto__label">Email</h3>
              <input
              class="contacto__input"
              type="text"
              placeholder=" tu@gmail.com"
              />
            </label>
          </div>
          <label>
            <h3 class="contacto__label">Mensaje</h3>
            <textarea class="contacto__textarea"></textarea>
          </label>
          <div class="contacto__submit-cont">
            <button class="submit-button">
              <h3>Enviar</h3>
              <img class="button-img" src="./imagenes/send.png" alt="">
            </button>
          </div>
        </form>
      </section>`;

  el.appendChild(componenteEl);
}

function contacto() {
  // Llama al Contacto (Propio)
  const contacto = document.querySelector(".contactoComponent");
  if (contacto) {
    contactoComponent(contacto);
    console.log("ejecutando main de servicios");
  }
  //Llama al header
  const headerContacto = document.querySelector(".headerContacto");
  if (headerContacto) {
    headerComponent(headerContacto);
    menuVentana();
  }
  //Llama al Footer
  const footerContacto = document.querySelector(".footerContacto");
  if (footerContacto) {
    footerComponent(footerContacto);
  }
}
contacto();
