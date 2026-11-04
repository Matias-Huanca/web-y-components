function contactoComponent(el) {
  const componenteEl = document.createElement("div");

  componenteEl.innerHTML = `<section class="contacto">
        <h3 class="contacto__title">Escribime</h3>
        <form class="contacto__form">
          <label>
            <h3 class="contacto__label">Nombre</h3>
            <input
              class="contacto__input"
              type="text"
              placeholder="tu nombre"
            />
          </label>
          <label>
            <h3 class="contacto__label">Email</h3>
            <input
              class="contacto__input"
              type="text"
              placeholder="tu@gmail.com"
            />
          </label>
          <label>
            <h3 class="contacto__label">Mensaje</h3>
            <textarea class="contacto__textarea"></textarea>
          </label>
          <div class="contacto__submit-cont">
            <button class="submit-button">Enviar</button>
          </div>
        </form>
      </section>`;

  el.appendChild(componenteEl);
}
